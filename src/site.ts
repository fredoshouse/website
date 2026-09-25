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

// Everything in the + menu. Add a page here and it shows up in the menu.
export const LIFE_PAGES = [
  { href: "/", label: "Home", note: "Start here" },
  { href: "/ask", label: "Ask Fredo", note: "Ask me anything, AI-assisted" },
  { href: "/writing", label: "Writing", note: "Letters, lessons, case studies" },
  { href: "/work", label: "What I do", note: "Ghost Note, Integral, Fredo's House" },
  { href: "/timeline", label: "The path so far", note: "1996 to now" },
  { href: "/about", label: "The other stuff", note: "Life beyond work" },
  { href: "/#right-now", label: "Right now", note: "Reading, listening, thinking" },
];

export const ELSEWHERE = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alfredadarkwah/" },
  { label: "Email", href: `mailto:${SITE.email}` },
  { label: "RSS", href: "/rss.xml" },
];

export const SERIES: Record<string, { name: string; blurb: string }> = {
  letters: {
    name: "Fredo's Letters",
    blurb: "Thinking out loud about work, growth, and life.",
  },
  lessons: {
    name: "Fredo's Lessons",
    blurb: "The stuff I wish someone had told me earlier about running projects.",
  },
  notes: {
    name: "Case studies & templates",
    blurb: "Things I've built and how.",
  },
};

// beehiiv. Fill these in once the newsletter is connected:
// - url: your publication's address, e.g. "https://fredosletters.beehiiv.com"
// - embedId: from beehiiv > Grow > Subscribe Forms > (form) > Embed; the id in
//   the iframe src "https://embeds.beehiiv.com/<embedId>"
// - rss: from beehiiv > Settings > RSS Feed. Letters show up on the Writing
//   page automatically each time the site builds.
export const NEWSLETTER = {
  name: "Fredo's Letters",
  url: "https://fredoshouse.beehiiv.com",
  embedId: "",
  rss: "",
};

// Added to every link that goes to beehiiv, so beehiiv's own analytics show
// which reads and subscribers came from this site.
export const BEEHIIV_UTM = "utm_source=alfredadarkwah.com&utm_medium=website";
