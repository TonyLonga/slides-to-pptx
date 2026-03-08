# Slides to PPTX

> An AI Agent skill for creating stunning, animation-rich HTML presentations with optional PowerPoint (PPTX) export.

[中文说明](README_zh.md)

## ✨ Overview

**Slides to PPTX** combines the best of two excellent skills:

- 🎨 **[frontend-slides](https://github.com/zarazhangrui/frontend-slides)** — Zero-dependency, animation-rich HTML presentations
- 📊 **[make-pptx](https://skills.sh/window-ook/fit-checker/make-pptx)** — PowerPoint generation via PptxGenJS

Helps non-designers discover their aesthetic preferences through **visual exploration** (not abstract choices), delivering an end-to-end workflow from content to PowerPoint.

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| 🚀 **Zero Dependencies** | Single HTML file with inline CSS/JS — no npm, no build tools |
| 👀 **Show, Don't Tell** | Generates 3 visual previews to choose from, not text descriptions |
| 🎭 **12 Style Presets** | From Electric Studio to Dark Botanical — no cookie-cutter designs |
| 📱 **Perfect Viewport Fit** | Every slide fits exactly within 100vh, fully responsive |
| ✏️ **Inline Editing** | Optional in-browser text editing with auto-save to localStorage |
| 📄 **PPTX Export** | Export to PowerPoint via PptxGenJS |
| 🌍 **Multi-language** | Supports Chinese, English, and other languages |

## 🔄 Workflow

```
Phase 0  Detect Mode ─────────  New / PPT Conversion / Enhancement
   ↓
Phase 1  Content Discovery ───  Purpose, length, content, editing preference
   ↓
Phase 2  Style Discovery ─────  Mood → 3 visual previews → user picks
   ↓
Phase 3  Generate HTML ────────  Single self-contained file with animations
   ↓
Phase 4  PPT Conversion ──────  (optional) Convert .pptx → HTML
   ↓
Phase 5  PPTX Export ──────────  (optional) HTML → .pptx via PptxGenJS
   ↓
Phase 6  Delivery ─────────────  Open in browser, summarize, clean up
```

## 📦 Installation

### Via [skills.sh](https://skills.sh)

```bash
npx skills add TonyLonga/slides-to-pptx
```

### Manual Installation

Copy the `slides-to-pptx` directory into your project's `.agents/skills/` directory.

### PPTX Export Dependency

Only required if you need PPTX export:

```bash
npm install pptxgenjs
```

## 🤖 Supported Agents

This skill works with any agent that supports the `SKILL.md` format:

| Agent | Directory |
|-------|-----------|
| Cursor | `.cursor/skills/` |
| Claude Code | `.claude/skills/` |
| Gemini CLI | `.gemini/skills/` |
| Antigravity | `.agent/skills/` |
| Windsurf | `.windsurf/skills/` |
| Codex | `.agents/skills/` |
| Amp, Cline, OpenCode, etc. | `.agents/skills/` (universal) |

> 💡 Using `npx skills add` will install to all compatible agents automatically.

## 🚀 Usage

After installation, trigger the skill in your conversation with `@slides-to-pptx` or `/slides-to-pptx`.

### Examples

```
# Create a presentation from a document
@slides-to-pptx Convert this document into a presentation

# Create from scratch
@slides-to-pptx Create a pitch deck for my startup idea

# Convert existing PPT to HTML
@slides-to-pptx Convert this .pptx file to a modern web presentation

# With PPTX export
@slides-to-pptx Create slides about our Q1 results and export to PPTX
```

## 🎨 Style Presets

12 curated visual presets covering different moods and aesthetics:

| Mood | Presets |
|------|---------|
| Professional & Confident | Bold Signal, Electric Studio, Dark Botanical |
| Exciting & Energized | Creative Voltage, Neon Cyber, Split Pastel |
| Calm & Focused | Notebook Tabs, Paper & Ink, Swiss Modern |
| Inspiring & Emotional | Dark Botanical, Vintage Editorial, Pastel Geometry |

## 📁 File Structure

```
slides-to-pptx/
├── SKILL.md               # Core instructions (6-phase workflow)
├── STYLE_PRESETS.md        # 12 visual style presets
├── viewport-base.css       # Mandatory responsive CSS
├── html-template.md        # HTML architecture reference
├── animation-patterns.md   # Animation patterns reference
├── html2pptx.md            # HTML → PPTX conversion guide
├── ooxml.md                # OOXML technical reference
├── generate-pptx.js        # PptxGenJS reference implementation
├── scripts/
│   └── extract-pptx.py     # PPT content extraction script
├── README.md               # This file (English)
├── README_zh.md            # 中文说明
└── LICENSE                 # MIT License
```

## 🙏 Credits

Built upon these excellent works:

- **[frontend-slides](https://github.com/zarazhangrui/frontend-slides)** by Zara Zhang — The foundation for HTML slide generation
- **[make-pptx](https://skills.sh/window-ook/fit-checker/make-pptx)** by window-ook — PPTX export capabilities

## 📄 License

[MIT License](LICENSE)
