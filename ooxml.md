# OOXML Technical Reference

Technical reference for Office Open XML (OOXML), the internal structure of PowerPoint files (PPTX).

## PPTX File Structure

A PPTX file is a collection of ZIP-compressed XML files.

### Basic Structure

```
presentation.pptx (ZIP)
├── [Content_Types].xml          # Content type definitions
├── _rels/
│   └── .rels                    # Root relationship file
├── docProps/
│   ├── app.xml                  # Application properties
│   └── core.xml                 # Core properties (title, author, etc.)
└── ppt/
    ├── presentation.xml         # Main presentation definition
    ├── presProps.xml            # Presentation properties
    ├── tableStyles.xml          # Table styles
    ├── viewProps.xml            # View properties
    ├── _rels/
    │   └── presentation.xml.rels  # Presentation relationships
    ├── slideLayouts/            # Slide layouts
    │   ├── slideLayout1.xml
    │   └── _rels/
    ├── slideMasters/            # Slide masters
    │   ├── slideMaster1.xml
    │   └── _rels/
    ├── slides/                  # Actual slides
    │   ├── slide1.xml
    │   ├── slide2.xml
    │   └── _rels/
    ├── theme/                   # Theme
    │   └── theme1.xml
    └── media/                   # Media files (images, etc.)
        ├── image1.png
        └── image2.png
```

## Slide XML Structure

### Basic Slide Structure

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
       xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"
       xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main">
  <p:cSld>
    <p:spTree>
      <p:nvGrpSpPr>
        <p:cNvPr id="1" name=""/>
        <p:cNvGrpSpPr/>
        <p:nvPr/>
      </p:nvGrpSpPr>
      <p:grpSpPr/>

      <!-- Shape/text elements -->

    </p:spTree>
  </p:cSld>
</p:sld>
```

### Text Elements

```xml
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="2" name="Title 1"/>
    <p:cNvSpPr/>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="457200" y="274638"/>  <!-- Position (EMU units) -->
      <a:ext cx="8229600" cy="1143000"/>  <!-- Size (EMU units) -->
    </a:xfrm>
  </p:spPr>
  <p:txBody>
    <a:bodyPr/>
    <a:lstStyle/>
    <a:p>
      <a:r>
        <a:rPr lang="zh-CN" dirty="0">
          <a:latin typeface="Noto Sans SC"/>
          <a:ea typeface="Noto Sans SC"/>
        </a:rPr>
        <a:t>Title Text</a:t>
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

### Font Specification (Noto Sans SC)

To apply Noto Sans SC font to all text:

```xml
<a:rPr lang="zh-CN" dirty="0">
  <a:latin typeface="Noto Sans SC" panose="020B0604020202020204"/>
  <a:ea typeface="Noto Sans SC"/>  <!-- For East Asian characters -->
  <a:cs typeface="Noto Sans SC"/>  <!-- For complex scripts -->
</a:rPr>
```

### Color Specification

```xml
<!-- Solid fill -->
<a:solidFill>
  <a:srgbClr val="10B981"/>  <!-- HEX color without # -->
</a:solidFill>

<!-- Theme color -->
<a:solidFill>
  <a:schemeClr val="accent1"/>
</a:solidFill>
```

## Unit System

OOXML uses EMU (English Metric Units):

| Unit | EMU Value |
|------|-----------|
| 1 inch | 914400 |
| 1 cm | 360000 |
| 1 pt | 12700 |
| 1 px (96dpi) | 9525 |

### Conversion Formulas

```javascript
// Inches → EMU
const emuFromInches = inches => Math.round(inches * 914400);

// Points → EMU
const emuFromPoints = points => Math.round(points * 12700);

// Pixels (96dpi) → EMU
const emuFromPixels = pixels => Math.round(pixels * 9525);
```

## Shape Types

### Rectangle

