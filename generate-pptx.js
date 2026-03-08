const PptxGenJS = require('pptxgenjs');

// Create presentation
const pptx = new PptxGenJS();

// Metadata setup
pptx.author = 'Fit Checker';
pptx.title = 'Fit Analysis Report';
pptx.subject = 'Company x Candidate';

// Layout setup (16:9)
pptx.defineLayout({ name: 'CUSTOM', width: 13.33, height: 7.5 });
pptx.layout = 'CUSTOM';

// Color palette
const colors = {
  primary: '2563EB',
  success: '10B981',
  warning: 'F59E0B',
  danger: 'EF4444',
  neutral: '6B7280',
  bgPrimary: 'FFFFFF',
  bgSecondary: 'F9FAFB',
  bgDark: '1E1E2E',
  textPrimary: '111827',
  textSecondary: '6B7280',
  border: 'E5E7EB'
};

// ========== Slide 1: Title & Match Rate ==========
const slide1 = pptx.addSlide();
slide1.background = { color: colors.bgDark };

// Title
slide1.addText('Company x Candidate', {
  x: 0.5,
  y: 0.5,
  w: 12.33,
  h: 0.8,
  fontSize: 36,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: '60A5FA',
  align: 'center'
});

// Subtitle
slide1.addText('Front-End Engineer Fit Analysis Report', {
  x: 0.5,
  y: 1.3,
  w: 12.33,
  h: 0.5,
  fontSize: 20,
  fontFace: 'Noto Sans SC',
  color: '94A3B8',
  align: 'center'
});

// Date
slide1.addText('January 9, 2026', {
  x: 0.5,
  y: 1.8,
  w: 12.33,
  h: 0.4,
  fontSize: 14,
  fontFace: 'Noto Sans SC',
  color: '64748B',
  align: 'center'
});

// Match rate doughnut chart
slide1.addChart(pptx.ChartType.doughnut, [
  {
    name: 'Match',
    labels: ['Match', 'Remainder'],
    values: [72, 28]
  }
], {
  x: 4.67,
  y: 2.3,
  w: 4,
  h: 3.5,
  chartColors: [colors.success, '374151'],
  showLegend: false,
  showTitle: false,
  holeSize: 70
});

// Match rate text (center of chart)
slide1.addText('72%', {
  x: 5.67,
  y: 3.5,
  w: 2,
  h: 0.8,
  fontSize: 48,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.success,
  align: 'center'
});

slide1.addText('Match Rate', {
  x: 5.67,
  y: 4.2,
  w: 2,
  h: 0.4,
  fontSize: 12,
  fontFace: 'Noto Sans SC',
  color: '94A3B8',
  align: 'center'
});

// Match rate rationale box
slide1.addShape(pptx.ShapeType.roundRect, {
  x: 2,
  y: 5.8,
  w: 9.33,
  h: 1.5,
  fill: { color: '2D2D44' },
  line: { color: '3D3D5C', pt: 1 }
});

slide1.addText('Match Rate Rationale', {
  x: 2.2,
  y: 5.9,
  w: 9,
  h: 0.35,
  fontSize: 14,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: 'E2E8F0'
});

slide1.addText(
  '1. Tech stack perfect match - React, Next.js, TypeScript, AI tools match requirements exactly\n' +
  '2. Experience requirement mismatch - 2+ years required vs entry-level, biggest risk factor\n' +
  '3. Preferred conditions mostly met - AI SaaS domain, B2B, commute time (~18 min) all satisfied',
  {
    x: 2.2,
    y: 6.25,
    w: 8.9,
    h: 1,
    fontSize: 11,
    fontFace: 'Noto Sans SC',
    color: 'CBD5E1',
    lineSpacing: 18
  }
);

// ========== Slide 2: Strengths ==========
const slide2 = pptx.addSlide();
slide2.background = { color: colors.bgPrimary };

slide2.addText('Strengths', {
  x: 0.5,
  y: 0.3,
  w: 12,
  h: 0.7,
  fontSize: 28,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.success
});

