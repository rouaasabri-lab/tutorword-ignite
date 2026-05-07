export type Tier = { label: string; slug: string };
export type SubjectGroup = {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  subjects: { name: string; tiers: Tier[] }[];
};

export const SUBJECT_GROUPS: SubjectGroup[] = [
  {
    slug: "mathematics",
    name: "IGCSE Mathematics",
    emoji: "∑",
    description: "Core & Extended — algebra, geometry, statistics.",
    subjects: [
      { name: "Mathematics", tiers: [{ label: "Core", slug: "math-core" }, { label: "Extended", slug: "math-ext" }] },
      { name: "Additional Mathematics", tiers: [{ label: "0606", slug: "add-math" }] },
    ],
  },
  {
    slug: "sciences",
    name: "IGCSE Sciences",
    emoji: "⚗",
    description: "Physics, Chemistry, Biology — Core & Extended.",
    subjects: [
      { name: "Physics", tiers: [{ label: "Core", slug: "phy-core" }, { label: "Extended", slug: "phy-ext" }] },
      { name: "Chemistry", tiers: [{ label: "Core", slug: "chem-core" }, { label: "Extended", slug: "chem-ext" }] },
      { name: "Biology", tiers: [{ label: "Core", slug: "bio-core" }, { label: "Extended", slug: "bio-ext" }] },
    ],
  },
  {
    slug: "english",
    name: "IGCSE English",
    emoji: "✎",
    description: "First Language & Literature in English.",
    subjects: [
      { name: "English Language", tiers: [{ label: "0500", slug: "eng-lang" }] },
      { name: "Literature in English", tiers: [{ label: "0475", slug: "eng-lit" }] },
    ],
  },
  {
    slug: "humanities",
    name: "IGCSE Humanities",
    emoji: "₤",
    description: "Economics, Business and Computer Science.",
    subjects: [
      { name: "Economics", tiers: [{ label: "0455", slug: "econ" }] },
      { name: "Business Studies", tiers: [{ label: "0450", slug: "bus" }] },
      { name: "Computer Science", tiers: [{ label: "0478", slug: "cs" }] },
    ],
  },
];

// Flat list for simpler pages
export const FLAT_SUBJECTS = SUBJECT_GROUPS.flatMap((g) =>
  g.subjects.map((s) => ({
    name: s.name,
    group: g.name,
    emoji: g.emoji,
    tiers: s.tiers,
  })),
);
