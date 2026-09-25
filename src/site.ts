// Everything personal lives here so the copy is easy to edit in one place.
export const SITE = {
  name: "Alfred Adarkwah",
  nickname: "Fredo",
  title: "Alfred “Fredo” Adarkwah",
  description:
    "Hey, I'm Fredo. Growth at Ghost Note, ops at Integral, and trying to have some fun in Seattle along the way.",
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
    blurb: "Thoughts on work, agencies, and keeping it all together.",
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
