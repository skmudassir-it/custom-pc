import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGamepad, faDesktop, faWrench, faDroplet, faPlug, faComments,
  faStar, faBolt, faServer, faMicrochip, faHammer, faPaintBrush
} from "@fortawesome/free-solid-svg-icons";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  detailDescription: string;
}

export const services: ServiceItem[] = [
  {
    slug: "gaming-pcs",
    title: "Custom Gaming PCs",
    description: "High-performance gaming rigs built for 4K, VR, and esports. Every component selected for maximum frame rates and thermal efficiency.",
    icon: faGamepad,
    image: "/images/services/gaming-pcs.svg",
    features: [
      "4K & VR-ready configurations",
      "RGB lighting integration",
      "Premium GPU selection (NVIDIA RTX & AMD Radeon)",
      "Overclocking & performance tuning",
      "Custom loop water cooling options"
    ],
    detailDescription: "Our gaming PCs are engineered from the ground up for competitive and enthusiast gaming. We work with you to select every component — GPU, CPU, RAM, cooling — based on your target resolution, frame rate, and game library. Every build undergoes a 48-hour stress test before delivery."
  },
  {
    slug: "workstations",
    title: "Professional Workstations",
    description: "Content creation, CAD, and scientific computing rigs optimized for multi-threaded workloads and GPU acceleration.",
    icon: faDesktop,
    image: "/images/services/workstations.svg",
    features: [
      "Threadripper & Intel Xeon options",
      "Multi-GPU configurations",
      "ECC memory for data integrity",
      "Quiet operation tuning",
      "Certified for major ISV applications"
    ],
    detailDescription: "From video editing and 3D rendering to machine learning and scientific simulation, our workstation builds are purpose-built for your software stack. We validate GPU compatibility, recommend optimal memory configurations, and ensure silent operation for studio environments."
  },
  {
    slug: "upgrades-repairs",
    title: "PC Upgrades & Repairs",
    description: "Breathe new life into your existing rig. GPU upgrades, storage expansion, troubleshooting, and more.",
    icon: faWrench,
    image: "/images/services/upgrades-repairs.svg",
    features: [
      "GPU & CPU upgrades",
      "RAM & storage expansion",
      "Cooling system upgrades",
      "Diagnostic & troubleshooting",
      "Cable management refresh"
    ],
    detailDescription: "Your PC doesn't need to be new to perform like it. We assess your current build, identify the bottleneck, and recommend targeted upgrades that deliver the best price-to-performance improvement. From a simple GPU swap to a full internal rebuild, we handle it all."
  },
  {
    slug: "water-cooling",
    title: "Custom Water Cooling",
    description: "Hardline and soft-tube custom loop designs that push thermal performance and aesthetics to the limit.",
    icon: faDroplet,
    image: "/images/services/water-cooling.svg",
    features: [
      "Hardline PETG & acrylic tubing",
      "Custom reservoir mounting",
      "Dual-loop configurations",
      "Leak testing & certification",
      "Maintenance plans available"
    ],
    detailDescription: "Our water cooling specialists design and fabricate custom loops that are as beautiful as they are effective. We use premium EK, Corsair, and Heatkiller components, pressure-test every fitting, and provide a 48-hour leak test certificate with every build."
  },
  {
    slug: "cable-management",
    title: "Cable Management",
    description: "Showcase-quality cable routing that transforms your PC's interior into a work of art.",
    icon: faPlug,
    image: "/images/services/cable-management.svg",
    features: [
      "Custom-length cable sleeving",
      "Behind-tray routing",
      "Cable comb alignment",
      "PSU shroud organization",
      "RGB & fan cable cleanup"
    ],
    detailDescription: "A clean build is a happy build. We offer three tiers of cable management — from basic routing to full custom sleeving with color-matched combs. Better cable management also improves airflow, lowering temperatures and extending component life."
  },
  {
    slug: "consulting",
    title: "PC Build Consultation",
    description: "One-on-one consultation to plan your dream build. Part selection, compatibility review, and budget optimization.",
    icon: faComments,
    image: "/images/services/consulting.svg",
    features: [
      "Budget optimization",
      "Component compatibility review",
      "Performance target analysis",
      "Aesthetic & theme planning",
      "Build timeline & delivery"
    ],
    detailDescription: "Not sure where to start? Our 60-minute consultation covers your use case, budget, aesthetic preferences, and performance targets. You'll leave with a complete parts list, compatibility verification, and a build timeline — even if you decide to build it yourself."
  }
];

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  image: string;
  specs: string;
}