// Table data
const strengthsData = [
  [
    { text: 'Category', options: { bold: true, fill: colors.primary, color: 'FFFFFF', align: 'center' } },
    { text: 'Company Requirements', options: { bold: true, fill: colors.primary, color: 'FFFFFF', align: 'center' } },
    { text: 'Candidate Skills', options: { bold: true, fill: colors.primary, color: 'FFFFFF', align: 'center' } },
    { text: 'Fit Level', options: { bold: true, fill: colors.primary, color: 'FFFFFF', align: 'center' } }
  ],
  [
    { text: 'React/Next.js', options: { bold: true } },
    { text: '2+ years React/Next.js project experience' },
    { text: 'All 3 projects use Next.js + React' },
    { text: 'Perfect match', options: { color: colors.success, bold: true } }
  ],
  [
    { text: 'TypeScript', options: { bold: true } },
    { text: 'TypeScript development experience' },
    { text: 'All projects built with TypeScript' },
    { text: 'Perfect match', options: { color: colors.success, bold: true } }
  ],
  [
    { text: 'AI Tools', options: { bold: true } },
    { text: 'Practical use of Claude Code, Cursor, etc. (Required)' },
    { text: 'Proficient with Cursor, Claude Code, Gemini' },
    { text: 'Perfect match', options: { color: colors.success, bold: true } }
  ],
  [
    { text: 'State Mgmt/Optimization', options: { bold: true } },
    { text: 'Understanding of state management, rendering optimization' },
    { text: 'React Query, Zustand / TTI 93% reduction' },
    { text: 'Perfect match', options: { color: colors.success, bold: true } }
  ],
  [
    { text: 'Design System', options: { bold: true } },
    { text: 'Design system enhancement (preferred)' },
    { text: 'shadcn/ui, 15 shared components designed' },
    { text: 'Perfect match', options: { color: colors.success, bold: true } }
  ],
  [
    { text: 'Testing', options: { bold: true } },
    { text: 'Jest, Playwright, etc. (preferred)' },
    { text: 'Experience with Playwright, Vitest' },
    { text: 'Perfect match', options: { color: colors.success, bold: true } }
  ],
  [
    { text: 'Domain', options: { bold: true } },
    { text: 'B2B AI SaaS (Architecture Design)' },
    { text: 'Prefers AI SaaS/Solution' },
    { text: 'Preference match', options: { color: colors.success, bold: true } }
  ],
  [
    { text: 'Commute', options: { bold: true } },
    { text: 'Gangnam-gu, Yeoksam-dong' },
    { text: 'SNU Station → Yeoksam Station ~18 min' },
    { text: 'Under 40 min', options: { color: colors.success, bold: true } }
  ]
];

slide2.addTable(strengthsData, {
  x: 0.5,
  y: 1.1,
  w: 12.33,
  fontFace: 'Noto Sans SC',
  fontSize: 11,
  border: { type: 'solid', pt: 0.5, color: colors.border },
  align: 'left',
  valign: 'middle',
  rowH: 0.6
});

// ========== Slide 3: Weaknesses ==========
const slide3 = pptx.addSlide();
slide3.background = { color: colors.bgPrimary };

slide3.addText('Weaknesses', {
  x: 0.5,
  y: 0.3,
  w: 12,
  h: 0.7,
  fontSize: 28,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.danger
});

// Card 1: Experience Requirement (Critical)
slide3.addShape(pptx.ShapeType.roundRect, {
  x: 0.5,
  y: 1.2,
  w: 6,
  h: 2.8,
  fill: { color: 'FEF2F2' },
  line: { color: colors.danger, pt: 2 }
});

slide3.addText('Required', {
  x: 0.7,
  y: 1.35,
  w: 1.5,
  h: 0.35,
  fontSize: 10,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: '991B1B',
  fill: { color: 'FEE2E2' },
  align: 'center',
  valign: 'middle'
});

slide3.addText('Experience Requirement Not Met', {
  x: 0.7,
  y: 1.9,
  w: 5.5,
  h: 0.5,
  fontSize: 18,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.textPrimary
});

slide3.addText('Required: 2+ years\nCandidate: Entry-level (0 years)', {
  x: 0.7,
  y: 2.5,
  w: 5.5,
  h: 0.8,
  fontSize: 14,
  fontFace: 'Noto Sans SC',
  color: colors.textPrimary,
  lineSpacing: 22
});

