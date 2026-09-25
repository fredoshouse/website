// Everything personal lives here so the copy is easy to edit in one place.
export const SITE = {
  name: "Alfred Adarkwah",
  nickname: "Fredo",
  title: "Alfred “Fredo” Adarkwah",
  description:
    "Operator, founder of Fredo's House. Writing on operations, agencies, and building things that run well.",
  email: "alfred@fredoshouse.com",
  location: "Kirkland, WA",
  tagline: "Founder of Fredo's House",
};

export const NAV = [
  { href: "/writing", label: "writing" },
  { href: "/work", label: "work" },
  { href: "/about", label: "about" },
  { href: "mailto:alfred@fredoshouse.com", label: "contact" },
];

export const ELSEWHERE = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alfredadarkwah/" },
  { label: "Email", href: `mailto:${SITE.email}` },
  { label: "RSS", href: "/rss.xml" },
];

export const SERIES: Record<string, { name: string; blurb: string }> = {
  letters: {
    name: "Fredo's Letters",
    blurb: "Notes on operating, agencies, and the work behind the work.",
  },
  lessons: {
    name: "Fredo's Lessons",
    blurb: "Practical primers on project management and operations.",
  },
  notes: {
    name: "Notes",
    blurb: "Everything else.",
  },
};