export const projects: ProjectItem[] = [
  {
    title: "CrystalForge 4090",
    category: "Gaming",
    description: "Dual-custom-loop gaming tower with RTX 4090, i9-14900K, and hand-bent acrylic tubing in a Lian Li O11D Evo XL.",
    image: "/images/projects/project-1.svg",
    specs: "RTX 4090 | i9-14900K | 64GB DDR5 | 4TB Gen5 NVMe"
  },
  {
    title: "RenderNode Pro",
    category: "Workstation",
    description: "Dual RTX 6000 Ada workstation for architectural rendering — 96GB VRAM, Threadripper 7970X, silent operation under full load.",
    image: "/images/projects/project-2.svg",
    specs: "2x RTX 6000 Ada | TR 7970X | 128GB ECC | 8TB SSD"
  },
  {
    title: "SFF Stealth",
    category: "Small Form Factor",
    description: "RTX 4070 Ti Super crammed into an 11L Fractal Terra case with custom cables and Noctua cooling — silent and portable.",
    image: "/images/projects/project-3.svg",
    specs: "RTX 4070 TiS | Ryzen 7 7800X3D | 32GB DDR5 | 2TB NVMe"
  },
  {
    title: "NeonFlow",
    category: "Water Cooling",
    description: "Hardline dual-loop with UV-reactive coolant, distro plate integration, and custom RGB profile synced to system temps.",
    image: "/images/projects/project-4.svg",
    specs: "RTX 4080 Super | i7-14700K | 32GB DDR5 | Custom Loop"
  },
  {
    title: "SimRig Extreme",
    category: "Specialty",
    description: "Triple-monitor sim racing PC with motion platform controller integration, 64GB RAM, and dedicated peripheral USB hub.",
    image: "/images/projects/project-5.svg",
    specs: "RX 7900 XTX | Ryzen 9 7950X3D | 64GB DDR5 | 8TB SSD"
  },
  {
    title: "Creator's Canvas",
    category: "Workstation",
    description: "Silent editing suite build with Mac Pro-inspired aluminum chassis mod, Thunderbolt 4, and 10GbE networking.",
    image: "/images/projects/project-6.svg",
    specs: "RTX 4080 Super | i9-14900K | 96GB DDR5 | 12TB NVMe"
  }
];

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter Build",
    price: "$1,499+",
    description: "Solid 1080p gaming and everyday computing. Great for first-time builders.",
    features: [
      "Mid-range CPU & GPU",
      "16GB DDR5 RAM",
      "1TB NVMe SSD",
      "Air cooling",
      "Standard cable management",
      "72-hour burn-in test",
      "1-year warranty"
    ]
  },
  {
    name: "Performance Build",
    price: "$2,999+",
    description: "1440p high-refresh gaming and content creation. The sweet spot.",
    features: [
      "High-end CPU & GPU",
      "32GB DDR5 RAM",
      "2TB Gen4 NVMe SSD",
      "AIO liquid cooling",
      "Premium cable management",
      "RGB lighting integration",
      "2-year warranty"
    ],
    popular: true
  },
  {
    name: "Ultimate Build",
    price: "$5,999+",
    description: "No-compromises 4K gaming and professional workstation. Custom water cooling included.",
    features: [
      "Flagship CPU & GPU",
      "64GB+ DDR5 RAM",
      "4TB Gen5 NVMe SSD",
      "Custom water cooling loop",
      "Showcase cable sleeving",
      "Custom RGB & theme",
      "3-year warranty & lifetime support"
    ]
  }
];

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Chen",
    role: "Esports Competitor",
    text: "NexusBuild built me a rig that runs Valorant at 500+ FPS consistently. The cable management is so clean I leave the side panel off at LAN events just to show it off.",
    rating: 5
  },
  {
    name: "Sarah Kim",
    role: "3D Artist",
    text: "My workstation renders 8K scenes in half the time my old system took. They understood exactly what I needed for Blender and Redshift. Zero crashes in six months.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Software Engineer & Streamer",
    text: "Dual-PC streaming setup that handles encoding, gaming, and VTube Studio simultaneously. The consultation process was thorough — no upselling, just smart choices.",
    rating: 5
  },
  {
    name: "Jessica Torres",
    role: "Architectural Designer",
    text: "Needed a silent workstation for our open-plan office. NexusBuild delivered a system I can't even hear under full Revit + Enscape load. Colleagues keep asking who built it.",
    rating: 5
  },
  {
    name: "Alex Rivera",
    role: "PhD Researcher",
    text: "Custom CUDA rig for deep learning research. They sourced an RTX 6000 Ada during the shortage when nobody else could. Saved my dissertation timeline.",
    rating: 5
  },
  {
    name: "Mike O'Brien",
    role: "Flight Sim Enthusiast",
    text: "My MSFS 2024 setup with triple 4K screens runs buttery smooth. They even mapped the button box integration and calibrated everything before delivery.",
    rating: 5
  }
];

export const siteConfig = {
  name: "NexusBuild",
  tagline: "Custom PCs Engineered to Perfection",
  description: "Boutique custom PC building — gaming rigs, workstations, custom water cooling, and upgrades. Every build stress-tested for 72 hours before delivery.",
  phone: "(555) 234-5678",
  email: "build@nexusbuildpc.com",
  address: "415 Tech Park Drive, Suite 200, Austin, TX 78701",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]
};
