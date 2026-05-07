export type Subject = {
  slug: string;
  name: string;
  blurb: string;
  topics: number;
  questions: number;
  emoji: string;
};

export const SUBJECTS: Subject[] = [
  { slug: "mathematics", name: "Mathematics", blurb: "Algebra, geometry, statistics & calculus prep.", topics: 18, questions: 1240, emoji: "∑" },
  { slug: "physics", name: "Physics", blurb: "Mechanics, electricity, waves & modern physics.", topics: 14, questions: 920, emoji: "⚛" },
  { slug: "chemistry", name: "Chemistry", blurb: "Atoms, bonding, organic & physical chemistry.", topics: 15, questions: 880, emoji: "⚗" },
  { slug: "biology", name: "Biology", blurb: "Cells, genetics, ecology & human biology.", topics: 16, questions: 1010, emoji: "🧬" },
  { slug: "english", name: "English Language", blurb: "Comprehension, writing technique & analysis.", topics: 10, questions: 540, emoji: "✎" },
  { slug: "economics", name: "Economics", blurb: "Micro, macro, trade & development.", topics: 12, questions: 670, emoji: "₤" },
  { slug: "business", name: "Business Studies", blurb: "Operations, finance, marketing & HR.", topics: 11, questions: 580, emoji: "◎" },
  { slug: "computer-science", name: "Computer Science", blurb: "Algorithms, data, networks & programming.", topics: 13, questions: 720, emoji: "⌘" },
];