slide3.addText('Biggest risk factor - Need to demonstrate capability through project achievements', {
  x: 0.7,
  y: 3.4,
  w: 5.5,
  h: 0.4,
  fontSize: 11,
  fontFace: 'Noto Sans SC',
  color: colors.textSecondary,
  italic: true
});

// Card 2: Company Size (Preferred Condition)
slide3.addShape(pptx.ShapeType.roundRect, {
  x: 6.83,
  y: 1.2,
  w: 6,
  h: 2.8,
  fill: { color: 'FFFBEB' },
  line: { color: colors.warning, pt: 2 }
});

slide3.addText('Preferred', {
  x: 7.03,
  y: 1.35,
  w: 1.5,
  h: 0.35,
  fontSize: 10,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: '92400E',
  fill: { color: 'FEF3C7' },
  align: 'center',
  valign: 'middle'
});

slide3.addText('Company Size Mismatch', {
  x: 7.03,
  y: 1.9,
  w: 5.5,
  h: 0.5,
  fontSize: 18,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.textPrimary
});

slide3.addText('Candidate prefers: Series A+\nCompany status: Seed (12 employees)', {
  x: 7.03,
  y: 2.5,
  w: 5.5,
  h: 0.8,
  fontSize: 14,
  fontFace: 'Noto Sans SC',
  color: colors.textPrimary,
  lineSpacing: 22
});

slide3.addText('Preferred conditions are not mandatory. Fast-growing startup with proven technology', {
  x: 7.03,
  y: 3.4,
  w: 5.5,
  h: 0.4,
  fontSize: 11,
  fontFace: 'Noto Sans SC',
  color: colors.textSecondary,
  italic: true
});

// Card 3: Startup Experience (Preferred)
slide3.addShape(pptx.ShapeType.roundRect, {
  x: 0.5,
  y: 4.2,
  w: 6,
  h: 2.2,
  fill: { color: colors.bgSecondary },
  line: { color: colors.border, pt: 1 }
});

slide3.addText('Nice to Have', {
  x: 0.7,
  y: 4.35,
  w: 1.5,
  h: 0.35,
  fontSize: 10,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.textSecondary,
  fill: { color: colors.border },
  align: 'center',
  valign: 'middle'
});

slide3.addText('Early-stage Startup Experience', {
  x: 0.7,
  y: 4.9,
  w: 5.5,
  h: 0.5,
  fontSize: 16,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.textPrimary
});

slide3.addText('Preferred: Nice to have | Candidate: No experience\nFull lifecycle (planning to deployment) experience can substitute', {
  x: 0.7,
  y: 5.4,
  w: 5.5,
  h: 0.8,
  fontSize: 12,
  fontFace: 'Noto Sans SC',
  color: colors.textSecondary,
  lineSpacing: 20
});

// Card 4: English Communication (Needs Verification)
slide3.addShape(pptx.ShapeType.roundRect, {
  x: 6.83,
  y: 4.2,
  w: 6,
  h: 2.2,
  fill: { color: colors.bgSecondary },
  line: { color: colors.border, pt: 1 }
});

slide3.addText('To Verify', {
  x: 7.03,
  y: 4.35,
  w: 1.5,
  h: 0.35,
  fontSize: 10,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.textSecondary,
  fill: { color: colors.border },
  align: 'center',
  valign: 'middle'
});

slide3.addText('English Communication Skills', {
  x: 7.03,
  y: 4.9,
  w: 5.5,
  h: 0.5,
  fontSize: 16,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.textPrimary
});

slide3.addText('Preferred: English communication | Candidate: Needs verification\nGlobal clients (CBRE) exist. Preferred, not required', {
  x: 7.03,
  y: 5.4,
  w: 5.5,
  h: 0.8,
  fontSize: 12,
  fontFace: 'Noto Sans SC',
  color: colors.textSecondary,
  lineSpacing: 20
});

// ========== Slide 4: Improvement Points ==========
const slide4 = pptx.addSlide();
slide4.background = { color: colors.bgPrimary };

slide4.addText('Improvement Points', {
  x: 0.5,
  y: 0.3,
  w: 12,
  h: 0.7,
  fontSize: 28,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.primary
});

