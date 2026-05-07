export type Choice = { id: string; text: string };
export type Question = {
  id: string;
  prompt: string;
  choices: Choice[];
  answer: string;
  explanation: string;
};
export type SampleQuiz = {
  slug: string;
  title: string;
  subject: "Mathematics" | "Physics" | "Chemistry";
  difficulty: "Core" | "Extended";
  durationMin: number;
  premium: boolean;
  questions: Question[];
};

export const SAMPLE_QUIZZES: SampleQuiz[] = [
  {
    slug: "math-algebra-basics",
    title: "Algebra: Linear Equations",
    subject: "Mathematics",
    difficulty: "Core",
    durationMin: 8,
    premium: false,
    questions: [
      {
        id: "q1",
        prompt: "Solve for x:  3x + 7 = 22",
        choices: [
          { id: "a", text: "x = 3" },
          { id: "b", text: "x = 5" },
          { id: "c", text: "x = 7" },
          { id: "d", text: "x = 15" },
        ],
        answer: "b",
        explanation: "3x = 22 − 7 = 15, so x = 15 / 3 = 5.",
      },
      {
        id: "q2",
        prompt: "Expand:  (x + 4)(x − 2)",
        choices: [
          { id: "a", text: "x² + 2x − 8" },
          { id: "b", text: "x² − 2x − 8" },
          { id: "c", text: "x² + 6x − 8" },
          { id: "d", text: "x² − 6x + 8" },
        ],
        answer: "a",
        explanation: "x·x + x·(−2) + 4·x + 4·(−2) = x² + 2x − 8.",
      },
      {
        id: "q3",
        prompt: "If 2x − 5 = 9, what is x²?",
        choices: [
          { id: "a", text: "14" },
          { id: "b", text: "36" },
          { id: "c", text: "49" },
          { id: "d", text: "81" },
        ],
        answer: "c",
        explanation: "2x = 14, x = 7, x² = 49.",
      },
      {
        id: "q4",
        prompt: "Factorise:  x² − 9",
        choices: [
          { id: "a", text: "(x − 3)(x − 3)" },
          { id: "b", text: "(x + 3)(x − 3)" },
          { id: "c", text: "(x + 9)(x − 1)" },
          { id: "d", text: "Cannot be factorised" },
        ],
        answer: "b",
        explanation: "Difference of two squares: a² − b² = (a + b)(a − b).",
      },
      {
        id: "q5",
        prompt: "Solve:  (x − 1)/2 = 4",
        choices: [
          { id: "a", text: "x = 7" },
          { id: "b", text: "x = 9" },
          { id: "c", text: "x = 8" },
          { id: "d", text: "x = 3" },
        ],
        answer: "b",
        explanation: "Multiply both sides by 2: x − 1 = 8, so x = 9.",
      },
    ],
  },
  {
    slug: "physics-forces-motion",
    title: "Forces & Motion",
    subject: "Physics",
    difficulty: "Core",
    durationMin: 8,
    premium: false,
    questions: [
      {
        id: "q1",
        prompt: "A car accelerates from 10 m/s to 30 m/s in 4 seconds. What is its acceleration?",
        choices: [
          { id: "a", text: "2.5 m/s²" },
          { id: "b", text: "5 m/s²" },
          { id: "c", text: "10 m/s²" },
          { id: "d", text: "20 m/s²" },
        ],
        answer: "b",
        explanation: "a = Δv / t = (30 − 10) / 4 = 5 m/s².",
      },
      {
        id: "q2",
        prompt: "What is the SI unit of force?",
        choices: [
          { id: "a", text: "Joule" },
          { id: "b", text: "Watt" },
          { id: "c", text: "Newton" },
          { id: "d", text: "Pascal" },
        ],
        answer: "c",
        explanation: "Force is measured in newtons (N), where 1 N = 1 kg·m/s².",
      },
      {
        id: "q3",
        prompt: "An object of mass 5 kg has a resultant force of 20 N. Its acceleration is:",
        choices: [
          { id: "a", text: "2 m/s²" },
          { id: "b", text: "4 m/s²" },
          { id: "c", text: "10 m/s²" },
          { id: "d", text: "100 m/s²" },
        ],
        answer: "b",
        explanation: "F = ma → a = F / m = 20 / 5 = 4 m/s².",
      },
      {
        id: "q4",
        prompt: "Which is a vector quantity?",
        choices: [
          { id: "a", text: "Mass" },
          { id: "b", text: "Speed" },
          { id: "c", text: "Velocity" },
          { id: "d", text: "Time" },
        ],
        answer: "c",
        explanation: "Velocity has both magnitude and direction.",
      },
      {
        id: "q5",
        prompt: "An object in free fall (no air resistance) accelerates at approximately:",
        choices: [
          { id: "a", text: "1 m/s²" },
          { id: "b", text: "9.8 m/s²" },
          { id: "c", text: "98 m/s²" },
          { id: "d", text: "0 m/s²" },
        ],
        answer: "b",
        explanation: "Earth's gravitational acceleration is g ≈ 9.81 m/s².",
      },
    ],
  },
  {
    slug: "chemistry-atomic-structure",
    title: "Atomic Structure",
    subject: "Chemistry",
    difficulty: "Core",
    durationMin: 8,
    premium: false,
    questions: [
      {
        id: "q1",
        prompt: "What is the charge of a proton?",
        choices: [
          { id: "a", text: "−1" },
          { id: "b", text: "0" },
          { id: "c", text: "+1" },
          { id: "d", text: "+2" },
        ],
        answer: "c",
        explanation: "Protons carry a +1 elementary charge.",
      },
      {
        id: "q2",
        prompt: "How many electrons does a neutral oxygen atom (Z = 8) have?",
        choices: [
          { id: "a", text: "6" },
          { id: "b", text: "8" },
          { id: "c", text: "10" },
          { id: "d", text: "16" },
        ],
        answer: "b",
        explanation: "In a neutral atom, the number of electrons equals the atomic number.",
      },
      {
        id: "q3",
        prompt: "Isotopes of the same element have the same number of:",
        choices: [
          { id: "a", text: "Neutrons" },
          { id: "b", text: "Protons" },
          { id: "c", text: "Nucleons" },
          { id: "d", text: "Electron shells" },
        ],
        answer: "b",
        explanation: "Isotopes share the same atomic number (protons) but differ in neutrons.",
      },
      {
        id: "q4",
        prompt: "The electron configuration of sodium (Na, Z = 11) is:",
        choices: [
          { id: "a", text: "2, 8, 1" },
          { id: "b", text: "2, 9" },
          { id: "c", text: "2, 8, 2" },
          { id: "d", text: "1, 8, 2" },
        ],
        answer: "a",
        explanation: "Shells fill 2, then 8, then 1 → total 11 electrons.",
      },
      {
        id: "q5",
        prompt: "Which subatomic particle has negligible mass?",
        choices: [
          { id: "a", text: "Proton" },
          { id: "b", text: "Neutron" },
          { id: "c", text: "Electron" },
          { id: "d", text: "Nucleus" },
        ],
        answer: "c",
        explanation: "An electron has ~1/1836 the mass of a proton — effectively negligible.",
      },
    ],
  },
];

export function getQuizBySlug(slug: string) {
  return SAMPLE_QUIZZES.find((q) => q.slug === slug);
}