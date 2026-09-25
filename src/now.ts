// What's going on right now. Edit this file whenever something changes;
// the ticker and the "right now" section on the home page read from it.
//
// Anything marked TODO is a placeholder. Swap in the real thing.
//
// Books and music can also update themselves at build time:
//   GOODREADS_USER_ID          -> your "currently reading" shelf
//   LASTFM_USER + LASTFM_API_KEY -> whatever you played last
// If those are set, live data fills in the title/link/cover automatically.
// Your "take" below still shows as long as the title matches.

export const NOW = {
  // When you last touched this file. Shown as "updated ..." on the site.
  updated: "2026-09-25",

  reading: {
    title: "TODO: book title",
    author: "TODO: author",
    href: "", // link to the book (Goodreads, Bookshop, wherever)
    take: "TODO: your take so far, one or two lines.",
  },

  listening: {
    title: "TODO: album or song",
    artist: "TODO: artist",
    href: "", // Spotify / Apple Music / Bandcamp link
    take: "TODO: why it's on repeat.",
  },

  // How many accounts/projects you're juggling right now.
  accounts: "10–20",

  // Newest first. Add a line whenever something's on your mind; old ones
  // stay, so this turns into a running log of what you've been thinking about.
  onMyMind: [
    { date: "2026-09-25", text: "TODO: what's on your mind these days." },
  ],

  // Drop photos in public/moodboard/ and list them here.
  // e.g. { src: "/moodboard/pike-place.jpg", alt: "Pike Place at night" }
  moodboard: [] as { src: string; alt: string }[],
};