// Item 1: Experience Gap (High)
slide4.addShape(pptx.ShapeType.roundRect, {
  x: 0.5,
  y: 1.1,
  w: 12.33,
  h: 1.9,
  fill: { color: colors.bgSecondary },
  line: { color: colors.border, pt: 1 }
});

slide4.addText('High', {
  x: 0.7,
  y: 1.25,
  w: 0.9,
  h: 0.35,
  fontSize: 11,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: '991B1B',
  fill: { color: 'FEE2E2' },
  align: 'center',
  valign: 'middle'
});

slide4.addText('Strategy to Overcome Experience Gap', {
  x: 1.8,
  y: 1.2,
  w: 10,
  h: 0.45,
  fontSize: 16,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.textPrimary
});

slide4.addText('Basis: Job posting specifies "2+ years of React/Next.js project experience"', {
  x: 0.7,
  y: 1.7,
  w: 11.9,
  h: 0.4,
  fontSize: 12,
  fontFace: 'Noto Sans SC',
  color: colors.textSecondary
});

slide4.addText('Suggestion: Emphasize quantitative achievements - "TTI 93% reduction (8.8s→0.7s)", "TTI 60% reduction (5s→2s)" with specific metrics', {
  x: 0.7,
  y: 2.15,
  w: 11.9,
  h: 0.7,
  fontSize: 12,
  fontFace: 'Noto Sans SC',
  color: colors.primary
});

// Item 2: AI Agent Workflow (Medium)
slide4.addShape(pptx.ShapeType.roundRect, {
  x: 0.5,
  y: 3.2,
  w: 12.33,
  h: 1.9,
  fill: { color: colors.bgSecondary },
  line: { color: colors.border, pt: 1 }
});

slide4.addText('Medium', {
  x: 0.7,
  y: 3.35,
  w: 0.9,
  h: 0.35,
  fontSize: 11,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: '92400E',
  fill: { color: 'FEF3C7' },
  align: 'center',
  valign: 'middle'
});

slide4.addText('Concretize AI Agent Workflow Experience', {
  x: 1.8,
  y: 3.3,
  w: 10,
  h: 0.45,
  fontSize: 16,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.textPrimary
});

slide4.addText('Basis: Preferred "AI agent-based workflow team building and improvement experience"', {
  x: 0.7,
  y: 3.8,
  w: 11.9,
  h: 0.4,
  fontSize: 12,
  fontFace: 'Noto Sans SC',
  color: colors.textSecondary
});

slide4.addText('Suggestion: Prepare specific cases of complex logic implementation and test code auto-generation with Claude Code', {
  x: 0.7,
  y: 4.25,
  w: 11.9,
  h: 0.7,
  fontSize: 12,
  fontFace: 'Noto Sans SC',
  color: colors.primary
});

// Item 3: English Communication (Low)
slide4.addShape(pptx.ShapeType.roundRect, {
  x: 0.5,
  y: 5.3,
  w: 12.33,
  h: 1.9,
  fill: { color: colors.bgSecondary },
  line: { color: colors.border, pt: 1 }
});

slide4.addText('Low', {
  x: 0.7,
  y: 5.45,
  w: 0.9,
  h: 0.35,
  fontSize: 11,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: '065F46',
  fill: { color: 'D1FAE5' },
  align: 'center',
  valign: 'middle'
});

slide4.addText('Verify English Communication', {
  x: 1.8,
  y: 5.4,
  w: 10,
  h: 0.45,
  fontSize: 16,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.textPrimary
});

slide4.addText('Basis: Company operates dual entities (Korea-US), has global clients (CBRE, Stability AI)', {
  x: 0.7,
  y: 5.9,
  w: 11.9,
  h: 0.4,
  fontSize: 12,
  fontFace: 'Noto Sans SC',
  color: colors.textSecondary
});

slide4.addText('Suggestion: Mention English skills if available; if lacking, highlight technical doc reading and English community activity', {
  x: 0.7,
  y: 6.35,
  w: 11.9,
  h: 0.7,
  fontSize: 12,
  fontFace: 'Noto Sans SC',
  color: colors.primary
});

