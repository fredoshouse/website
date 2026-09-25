// Everything personal lives here so the copy is easy to edit in one place.
export const SITE = {
  name: "Alfred Adarkwah",
  nickname: "Fredo",
  title: "Alfred “Fredo” Adarkwah",
  description:
    "Operator, founder of Fredo's House. Writing on operations, agencies, and building things that run well.",
  email: "alfred@fredoshouse.com",
  location: "Kirkland, WA",
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
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
