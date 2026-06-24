import { FaYoutube, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { BiLogoFigma } from "react-icons/bi";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAstro,
  SiPrisma,
  SiBlender,
  SiRust,
  SiBun,
  SiChartdotjs,
  SiPlotly,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";

export const skills = {
  Core: [
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiTypescript },
    { name: "Python", icon: SiReact },
    { name: "Rust", icon: SiRust },
    { name: "Swift", icon: SiReact },
  ],
  "Frontend Development": [
    { name: "Next.js 16+", icon: TbBrandNextjs },
    { name: "React", icon: SiReact },
    { name: "Astro", icon: SiAstro },
    { name: "Vite", icon: SiAstro },
    { name: "Server Components", icon: SiReact },
  ],
  "UI & Styling": [
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "shadcn/ui", icon: SiReact },
    { name: "Radix UI", icon: SiReact },
    { name: "CSS", icon: DiCss3 },
    { name: "Figma", icon: BiLogoFigma },
  ],
  Animation: [
    { name: "Framer Motion", icon: SiReact },
    { name: "GSAP", icon: DiCss3 },
    { name: "CSS Motion", icon: DiCss3 },
    { name: "Interaction States", icon: BiLogoFigma },
  ],
  "3D & Graphics": [
    { name: "Three.js", icon: TbBrandThreejs },
    { name: "React-Three-Fiber", icon: TbBrandThreejs },
    { name: "WebGL", icon: TbBrandThreejs },
    { name: "GLSL Shaders", icon: DiCss3 },
    { name: "Shaders", icon: DiCss3 },
    { name: "Blender", icon: SiBlender },
    { name: "Spline", icon: BiLogoFigma },
  ],
  "Data Visualization": [
    { name: "D3.js", icon: TbBrandThreejs },
    { name: "Chart.js", icon: SiChartdotjs },
    { name: "Plotly", icon: SiPlotly },
    { name: "Market Structure", icon: SiChartdotjs },
    { name: "Custom Viz Libraries", icon: SiChartdotjs },
  ],
  Backend: [
    { name: "Bun", icon: SiBun },
    { name: "Elysia", icon: SiBun },
    { name: "Node.js", icon: SiReact },
    { name: "REST APIs", icon: SiReact },
    { name: "Server-Side Rendering", icon: TbBrandNextjs },
  ],
  "Data & Platform": [
    { name: "PostgreSQL", icon: SiPrisma },
    { name: "TimescaleDB", icon: SiChartdotjs },
    { name: "Prisma", icon: SiPrisma },
    { name: "Convex", icon: SiReact },
    { name: "Supabase", icon: SiReact },
    { name: "Sanity", icon: SiReact },
  ],
  "DevOps & Tools": [
    { name: "GitHub Actions", icon: FaGithub },
    { name: "Vercel", icon: TbBrandNextjs },
    { name: "Cloudflare", icon: SiReact },
    { name: "tmux", icon: SiReact },
    { name: "AI Commit Workflows", icon: SiReact },
  ],
} as const;

export const socialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@realitydesigners",
    icon: FaYoutube,
  },
  {
    name: "X",
    url: "https://x.com/raymondreaming",
    icon: FaTwitter,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/raymondreamer",
    icon: FaInstagram,
  },
  {
    name: "Github",
    url: "https://github.com/raymondreaming",
    icon: FaGithub,
  },
  {
    name: "Website",
    url: "https://www.raymondreamer.com",
    icon: BiLogoFigma,
  },
];

export const projects = [
  {
    title: "Rthmn",
    description:
      "A market-structure platform that transforms financial data into geometric patterns for real-time analysis, visualization, and algorithmic trading.",
    url: "https://rthmn.com",
    image: "/images/rthmn.png",
    alt: "Rthmn Trading Platform Screenshot",
    tags: ["Market Structure", "WebGL", "Trading Systems"],
  },
  {
    title: "Reality Designers",
    description:
      "A community and content platform exploring perception, consciousness, creative systems, and human potential.",
    url: "https://www.realitydesigners.com",
    image: "/images/rd.png",
    alt: "Reality Designers Platform Screenshot",
    tags: ["Community", "Content Systems", "Creative Tools"],
  },
  {
    title: "Inferay",
    description:
      "A multi-agent terminal for Claude and Codex, built with Electrobun and React.",
    url: "https://inferay.com",
    tags: ["AI Tooling", "Electrobun", "React"],
  },
];

export const openSourceTools = [
  {
    title: "scripts",
    description:
      "Developer workflow tools for tmux session management, repository automation, and AI-powered commit summaries.",
    url: "https://github.com/raymondreaming/scripts",
  },
  {
    title: "zed-theme",
    description:
      "A custom Zed editor theme built around a focused, minimal, high-contrast development environment.",
    url: "https://github.com/raymondreaming/zed-theme",
  },
  {
    title: "portfolio",
    description:
      "The Astro site for Raymondreamer, built around interactive visuals, project pages, and design engineering work.",
    url: "https://github.com/raymondreaming/portfolio",
  },
];

export const focusAreas = [
  "Real-time systems and financial visualization",
  "3D interfaces and spatial software",
  "AI-assisted developer tooling",
  "Design systems and interaction design",
  "Algorithmic trading infrastructure",
  "Creative tools for perception, learning, and self-optimization",
] as const;
