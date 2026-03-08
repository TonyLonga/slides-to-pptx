# HTML to PPTX Conversion Guide

A detailed guide for converting HTML slides to PowerPoint.

## Overview

When converting HTML-based presentations to PPTX, specific rules must be followed.
This document explains the considerations and best practices for conversion.

## HTML Slide Authoring Rules

### Layout Dimensions

Use exact dimensions matching the presentation aspect ratio:

| Ratio | Width | Height | Usage |
|-------|-------|--------|-------|
| 16:9 | 1280px | 720px | Standard widescreen (recommended) |
| 4:3 | 1024px | 768px | Classic ratio |
| 16:10 | 1280px | 800px | MacBook etc. |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .slide {
      width: 1280px;
      height: 720px;
      margin: 0;
      padding: 40px;
      box-sizing: border-box;
      font-family: 'Noto Sans SC', sans-serif;
    }
  </style>
</head>
<body>
  <div class="slide">
    <!-- Slide content -->
  </div>
</body>
</html>
```

### Text Rules

**Important**: All text must be inside the following tags:

- `<p>` - Regular paragraphs
- `<h1>` ~ `<h6>` - Headings
- `<ul>`, `<ol>` - Lists
- `<li>` - List items

```html
<!-- ✅ Correct -->
<h1>This is a heading</h1>
<p>This is body text.</p>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- ❌ Wrong - text will be lost during conversion -->
<div>This text will not be converted</div>
<span>This will also be lost</span>
```

### Inline Styling

Supported inline styles:

```html
<p>
  <strong>Bold text</strong>
  <em>Italic text</em>
  <u>Underlined text</u>
  <span style="color: #10B981;">Colored text</span>
</p>
```

### Font Usage

**Noto Sans SC font required for Chinese text**

Web-safe font fallback chain:

```css
font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont,
             'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

## Unsupported Features

### CSS Gradients

CSS gradients cannot be converted to PPTX.

```css
/* ❌ Will not be converted */
background: linear-gradient(to right, #10B981, #2563EB);
```

**Workaround**: If gradients are needed, generate them as PNG images first:

```javascript
const sharp = require('sharp');

// Create gradient as SVG and convert to PNG
const svgGradient = `
<svg width="400" height="100">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#10B981"/>
      <stop offset="100%" style="stop-color:#2563EB"/>
    </linearGradient>
  </defs>
  <rect width="400" height="100" fill="url(#grad)"/>
</svg>`;

await sharp(Buffer.from(svgGradient))
  .png()
  .toFile('gradient-bg.png');
```

### Complex CSS

CSS properties that will not be converted:

- `box-shadow` (outer shadows)
- `transform`
- `animation`, `transition`
- `filter`
- `clip-path`
- CSS Grid/Flexbox (layout calculation only)

### Web Fonts

Web fonts not installed on the system will be substituted.
**Make sure to install Noto Sans SC on the system.**

## Conversion Process

### Step 1: Prepare HTML

Create HTML files for each slide:

```
slides/
├── slide1.html  (Title)
├── slide2.html  (Strengths)
├── slide3.html  (Weaknesses)
├── slide4.html  (Improvement Points)
└── slide5.html  (Summary)
```

### Step 2: Pre-generate Images

Pre-generate gradients, icons, etc. as PNG:

```
assets/
├── gradient-header.png
├── match-circle.png
└── icons/
    ├── check.png
    ├── warning.png
    └── cross.png
```

### Step 3: Execute Conversion

Conversion script using PptxGenJS:

```javascript
const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

async function convertHtmlToPptx(slidesDir, outputPath) {
  const pptx = new PptxGenJS();

  // Configuration
  pptx.author = 'Author';
  pptx.title = 'Presentation Title';
  pptx.defineLayout({ name: 'CUSTOM', width: 13.33, height: 7.5 });
  pptx.layout = 'CUSTOM';

  // Convert each HTML file to a slide
  const files = fs.readdirSync(slidesDir)
    .filter(f => f.endsWith('.html'))
    .sort();

  for (const file of files) {
    const html = fs.readFileSync(path.join(slidesDir, file), 'utf-8');
    await addSlideFromHtml(pptx, html);
  }

  await pptx.writeFile({ fileName: outputPath });
  console.log(`Created: ${outputPath}`);
}

async function addSlideFromHtml(pptx, html) {
  const slide = pptx.addSlide();

  // HTML parsing and element conversion logic
  // (use cheerio or jsdom)

  return slide;
}
```

### Step 4: Validation

Open the generated PPTX in PowerPoint and verify:

- All text is displayed correctly
- Fonts are properly applied
- Layout matches the intended design
- Images are properly embedded

## Table Conversion

Converting HTML tables to PPTX tables:

```html
<!-- HTML -->
<table>
  <thead>
    <tr>
      <th>Category</th>
      <th>Requirements</th>
      <th>Skills</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tech Stack</td>
      <td>React</td>
      <td>React, Next.js</td>
    </tr>
  </tbody>
</table>
```

```javascript
// PptxGenJS conversion
const tableData = [
  [
    { text: 'Category', options: { bold: true, fill: '2563EB', color: 'FFFFFF' } },
    { text: 'Requirements', options: { bold: true, fill: '2563EB', color: 'FFFFFF' } },
    { text: 'Skills', options: { bold: true, fill: '2563EB', color: 'FFFFFF' } }
  ],
  [
    { text: 'Tech Stack' },
    { text: 'React' },
    { text: 'React, Next.js' }
  ]
];

slide.addTable(tableData, {
  x: 0.5,
  y: 1.5,
  w: 12,
  fontFace: 'Noto Sans SC',
  fontSize: 14,
  border: { type: 'solid', pt: 1, color: 'E5E7EB' }
});
```

## Best Practices

1. **Keep it simple**: Use basic styles rather than complex CSS
2. **Use images**: Pre-generate complex visual elements as PNG
3. **Test repeatedly**: Always verify in PowerPoint after conversion
4. **Specify fonts**: Set Noto Sans SC on all text elements
5. **Watch colors**: Use color codes without `#` (PptxGenJS)
