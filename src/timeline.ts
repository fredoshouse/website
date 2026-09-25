// The timeline on the home page. Oldest first; it slides left to right.
// Anything marked TODO is a placeholder. Fill in the real years and lines.

export interface Stop {
  when: string; // "2019", "2021–2023", "Now"
  title: string; // what you were doing
  where?: string; // company / city
  href?: string;
  note?: string; // one line, in your voice
}

export const TIMELINE: Stop[] = [
  {
    when: "TODO",
    title: "Creative project manager",
    note: "Figured out pretty quickly I'm not really a project manager. I'm an operator.",
  },
  {
    when: "TODO",
    title: "Started Fredo's House",
    note: "My little corner of the internet. A place to think out loud.",
  },
  {
    when: "TODO",
    title: "Growth",
    where: "Ghost Note",
    href: "https://www.ghostnoteagency.com",
    note: "Turning good conversations into good work.",
  },
  {
    when: "TODO",
    title: "Operations",
    where: "Integral",
    note: "Keeping the machine moving.",
  },
  {
    when: "Now",
    title: "Seattle",
    note: "10 to 20 accounts at once, and trying to build a life I actually enjoy.",
  },
];
