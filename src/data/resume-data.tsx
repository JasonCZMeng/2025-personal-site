import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";


export const RESUME_DATA = {
  name: "Jason Meng",
  initials: "JM",
  location: "Vancouver, Canada",
  locationLink: "https://maps.app.goo.gl/XPjukKjbu2KDGcJi9",    
  about:
    "Building distribution for tokenized assets",
  summary:
      "This is my corner of the internet.",

  avatarUrl: "https://raw.githubusercontent.com/JasonCZMeng/Images/refs/heads/main/ProfilePicturePhoto.jpg",
  contact: {
    email: "jasonczmeng@gmail.com",
    social: [
      {
        name: "GitHub",        
        url: "https://github.com/jasonczmeng",
        icon: GitHubIcon,        
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jasonczmeng/",        
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/jasonczmeng",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of British Columbia",
      degree: "Symbolic Systems",

    },
  ],
  work: [
    {
      company: "Plume",
      link: "plumenetwork.xyz",        
      title: "Software Architect",
      logo: ConsultlyLogo,
      description: (
        <>
          Leading technical architecture of a blockchain-based film funding
          platform.
          <ul className="list-inside list-disc">
            <li>
              Architecting migration from CRA to Next.js for improved
              performance, SEO, and DX
            </li>
            <li>
              Established release process enabling faster deployments and
              reliable rollbacks
            </li>
            <li>
              Implementing system-wide monitoring and security improvements
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Parabol",
      link: "https://parabol.co",
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      description: (
        <>
          Senior developer and squad leader for an enterprise agile meeting
          platform.
          <ul className="list-inside list-disc">
            <li>
              Built design system with Tailwind CSS, improving development speed
              and time to market
            </li>
            <li>
              Implemented engineering practices: PR automation, code review
              guidelines, and workflows
            </li>
            <li>
              Open source contributions to Relay DevTools and React i18n tooling
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      description: (
        <>
          Successfully transitioned from mobile to full-stack development while
          leading distributed teams.
          <ul className="list-inside list-disc">
            <li>
              Led frontend team at Evercast, building real-time platform
              supporting 30+ users per room with HD streaming and collaboration
              tools
            </li>
            <li>
              Developed offline-first Android app for DKMS, improving donor
              registration process
            </li>
            <li>
              Led development teams across multiple successful client projects
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      description: (
        <>
          First Android developer, grew and led a team of 15+ engineers while
          establishing engineering culture.
          <ul className="list-inside list-disc">
            <li>
              Developed apps for major Polish companies including LOT, Polskie
              Radio, and Agora
            </li>
            <li>Built and mentored high-performing mobile development team</li>
          </ul>
        </>
      ),
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      title: "C/C++ Developer",
      logo: NSNLogo,
      description:
        "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
    },
  ],
  skills: [
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print-friendly CV template with a focus on readability and clean design.",
      logo: MonitoLogo,
      link: {        
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