```xml
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="3" name="Rectangle 1"/>
    <p:cNvSpPr/>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="914400" y="914400"/>
      <a:ext cx="3657600" cy="1828800"/>
    </a:xfrm>
    <a:prstGeom prst="rect">
      <a:avLst/>
    </a:prstGeom>
    <a:solidFill>
      <a:srgbClr val="F9FAFB"/>
    </a:solidFill>
    <a:ln w="12700">  <!-- Line width (EMU) -->
      <a:solidFill>
        <a:srgbClr val="E5E7EB"/>
      </a:solidFill>
    </a:ln>
  </p:spPr>
</p:sp>
```

### Rounded Rectangle

```xml
<a:prstGeom prst="roundRect">
  <a:avLst>
    <a:gd name="adj" fmla="val 16667"/>  <!-- Corner radius -->
  </a:avLst>
</a:prstGeom>
```

## Image Insertion

### 1. Add Media File

Add the image to the `ppt/media/` directory:

```
ppt/media/image1.png
```

### 2. Update Relationship File

`ppt/slides/_rels/slide1.xml.rels`:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1"
                Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout"
                Target="../slideLayouts/slideLayout1.xml"/>
  <Relationship Id="rId2"
                Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image"
                Target="../media/image1.png"/>
</Relationships>
```

### 3. Reference Image in Slide

```xml
<p:pic>
  <p:nvPicPr>
    <p:cNvPr id="4" name="Picture 1"/>
    <p:cNvPicPr/>
    <p:nvPr/>
  </p:nvPicPr>
  <p:blipFill>
    <a:blip r:embed="rId2"/>  <!-- Relationship ID reference -->
    <a:stretch>
      <a:fillRect/>
    </a:stretch>
  </p:blipFill>
  <p:spPr>
    <a:xfrm>
      <a:off x="914400" y="914400"/>
      <a:ext cx="3657600" cy="2743200"/>
    </a:xfrm>
    <a:prstGeom prst="rect">
      <a:avLst/>
    </a:prstGeom>
  </p:spPr>
</p:pic>
```

## Content Types

Register new file types in `[Content_Types].xml`:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="png" ContentType="image/png"/>
  <Default Extension="jpeg" ContentType="image/jpeg"/>
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/ppt/presentation.xml"
            ContentType="application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml"/>
  <Override PartName="/ppt/slides/slide1.xml"
            ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>
  <!-- Additional slides... -->
</Types>
```

## Validation

Verification checklist after modifying a PPTX file:

1. **XML validity**: Ensure all XML files are well-formed
2. **Relationship files**: Verify all references (rId) are valid
3. **Content types**: Update Content_Types.xml when adding new files
4. **Unused resources**: Clean up unused media files
5. **UTF-8 encoding**: Verify Unicode character encoding

### Unicode Escaping

Special characters must be escaped as XML entities:

| Character | Escape |
|-----------|--------|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |
| `"` | `&quot;` or `&#8220;` |
| `'` | `&apos;` |

### Whitespace Preservation

To preserve whitespace in text:

```xml
<a:t xml:space="preserve">  Text with spaces  </a:t>
```

## PPTX Unpack/Repack

### Unpack (Extract)

```bash
# macOS/Linux
unzip presentation.pptx -d unpacked/

# Or Python
python -c "import zipfile; zipfile.ZipFile('presentation.pptx').extractall('unpacked/')"
```

### Repack (Re-compress)

```bash
# macOS/Linux
cd unpacked/
zip -r ../new_presentation.pptx .

# Or Python
import zipfile
import os

def repack_pptx(source_dir, output_path):
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(source_dir):
            for file in files:
                file_path = os.path.join(root, file)
                arc_name = os.path.relpath(file_path, source_dir)
                zf.write(file_path, arc_name)
```

## References

- [ECMA-376 Office Open XML Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-376/)
- [PptxGenJS Official Documentation](https://gitbrent.github.io/PptxGenJS/)
- [Open XML SDK Documentation](https://docs.microsoft.com/en-us/office/open-xml/open-xml-sdk)
