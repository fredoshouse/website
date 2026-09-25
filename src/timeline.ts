// The timeline on the home page: every year from TIMELINE_START to now.
//
// To fill in a year, add it to STOPS below. Years you leave out still show
// up as small ticks on the line, so the whole span is always there.
//
//   2014: { icon: "🎓", title: "Graduated high school", note: "One line, in your voice." },
//
// icon:  any emoji
// title: what happened (short)
// where: optional company / school / city
// href:  optional link for `where`
// note:  optional one-liner

export const TIMELINE_START = 1996;

export interface Stop {
  icon?: string;
  title: string;
  where?: string;
  href?: string;
  note?: string;
}

export const STOPS: Record<number, Stop> = {
  1996: { icon: "🌱", title: "Where it starts", note: "TODO: one line about 1996." },

  // Ready to go, just move each one onto its year:
  // 20XX: { icon: "🎨", title: "Creative project manager", note: "Figured out pretty quickly I'm not really a project manager. I'm an operator." },
  // 20XX: { icon: "🏠", title: "Started Fredo's House", note: "My little corner of the internet. A place to think out loud." },
  // 20XX: { icon: "📈", title: "Growth", where: "Ghost Note", href: "https://www.ghostnoteagency.com", note: "Turning good conversations into good work." },
  // 20XX: { icon: "⚙️", title: "Operations", where: "Integral", note: "Keeping the machine moving." },

  2026: { icon: "📍", title: "Seattle", note: "10 to 20 accounts at once, and trying to build a life I actually enjoy." },
};

export interface Year {
  year: number;
  stop?: Stop;
  now: boolean;
}

export function getTimeline(): Year[] {
  const end = Math.max(new Date().getFullYear(), ...Object.keys(STOPS).map(Number));
  return Array.from({ length: end - TIMELINE_START + 1 }, (_, i) => {
    const year = TIMELINE_START + i;
    return { year, stop: STOPS[year], now: year === end };
  });
}
