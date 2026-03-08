# Slides to PPTX

> 一个 AI Agent 技能，用于创建精美的、动画丰富的 HTML 演示文稿，并支持导出为 PowerPoint (PPTX) 文件。

[English](README.md)

## ✨ 功能简介

**Slides to PPTX** 结合了两个优秀技能的核心功能：

- 🎨 **[frontend-slides](https://github.com/zarazhangrui/frontend-slides)** — 创建零依赖、动画丰富的 HTML 演示文稿
- 📊 **[make-pptx](https://skills.sh/window-ook/fit-checker/make-pptx)** — 使用 PptxGenJS 生成 PowerPoint 文件

帮助非设计师通过**视觉探索**（而非抽象选择）发现自己的美学偏好，并一站式完成从内容到 PowerPoint 的完整工作流。

## 🎯 核心特性

| 特性 | 说明 |
|------|------|
| 🚀 **零依赖** | 单个 HTML 文件，内联 CSS/JS，无需 npm 或构建工具 |
| 👀 **所见即所得** | 生成 3 个视觉预览供选择，而非文字描述 |
| 🎭 **12 种预设风格** | 从 Electric Studio 到 Dark Botanical，拒绝千篇一律 |
| 📱 **完美屏幕适配** | 每张幻灯片精确适配 100vh，支持响应式 |
| ✏️ **在线编辑** | 可选的浏览器内文字编辑功能，自动保存至 localStorage |
| 📄 **PPTX 导出** | 通过 PptxGenJS 导出为 PowerPoint 文件 |
| 🌍 **多语言支持** | 支持中文、英文等多种语言 |

## 🔄 工作流程

```
阶段 0  检测模式 ─────────  新建 / PPT 转换 / 增强
   ↓
阶段 1  内容发现 ─────────  用途、长度、内容、编辑偏好
   ↓
阶段 2  风格发现 ─────────  氛围选择 → 3 个预览 → 用户选择
   ↓
阶段 3  生成 HTML ────────  单一自包含文件，含动画效果
   ↓
阶段 4  PPT 转换 ─────────  （可选）将 .pptx 转为 HTML
   ↓
阶段 5  PPTX 导出 ────────  （可选）通过 PptxGenJS 导出
   ↓
阶段 6  交付 ──────────────  浏览器打开、总结、清理
```

## 📦 安装

### 通过 [skills.sh](https://skills.sh) 安装

```bash
npx skills add TonyLonga/slides-to-pptx
```

### 手动安装

将 `slides-to-pptx` 目录复制到你的项目的 `.agents/skills/` 目录下。

### PPTX 导出依赖

仅在需要 PPTX 导出时安装：

```bash
npm install pptxgenjs
```

## 🤖 兼容的 AI Agent

本技能支持所有兼容 `SKILL.md` 格式的 Agent：

| Agent | 目录 |
|-------|------|
| Cursor | `.cursor/skills/` |
| Claude Code | `.claude/skills/` |
| Gemini CLI | `.gemini/skills/` |
| Antigravity | `.agent/skills/` |
| Windsurf | `.windsurf/skills/` |
| Codex | `.agents/skills/` |
| Amp, Cline, OpenCode 等 | `.agents/skills/`（通用） |

> 💡 使用 `npx skills add` 会自动安装到所有兼容的 Agent。

## 🚀 使用方法

安装后，在对话中使用 `@slides-to-pptx` 或 `/slides-to-pptx` 触发技能。

### 示例

```
# 从文档创建演示文稿
@slides-to-pptx 将这份文档转化为演示文稿

# 从零开始创建
@slides-to-pptx 创建一个关于项目进展的内部汇报 PPT

# 转换现有 PPT 为 HTML
@slides-to-pptx 将这个 .pptx 文件转换为现代网页演示文稿

# 导出为 PPTX
@slides-to-pptx 创建 Q1 季度汇报幻灯片并导出为 PPTX
```

## 🎨 风格预设

12 种精心设计的视觉预设，覆盖不同的氛围与美学风格：

| 氛围 | 预设风格 |
|------|---------|
| 专业自信 | Bold Signal, Electric Studio, Dark Botanical |
| 活力创新 | Creative Voltage, Neon Cyber, Split Pastel |
| 沉稳专注 | Notebook Tabs, Paper & Ink, Swiss Modern |
| 感性共鸣 | Dark Botanical, Vintage Editorial, Pastel Geometry |

## 📁 文件结构

```
slides-to-pptx/
├── SKILL.md               # 核心指令（6 阶段工作流）
├── STYLE_PRESETS.md        # 12 种视觉预设
├── viewport-base.css       # 强制响应式 CSS
├── html-template.md        # HTML 架构参考
├── animation-patterns.md   # 动画模式参考
├── html2pptx.md            # HTML → PPTX 转换指南
├── ooxml.md                # OOXML 技术参考
├── generate-pptx.js        # PptxGenJS 参考实现
├── scripts/
│   └── extract-pptx.py     # PPT 内容提取脚本
├── README.md               # English
├── README_zh.md            # 本文件（中文）
└── LICENSE                 # MIT 许可证
```

## 🙏 致谢

本项目基于以下优秀作品：

- **[frontend-slides](https://github.com/zarazhangrui/frontend-slides)** by Zara Zhang — HTML 幻灯片生成的核心基础
- **[make-pptx](https://skills.sh/window-ook/fit-checker/make-pptx)** by window-ook — PPTX 导出能力

## 📄 许可证

[MIT License](LICENSE)
