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
    name: "IGCSE Physics",
    emoji: "𝛗",
    description: "Mechanics, electricity, waves — Core & Extended.",
    subjects: [
      { name: "Physics", tiers: [{ label: "Core", slug: "phy-core" }, { label: "Extended", slug: "phy-ext" }] },
    ],
  },
  {
    slug: "chemistry",
    name: "IGCSE Chemistry",
    emoji: "⚗",
    description: "Atomic structure, reactions, organic — Core & Extended.",
    subjects: [
      { name: "Chemistry", tiers: [{ label: "Core", slug: "chem-core" }, { label: "Extended", slug: "chem-ext" }] },
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
