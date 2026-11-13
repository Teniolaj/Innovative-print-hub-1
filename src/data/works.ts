import { latestWorks } from "./latestWorks";

export const workCategories = ["Corporate Branding", "Graphic Design", "Corporate Diaries", "Digital Printing", "T-Shirt Printing", "Souvenirs / Gift Items"];

export const allWorks = [
  ...latestWorks.map((work) => ({ ...work, client: "", date: "" })),
  {
    id: 1,
    title: "Premium Corporate Hoodies",
    category: "T-Shirt Printing",
    image: "/works/print-work-1.jpg",
    description: "High-density screen printing on premium cotton fabrics. Durable, comfortable, and sharp corporate merchandise.",
    client: "TechSolutions Ghana",
    date: "May 2026",
  },
  {
    id: 2,
    title: "Large Format Exhibition Banners",
    category: "Digital Printing",
    image: "/works/print-work-2.jpg",
    description: "Vibrant and weather-resistant promotional roll-ups and outdoor billboard prints that demand attention.",
    client: "Global Expo Group",
    date: "April 2026",
  },
  {
    id: 3,
    title: "Sleek Business Cards & Stationery",
    category: "Corporate Branding",
    image: "/works/print-work-3.jpg",
    description: "Matte-laminated business cards with spot UV finish, letterheads, and customized presentation folders.",
    client: "Apex Law Chamber",
    date: "March 2026",
  },
  {
    id: 4,
    title: "Eco-Friendly Branded Tote Bags",
    category: "Corporate Branding",
    image: "/works/print-work-4.jpg",
    description: "Reusable custom cotton tote bags featuring screen-printed corporate brand identity for eco-conscious campaigns.",
    client: "GreenEarth Initiative",
    date: "February 2026",
  },
  {
    id: 5,
    title: "Custom Printed Mugs & Souvenirs",
    category: "Souvenirs / Gift Items",
    image: "/works/print-work-5.jpg",
    description: "Premium sublimation mugs, custom keychains, and laser-engraved pens perfect for corporate events and giveaways.",
    client: "Consolidated Bank",
    date: "January 2026",
  },
  {
    id: 6,
    title: "Exclusive Hardcover Notebooks",
    category: "Corporate Diaries",
    image: "/works/print-work-6.jpg",
    description: "Custom debossed leatherette diaries and hardcover planners with gold foil detailing and silk ribbon markers.",
    client: "Prime Insurance",
    date: "December 2025",
  },
  {
    id: 7,
    title: "Luxury Custom Packaging Boxes",
    category: "Corporate Branding",
    image: "/works/print-work-7.jpg",
    description: "Rigid magnetic closure boxes with custom velvet inserts, matte finishing, and hot foil stamped branding.",
    client: "Glow Cosmetics",
    date: "November 2025",
  },
  {
    id: 8,
    title: "Editorial Magazines & Catalogs",
    category: "Graphic Design",
    image: "/works/print-work-8.jpg",
    description: "Perfect-bound corporate brochures, annual reports, and high-gloss fashion magazines printed in stunning detail.",
    client: "Vogue West Africa",
    date: "October 2025",
  },
];


export const featuredWorks = workCategories.map((category) => allWorks.find((work) => work.category === category)!);
