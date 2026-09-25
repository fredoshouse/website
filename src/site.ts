// Everything personal lives here so the copy is easy to edit in one place.
export const SITE = {
  name: "Alfred Adarkwah",
  nickname: "Fredo",
  title: "Alfred “Fredo” Adarkwah",
  description:
    "Hey, I’m Fredo. Growth at Ghost Note, operations at Integral, and trying to build a life I actually enjoy in Seattle.",
  email: "alfred@fredoshouse.com",
  location: "Seattle",
  tagline: "Growth at Ghost Note. Ops at Integral.",
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
    blurb: "Thinking out loud about work, growth, and agency life.",
  },
  lessons: {
    name: "Fredo's Lessons",
    blurb: "The stuff I wish someone had told me earlier about running projects.",
  },
  notes: {
    name: "Notes",
    blurb: "Everything else.",
  },
};