// ========== Slide 5: Overall Summary ==========
const slide5 = pptx.addSlide();
slide5.background = { color: colors.bgDark };

slide5.addText('Overall Summary', {
  x: 0.5,
  y: 0.3,
  w: 12,
  h: 0.7,
  fontSize: 28,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: 'FFFFFF'
});

// Card 1: Key Strengths
slide5.addShape(pptx.ShapeType.roundRect, {
  x: 0.5,
  y: 1.2,
  w: 4,
  h: 5.5,
  fill: { color: '2D2D44' },
  line: { color: '3D3D5C', pt: 1 }
});

slide5.addText('Key Strengths', {
  x: 0.7,
  y: 1.4,
  w: 3.6,
  h: 0.5,
  fontSize: 16,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.success
});

const strengths = [
  'Perfect tech stack match\n(Next.js, React, TypeScript)',
  'Proficient with AI tools\nMeets required criteria',
  'Performance optimization results\n(TTI 93%, 60% reduction)',
  'Design system building experience',
  'Full lifecycle leadership\n(Planning to Deployment)'
];

strengths.forEach((text, i) => {
  slide5.addText('→ ' + text, {
    x: 0.7,
    y: 2.0 + (i * 0.95),
    w: 3.6,
    h: 0.85,
    fontSize: 12,
    fontFace: 'Noto Sans SC',
    color: 'CBD5E1',
    lineSpacing: 16
  });
});

// Card 2: Cautions
slide5.addShape(pptx.ShapeType.roundRect, {
  x: 4.67,
  y: 1.2,
  w: 4,
  h: 5.5,
  fill: { color: '2D2D44' },
  line: { color: '3D3D5C', pt: 1 }
});

slide5.addText('Cautions', {
  x: 4.87,
  y: 1.4,
  w: 3.6,
  h: 0.5,
  fontSize: 16,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: colors.warning
});

const warnings = [
  'Experience requirement not met\n(2 years required vs entry-level)',
  'Early-stage startup (12 people)\nMay lack structured processes',
  'First-time founding team\nMay lack experienced leadership',
  'Recent 1-year turnover rate\nNeeds verification (3/12 people)'
];

warnings.forEach((text, i) => {
  slide5.addText('→ ' + text, {
    x: 4.87,
    y: 2.0 + (i * 1.1),
    w: 3.6,
    h: 1,
    fontSize: 12,
    fontFace: 'Noto Sans SC',
    color: 'CBD5E1',
    lineSpacing: 16
  });
});

// Card 3: Recommended Actions
slide5.addShape(pptx.ShapeType.roundRect, {
  x: 8.83,
  y: 1.2,
  w: 4,
  h: 5.5,
  fill: { color: '2D2D44' },
  line: { color: '3D3D5C', pt: 1 }
});

slide5.addText('Recommended Actions', {
  x: 9.03,
  y: 1.4,
  w: 3.6,
  h: 0.5,
  fontSize: 16,
  fontFace: 'Noto Sans SC',
  bold: true,
  color: '60A5FA'
});

const actions = [
  'Quantify project achievements\nin cover letter',
  'Prepare specific AI tool\nusage examples',
  'Prepare explanation for\n"why fit despite experience gap"',
  'Ask directly about\ndev culture and work style'
];

actions.forEach((text, i) => {
  slide5.addText('→ ' + text, {
    x: 9.03,
    y: 2.0 + (i * 1.1),
    w: 3.6,
    h: 1,
    fontSize: 12,
    fontFace: 'Noto Sans SC',
    color: 'CBD5E1',
    lineSpacing: 16
  });
});

// Footer
slide5.addText('Generated by Fit Checker · 2026.01.09', {
  x: 0.5,
  y: 7.0,
  w: 12.33,
  h: 0.3,
  fontSize: 10,
  fontFace: 'Noto Sans SC',
  color: '64748B',
  align: 'center'
});

// Save file
pptx.writeFile({ fileName: 'output/fit-result-2026-01-09.pptx' })
  .then(fileName => {
    console.log(`PPTX file created: ${fileName}`);
  })
  .catch(err => {
    console.error('PPTX creation error:', err);
  });
