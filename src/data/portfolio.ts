// Edit this file to update all the content on your portfolio site.

export const profile = {
  name: "Navendu Shukla",
  title: "Automation QA Leader",
  tagline:
    "9+ years architecting and scaling test automation frameworks across product engineering, media, and e-learning organizations.",
  location: "Gurgaon, Haryana, India",
  email: "navshukla94@gmail.com",
  phone: "+91 9582320343",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "",
    linkedin: "https://linkedin.com/in/navendu-shukla",
    twitter: "",
  },
};

export const about = {
  paragraphs: [
    "Automation QA Leader with 9+ years architecting and scaling test automation frameworks across product engineering, media, and e-learning organizations. Track record of building CI/CD-integrated Playwright and Selenium frameworks that cut pipeline execution time by 70%, achieving 85%+ automated coverage across concurrent projects, and leading QA teams of up to 8 engineers to 100% on-time release delivery.",
    "Skilled in translating quality strategy into measurable business outcomes and increasingly applying AI/agentic tooling (Amazon Bedrock, Claude Code, Playwright MCP) to accelerate test authoring and defect prevention.",
  ],
};

export type Highlight = {
  stat: string;
  label: string;
  description: string;
};

export const highlights: Highlight[] = [
  {
    stat: "70%",
    label: "Faster CI/CD Pipelines",
    description:
      "Cut pipeline execution time by 70% through parallel test execution and GitLab CI/CD optimization, directly speeding up release cadence.",
  },
  {
    stat: "85%+",
    label: "Automated Test Coverage",
    description:
      "Architected a Playwright + TypeScript framework with reusable utilities, enabling 85%+ automated coverage across 4 concurrent client projects.",
  },
  {
    stat: "100+",
    label: "Critical Defects Prevented",
    description:
      "Sole automation owner for the company's highest-revenue product, preventing 100+ critical defects from reaching production.",
  },
  {
    stat: "8",
    label: "Engineers Led",
    description:
      "Led an 8-engineer AQA team to 100% on-time delivery across all automation projects, owning hiring, mentorship, and process strategy.",
  },
  {
    stat: "12",
    label: "Engineers Hired & Onboarded",
    description:
      "Reduced average ramp-up time by 40% through a structured onboarding framework for new AQA hires.",
  },
  {
    stat: "15+",
    label: "Projects Standardized",
    description:
      "Scaled sprint-synchronized automation coverage across 15+ projects org-wide, standardizing QA process maturity company-wide.",
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Leadership",
    skills: [
      "Team Management (8+ engineers)",
      "Hiring & Onboarding",
      "Mentorship",
      "QA Strategy",
      "Stakeholder Management",
      "Sprint Planning",
    ],
  },
  {
    category: "Automation",
    skills: ["Playwright", "Selenium WebDriver", "Rest-Assured", "Cucumber", "Codeception", "Galen", "Geb", "Spock"],
  },
  {
    category: "Languages",
    skills: ["Java", "TypeScript", "JavaScript", "Groovy", "PHP"],
  },
  {
    category: "Frameworks & Tools",
    skills: ["TestNG", "Maven", "Allure Reports", "Postman", "LambdaTest", "BrowserStack", "Splunk", "Redis", "TestRail"],
  },
  {
    category: "CI/CD & Cloud",
    skills: ["Jenkins", "GitLab CI", "Azure DevOps", "Docker", "AWS (S3, Lambda, CloudWatch, Step Functions)", "GCP"],
  },
  {
    category: "AI & Agentic Tooling",
    skills: [
      "Amazon Bedrock",
      "Bedrock Guardrails",
      "Agentic AI",
      "Playwright MCP",
      "Claude Code",
      "RAG",
      "In-House AI Test Automation Tool",
    ],
  },
  {
    category: "Testing Disciplines",
    skills: [
      "UI, API & DB Automation",
      "Accessibility Testing",
      "Cross-Browser Testing",
      "Shift-Left Testing",
      "Regression & Release Quality",
    ],
  },
  {
    category: "Project & Bug Tracking",
    skills: ["Jira", "TestRail", "Zephyr", "Confluence"],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Automation QA Lead",
    company: "Incedo Inc, Gurugram",
    period: "Dec 2024 — Present",
    bullets: [
      "Architected a Playwright + TypeScript automation framework with reusable utilities, cutting new test-case authoring time by 30% and enabling 85%+ automated coverage across 4 concurrent client projects.",
      "Own UI, API, and DB test automation delivery end-to-end, reducing regression cycle time and surfacing defects earlier in the release pipeline.",
      "Mentor 6 junior automation engineers on framework design and best practices, improving their individual delivery speed by 30%.",
      "Translate 50+ user stories per quarter into automation acceptance criteria in Zephyr, aligning QA scope with sprint commitments.",
      "Deliver sprint estimates across 4 simultaneous client engagements with 90%+ on-time accuracy, supporting predictable release planning.",
    ],
  },
  {
    role: "Manager, Automation QA",
    company: "Trusted Media Brands",
    period: "Nov 2020 — Sep 2024",
    bullets: [
      "Led an 8-engineer AQA team to 100% on-time delivery across all automation projects, while owning hiring, mentorship, and process strategy.",
      "Cut CI/CD pipeline execution time by 70% through parallel test execution and GitLab CI/CD optimization, directly speeding up release cadence.",
      "Hired and onboarded 12 AQA engineers, reducing average ramp-up time by 40% through a structured onboarding framework.",
      "Scaled sprint-synchronized automation coverage across 15+ projects org-wide, standardizing QA process maturity company-wide.",
      "Served as sole automation owner for the company's highest-revenue product, preventing 100+ critical defects from reaching production through automated regression coverage.",
    ],
  },
  {
    role: "Senior Software Engineer, Test Automation",
    company: "Qualitest, Noida",
    period: "Jun 2017 — Nov 2020",
    bullets: [
      "Increased automated test coverage by 40% on the Mindtap platform (Cengage Learning) within two sprints, accelerating release confidence.",
      "Directed API test automation strategy, cutting manual regression testing time by 50% across the account.",
      "Built UI, API, and DB test coverage spanning Mindtap, Kaplan University, and ZappRx platforms for three concurrent enterprise clients.",
      "Maintained zero missed release deadlines across 3 concurrent client accounts through structured QA planning and cross-team coordination.",
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    degree: "B.Tech, Computer Science",
    school: "Inderprastha Engineering College, Ghaziabad, India",
    period: "April 2017",
  },
];
