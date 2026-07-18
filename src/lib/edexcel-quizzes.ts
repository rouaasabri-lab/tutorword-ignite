// Auto-generated from Edexcel question banks — do not edit by hand.
export type EdexcelQuestion = { id: string; prompt: string; answer: string; difficulty: string; year: number | string };
export type EdexcelQuiz = {
  slug: string;
  title: string;
  subject: 'Mathematics';
  level: 'IGCSE' | 'A Level';
  topic: string;
  durationMin: number;
  premium: boolean;
  questions: EdexcelQuestion[];
};

export const EDEXCEL_QUIZZES: EdexcelQuiz[] = [
  {
    "slug": "igcse-linear-equations-algebra-set-1",
    "title": "Linear Equations & Algebra — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Linear Equations & Algebra",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q1",
        "prompt": "(a) Simplify 4x + 3y - 2x + 5y (b) Solve 5(2x - 3) = 4x + 7",
        "answer": "(a) 2x + 8y (b) x = 4.4",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q2",
        "prompt": "A rectangle has length (2x + 3) cm and width (x - 1) cm. (a) Write an expression for the perimeter (b) If perimeter is 22 cm, find x",
        "answer": "(a) 6x + 4 cm (b) x = 3",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q3",
        "prompt": "(a) Expand 3(2x - 5) + 2(x + 4) (b) Solve the equation = 15",
        "answer": "(a) 8x - 7 (b) x = 2.75",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q4",
        "prompt": "The cost of a pen is x pence. A pencil costs 5 pence less. (a) Write total cost of 3 pens and 2 pencils (b) If total is 95p, find x",
        "answer": "(a) 5x - 10 (b) x = 21",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q5",
        "prompt": "(a) Solve 3x - 7 = 2(x + 1) (b) Check your answer",
        "answer": "(a) x = 9 (b) 3(9)-7 = 20, 2(10) = 20 ✓",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q6",
        "prompt": "A number is multiplied by 4 then 3 is subtracted. Result is 21. (a) Write as equation (b) Solve for number",
        "answer": "(a) 4x - 3 = 21 (b) x = 6",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q7",
        "prompt": "(a) Solve (x + 4)/3 = 5 (b) Verify solution",
        "answer": "(a) x = 11 (b) (11+4)/3 = 5 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q8",
        "prompt": "Anna has £x. Ben has £(2x - 5). Together they have £25. Find x",
        "answer": "x = 10",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q9",
        "prompt": "(a) Expand (x + 2)(x + 3) (b) Solve (x + 2)(x + 3) = 12",
        "answer": "(a) x² + 5x + 6 (b) x = 0 or x = -5",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q10",
        "prompt": "A rectangle's length is 3 times its width. If width is w, perimeter is 40 cm. Find w",
        "answer": "w = 5",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-linear-equations-algebra-set-2",
    "title": "Linear Equations & Algebra — Set 2",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Linear Equations & Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q11",
        "prompt": "(a) Rearrange 2y + 3x = 12 to make y the subject (b) Find y when x = 2",
        "answer": "(a) y = (12-3x)/2 (b) y = 3",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q12",
        "prompt": "(a) Simplify 2(3x + 4) - 3(x - 2) (b) Solve = 5",
        "answer": "(a) 3x + 14 (b) x = -3",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q13",
        "prompt": "The perimeter of a square is 8x + 4. Each side is (2x + 1). (a) Verify (b) If perimeter is 28 cm, find side length",
        "answer": "(a) 4(2x+1) = 8x+4 ✓ (b) side = 8 cm",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q14",
        "prompt": "(a) Make a the subject: b = 3a + 2 (b) Find a when b = 11",
        "answer": "(a) a = (b-2)/3 (b) a = 3",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q15",
        "prompt": "Solve 2(x - 3) + 5 = 3(x + 1) - 2",
        "answer": "x = 4",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q16",
        "prompt": "(a) Expand (2x - 3)(x + 4) (b) Simplify fully",
        "answer": "(a)(b) 2x² + 5x - 12",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q17",
        "prompt": "A shop sells notebooks at £n. Pens cost £0.80 less. If I buy 4 notebooks and 6 pens for £8.20, find n",
        "answer": "n = 1.25",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q18",
        "prompt": "(a) Solve 5x + 2 = 3x + 12 (b) Is x = 5 a solution to 2x² - x - 45 = 0?",
        "answer": "(a) x = 5 (b) Yes",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q19",
        "prompt": "The sum of three consecutive numbers is 27. Find the largest number",
        "answer": "10",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q20",
        "prompt": "(a) Solve 4(x + 1) = 2(x + 5) (b) Rearrange 3y - 2x = 10 for y",
        "answer": "(a) x = 3 (b) y = (10+2x)/3",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-linear-equations-algebra-set-3",
    "title": "Linear Equations & Algebra — Set 3",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Linear Equations & Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q21",
        "prompt": "(a) Expand and simplify (3x + 2)² (b) Solve (3x + 2)² = 49",
        "answer": "(a) 9x² + 12x + 4 (b) x = 5/3 or x = -3",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q22",
        "prompt": "Three boxes have mass x kg, (x+2) kg, (x+5) kg. Total 24 kg. Find x",
        "answer": "x = 5.67 (or 17/3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q23",
        "prompt": "(a) Make m subject: n = 5m - 3 (b) If n = 22, find m",
        "answer": "(a) m = (n+3)/5 (b) m = 5",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q24",
        "prompt": "A number doubled and increased by 7 equals 35. Find number",
        "answer": "14",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q25",
        "prompt": "(a) Simplify 5a + 2b - 3a + 6b (b) If a = 2, b = 3, find value",
        "answer": "(a) 2a + 8b (b) 28",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q26",
        "prompt": "Two numbers have sum 15 and difference 3. Find both numbers",
        "answer": "9 and 6",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q27",
        "prompt": "(a) Solve 3(2x - 1) = 4(x + 2) - 5 (b) Check by substitution",
        "answer": "(a) x = 3 (b) LHS=15, RHS=15 ✓",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q28",
        "prompt": "(a) Expand 2(x + 3) + 3(x - 4) (b) Solve = 0",
        "answer": "(a) 5x - 6 (b) x = 1.2",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q29",
        "prompt": "Solve (2x - 1)/3 + (x + 2)/2 = 5",
        "answer": "x = 5",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q30",
        "prompt": "(a) Factor 6x + 9 (b) Solve 6x + 9 = 33",
        "answer": "(a) 3(2x+3) (b) x = 4",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-linear-equations-algebra-set-4",
    "title": "Linear Equations & Algebra — Set 4",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Linear Equations & Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q31",
        "prompt": "(a) Solve 5 - 2x = 3 (b) Solve 5 - 2x = -7",
        "answer": "(a) x = 1 (b) x = 6",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q32",
        "prompt": "The larger of two numbers is 5 more than the smaller. Their sum is 25. Find both",
        "answer": "15 and 10",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q33",
        "prompt": "(a) Rearrange v² = u² + 2as for a (b) If v=20, u=10, s=15, find a",
        "answer": "(a) a = (v²-u²)/(2s) (b) a = 10",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q34",
        "prompt": "(a) Expand (x-2)(x+5) (b) Solve (x-2)(x+5) = 0",
        "answer": "(a) x² + 3x - 10 (b) x = 2 or x = -5",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q35",
        "prompt": "(a) Simplify (12x²)/(4x) (b) Solve = 3",
        "answer": "(a) 3x (b) x = 1",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q36",
        "prompt": "A number minus 8 equals 3/5 of the number. Find it",
        "answer": "20",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q37",
        "prompt": "(a) Solve 2x + 3(4 - x) = 5 (b) Write 4 - x = 2 solution check",
        "answer": "(a) x = 7 (b) Doesn't work",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q38",
        "prompt": "(a) Factor 4x² - 9 (b) Solve 4x² - 9 = 0",
        "answer": "(a) (2x-3)(2x+3) (b) x = ±1.5",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q39",
        "prompt": "(a) Expand (3x + 2)(2x - 5) (b) What is coefficient of x?",
        "answer": "(a) 6x² - 11x - 10 (b) -11",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q40",
        "prompt": "(a) Solve 10 - 3x = 1 (b) Solve 1 - 3x = 10",
        "answer": "(a) x = 3 (b) x = -3",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-linear-equations-algebra-set-5",
    "title": "Linear Equations & Algebra — Set 5",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Linear Equations & Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q41",
        "prompt": "A garden is 15 m longer than it is wide. Perimeter is 90 m. Find dimensions",
        "answer": "30 m × 15 m",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q42",
        "prompt": "(a) Rearrange A = πr² for r (b) If A = 50, find r",
        "answer": "(a) r = √(A/π) (b) r = 3.99",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q43",
        "prompt": "(a) Solve (x-3)² = 16 (b) How many solutions?",
        "answer": "(a) x = 7 or x = -1 (b) 2",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q44",
        "prompt": "(a) Simplify 2x(3 + 4x) - 8x² (b) Solve = 6",
        "answer": "(a) 6x (b) x = 1",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q45",
        "prompt": "(a) Make t subject: s = ut + (1/2)at² (harder) (b) If s=100, u=20, a=10, find t",
        "answer": "(a) 5t² + 20t - 100 = 0 (b) t = 2.58 or negative",
        "difficulty": "Medium",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-quadratic-equations-set-1",
    "title": "Quadratic Equations — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Quadratic Equations",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q51",
        "prompt": "(a) Solve x² - 7x + 12 = 0 (b) Verify both solutions",
        "answer": "(a) x = 3, x = 4 (b) Check both ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q52",
        "prompt": "(a) Show that x² + 2x - 15 = (x + 5)(x - 3) (b) Solve = 0",
        "answer": "(b) x = -5, x = 3",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q53",
        "prompt": "A rectangle has area 24 cm². Length is 5 cm more than width. (a) Form equation (b) Find dimensions",
        "answer": "(a) w(w+5) = 24 (b) width = 3 cm, length = 8 cm",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q54",
        "prompt": "(a) Solve x² = 5x (b) Is x = 0 always a solution when coefficient of constant = 0?",
        "answer": "(a) x = 0, x = 5 (b) Yes",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q55",
        "prompt": "(a) Complete square: x² + 6x + ? = (x + ?)² (b) Solve x² + 6x + 8 = 0",
        "answer": "(a) (x+3)² - 1 (b) x = -2, x = -4",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q56",
        "prompt": "(a) Use quadratic formula for 2x² - 5x + 2 = 0 (b) Give answers to 2 d.p.",
        "answer": "(b) x = 2, x = 0.5",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q57",
        "prompt": "A projectile height is h = -5t² + 20t + 2 where t is time. (a) Find max height (b) When does h = 0?",
        "answer": "(a) 22 m at t = 2s (b) t = 4.1s (approximately)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q58",
        "prompt": "(a) Discriminant of x² - 4x + 5 = 0 (b) How many real solutions?",
        "answer": "(a) Δ = -4 (b) 0 (no real solutions)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q59",
        "prompt": "(a) Factorize 2x² + 7x + 3 (b) Solve = 0",
        "answer": "(a) (2x+1)(x+3) (b) x = -0.5, x = -3",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q60",
        "prompt": "(a) Solve 3x² - 12 = 0 (b) What type of quadratic is this?",
        "answer": "(a) x = ±2 (b) Difference of squares/Biquadratic",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-quadratic-equations-set-2",
    "title": "Quadratic Equations — Set 2",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Quadratic Equations",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q61",
        "prompt": "(a) Given f(x) = x² - 3x + 2, find f(4) (b) Solve f(x) = 0",
        "answer": "(a) 6 (b) x = 1, x = 2",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q62",
        "prompt": "A number multiplied by one less than itself = 30. (a) Form equation (b) Find the number",
        "answer": "(a) x(x-1) = 30 (b) x = 6.45 approximately",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q63",
        "prompt": "(a) Show vertex of y = x² - 4x + 3 is (2, -1) (b) Find x-intercepts",
        "answer": "(b) x = 1, x = 3",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q64",
        "prompt": "(a) Solve (x + 2)² = 9 (b) How many solutions?",
        "answer": "(a) x = 1, x = -5 (b) 2",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q65",
        "prompt": "(a) Expand (x - 3)² (b) Use to solve x² - 6x + 5 = 0",
        "answer": "(a) x² - 6x + 9 (b) x = 1, x = 5",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q66",
        "prompt": "(a) Solve x² + 4x - 21 = 0 by factorization (b) Verify",
        "answer": "(a) x = 3, x = -7 (b) Substitute both",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q67",
        "prompt": "(a) For ax² + bx + c = 0, what does discriminant tell you? (b) For x² - 2x + 1, find discriminant",
        "answer": "(a) Number of real solutions (b) 0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q68",
        "prompt": "(a) Complete the square for x² - 8x + 5 (b) Hence solve = 0",
        "answer": "(a) (x-4)² - 11 (b) x = 4 ± √11",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q69",
        "prompt": "A ball is thrown. Height h = -5t² + 15t. (a) When is h = 10? (b) Maximum height?",
        "answer": "(a) t ≈ 0.84s or 2.16s (b) 11.25 m",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q70",
        "prompt": "(a) Solve 4x² - 25 = 0 (b) What's special about this quadratic?",
        "answer": "(a) x = ±2.5 (b) Difference of squares",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-quadratic-equations-set-3",
    "title": "Quadratic Equations — Set 3",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Quadratic Equations",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q71",
        "prompt": "(a) Given y = x² + 3x - 4, find roots (b) Find y-intercept",
        "answer": "(a) x = 1, x = -4 (b) -4",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q72",
        "prompt": "(a) For 2x² - 3x + 1 = 0, use discriminant (b) Number of solutions?",
        "answer": "(a) Δ = 1 (b) 2 (distinct real)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q73",
        "prompt": "(a) Solve x² - 10x + 24 = 0 (b) Factorize if possible",
        "answer": "(a) x = 4, x = 6 (b) (x-4)(x-6)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q74",
        "prompt": "(a) Two consecutive integers multiply to 132. Form equation (b) Find integers",
        "answer": "(a) x(x+1) = 132 (b) 11 and 12",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q75",
        "prompt": "(a) Complete square: x² + 5x - 3 (b) Hence solve = 0",
        "answer": "(a) (x+2.5)² - 9.25 (b) x ≈ 0.54 or -5.54",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q76",
        "prompt": "(a) Vertex form of y = x² - 2x - 3 (b) Sketch showing intercepts",
        "answer": "(a) y = (x-1)² - 4 (b) Roots x = -1, 3",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q77",
        "prompt": "(a) Solve 5x² = 20x (b) Factor completely",
        "answer": "(a) x = 0, x = 4 (b) 5x(x-4)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q78",
        "prompt": "(a) For x² + px + q = 0, if roots are 3 and -2, find p and q",
        "answer": "(a) p = -1, q = -6",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q79",
        "prompt": "(a) Discriminant of 3x² + 2x - 1 (b) How many real solutions?",
        "answer": "(a) Δ = 16 (b) 2",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q80",
        "prompt": "(a) Area = x² - 4. If area = 45 cm², find x (b) Which value is valid?",
        "answer": "(a) x = 7 or x = -7 (b) x = 7",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-quadratic-equations-set-4",
    "title": "Quadratic Equations — Set 4",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Quadratic Equations",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q81",
        "prompt": "(a) Solve 6x² + 11x - 10 = 0 (b) Verify smaller root",
        "answer": "(a) x = 2/3 or x = -2.5 (b) Check x = 2/3",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-functions-graphs-set-1",
    "title": "Functions & Graphs — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Functions & Graphs",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q101",
        "prompt": "(a) If f(x) = 2x - 3, find f(5) and f(-2) (b) Find f⁻¹(x)",
        "answer": "(a) 7, -7 (b) f⁻¹(x) = (x+3)/2",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q102",
        "prompt": "(a) Sketch y = x² and y = x² + 3 (b) Describe transformation",
        "answer": "(b) Vertical translation up 3 units",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q103",
        "prompt": "(a) Given g(x) = 3x + 1, find g(g(x)) (b) Simplify",
        "answer": "(a)(b) 9x + 4",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q104",
        "prompt": "(a) Is f(x) = x³ - x odd or even? (b) Show algebraically",
        "answer": "(a) Odd (b) f(-x) = -(x³-x)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q105",
        "prompt": "(a) Domain of f(x) = 1/(x-2) (b) Range if x > 3",
        "answer": "(a) x ≠ 2 (b) f(x) > 0",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q106",
        "prompt": "(a) Expand (x + 1)² - (x - 1)² (b) What is the result?",
        "answer": "(a)(b) 4x",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q107",
        "prompt": "(a) If h(x) = x² and k(x) = 2x + 1, find hk(2) (b) And kh(2)",
        "answer": "(a) 25 (b) 9",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q108",
        "prompt": "(a) Sketch y = 2ˣ (b) What is y-intercept? (c) Asymptote?",
        "answer": "(b) 1 (c) y = 0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q109",
        "prompt": "(a) For f(x) = x² - 4x + 1, find vertex (b) Minimum value?",
        "answer": "(a) (2, -3) (b) -3",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q110",
        "prompt": "(a) If f(x) = |x|, sketch for -3 ≤ x ≤ 3 (b) Is it one-to-one?",
        "answer": "(b) No (not injective)",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-functions-graphs-set-2",
    "title": "Functions & Graphs — Set 2",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Functions & Graphs",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q111",
        "prompt": "(a) Given f⁻¹(x) = 2x - 5, find f(x) (b) Check f(f⁻¹(7))",
        "answer": "(a) f(x) = (x+5)/2 (b) 7",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q112",
        "prompt": "(a) Transform y = x². Shift right 2, up 3. New equation? (b) Vertex?",
        "answer": "(a) y = (x-2)² + 3 (b) (2, 3)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q113",
        "prompt": "(a) If fg(x) = 3(x+2) and g(x) = x+2, find f(x) (b) Check",
        "answer": "(a) f(x) = 3x (b) f(x+2) = 3(x+2) ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q114",
        "prompt": "(a) Range of f(x) = x² for domain -2 ≤ x ≤ 3 (b) Maximum?",
        "answer": "(a) 0 ≤ y ≤ 9 (b) 9",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q115",
        "prompt": "(a) Sketch y = -x². (b) How does it differ from y = x²?",
        "answer": "(b) Reflected in x-axis",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q116",
        "prompt": "(a) For exponential y = 2ˣ, calculate y for x = -1, 0, 1, 2 (b) Growth factor?",
        "answer": "(a) 0.5, 1, 2, 4 (b) 2",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q117",
        "prompt": "(a) Find inverse of f(x) = 3x/(x+1) (b) State domain of f⁻¹",
        "answer": "(a) f⁻¹(x) = -x/(3-x) (b) x ≠ 3",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q118",
        "prompt": "(a) Composite function f(g(x)): f(x) = x², g(x) = 2x-1 (b) Simplify",
        "answer": "(b) 4x² - 4x + 1",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q119",
        "prompt": "(a) Sketch y = 1/x (b) Asymptotes? (c) Symmetry?",
        "answer": "(b) x=0, y=0 (c) Origin (odd function)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q120",
        "prompt": "(a) Transformations of y = sin(x) to y = 3sin(2x) (b) Period?",
        "answer": "(a) Vertical stretch 3, horizontal compression 1/2 (b) 180°",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-functions-graphs-set-3",
    "title": "Functions & Graphs — Set 3",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Functions & Graphs",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q121",
        "prompt": "(a) If f(x) = 2x + 1 and g(x) = x - 3, find gf(x) (b) Solve gf(x) = 0",
        "answer": "(b) x = 1",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q122",
        "prompt": "(a) For f(x) = x³, is it bijective? (b) Find f⁻¹(8)",
        "answer": "(a) Yes (b) 2",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q123",
        "prompt": "(a) Gradient of y = x² at x = 3 (b) Equation of tangent",
        "answer": "(b) y = 6x - 9",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q124",
        "prompt": "(a) Inequalities: sketch y = x + 2 and y = 4 - x (b) Find intersection",
        "answer": "(b) (1, 3)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q125",
        "prompt": "(a) For rational function y = (x+1)/(x-2), vertical asymptote? (b) Horizontal?",
        "answer": "(a) x = 2 (b) y = 1",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q126",
        "prompt": "(a) Quadratic y = 2x² - 4x + 1. Complete the square (b) Vertex?",
        "answer": "(a) 2(x-1)² - 1 (b) (1, -1)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q127",
        "prompt": "(a) Periodic function: y = cos(x). Period and amplitude? (b) Sketch 0° to 360°",
        "answer": "(a) 360°, amplitude 1 (b) Wave shape",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q128",
        "prompt": "(a) Inverse trig: if sin(θ) = 0.5, find θ (0° to 360°) (b) All solutions?",
        "answer": "(a) 30° or 150° (b) 30°, 150°, 390°, 510°...",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q129",
        "prompt": "(a) Differentiation: gradient of y = 3x² - 2x at x = 2 (b) Equation of tangent?",
        "answer": "(a) 10 (b) y = 10x - 8",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q130",
        "prompt": "(a) Logarithmic: if y = log₂(x), find y when x = 8 (b) Inverse of y = log₂(x)?",
        "answer": "(a) 3 (b) y = 2ˣ",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-trigonometric-functions-set-1",
    "title": "Trigonometric Functions — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Trigonometric Functions",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q151",
        "prompt": "In right triangle: opposite 5 cm, hypotenuse 13 cm. (a) Find sin(θ) (b) Find angle θ",
        "answer": "(a) 5/13 (b) 22.6°",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q152",
        "prompt": "(a) For cos(35°) ≈ 0.819, find sin(55°) (b) Why?",
        "answer": "(a) 0.819 (b) Complementary angles)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q153",
        "prompt": "(a) Solve sin(x) = 0.4 for 0° ≤ x ≤ 360° (b) How many solutions?",
        "answer": "(a) 23.6°, 156.4° (b) 2",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q154",
        "prompt": "(a) Sine rule: triangle has a = 7 cm, A = 40°, B = 60°. Find b (b) Then find c",
        "answer": "(a) 9.8 cm (b) 11.5 cm approximately",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q155",
        "prompt": "(a) Cosine rule: sides 5, 6, angle between = 70°. Find opposite side (b) Find another angle",
        "answer": "(a) 6.1 cm (b) 59° approximately",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q156",
        "prompt": "(a) Area of triangle with sides 8, 6 and included angle 50° (b) Formula?",
        "answer": "(a) 18.4 cm² (b) (1/2)ab sin(C)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q157",
        "prompt": "(a) Tan(45°) = ? (b) In right triangle, if opposite = adjacent, angle is ?",
        "answer": "(a) 1 (b) 45°",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q158",
        "prompt": "(a) Angle of elevation from 20 m away to 30 m building. Find angle (b) How to solve?",
        "answer": "(a) tan⁻¹(30/20) = 56.3° (b) Using inverse tan",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q159",
        "prompt": "(a) Bearing from A to B is 050°. What is bearing from B to A? (b) Why?",
        "answer": "(a) 230° (b) Opposite direction + 180°)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q160",
        "prompt": "(a) In right triangle, opposite 12, adjacent 5. Find hypotenuse (b) Find angle θ",
        "answer": "(a) 13 (b) 67.4°",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-trigonometric-functions-set-2",
    "title": "Trigonometric Functions — Set 2",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Trigonometric Functions",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q161",
        "prompt": "(a) Solve cos(2x) = 0.5 for 0° ≤ x ≤ 180° (b) How many solutions?",
        "answer": "(a) x = 30°, 150° (b) 2",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q162",
        "prompt": "(a) Sine rule for ambiguous case: a = 7, b = 5, A = 60°. (b) How many triangles?",
        "answer": "(b) 2 triangles",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q163",
        "prompt": "(a) Exact value sin(30°) (b) cos(60°) (c) tan(45°)",
        "answer": "(a) 1/2 (b) 1/2 (c) 1",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q164",
        "prompt": "(a) Angle between line gradient 2 and horizontal (b) Calculate",
        "answer": "(b) tan⁻¹(2) = 63.4°",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q165",
        "prompt": "(a) In triangle ABC: A = 50°, B = 70°, a = 8 cm. Find b using sine rule",
        "answer": "(a) 9.9 cm",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q166",
        "prompt": "(a) Solve tan(θ) = 2 for 0° ≤ θ ≤ 360° (b) How many solutions?",
        "answer": "(a) 63.4°, 243.4° (b) 2",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q167",
        "prompt": "(a) Ship sails from port at bearing 040°, then turns to bearing 120°. (b) Angle turned?",
        "answer": "(b) 80° (120° - 40°)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q168",
        "prompt": "(a) Prove sin²(x) + cos²(x) = 1 (b) Verify for x = 30°",
        "answer": "(b) (1/2)² + (√3/2)² = 1 ✓",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q169",
        "prompt": "(a) From point 50 m away, angle of elevation to cliff top is 35°. Height? (b) How?",
        "answer": "(a) 35 m (b) tan(35°) = h/50",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q170",
        "prompt": "(a) In right triangle, angle A = 28°, hypotenuse = 15. Find opposite side (b) Method?",
        "answer": "(a) 7.05 (b) sin(28°) = opp/15",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-trigonometric-functions-set-3",
    "title": "Trigonometric Functions — Set 3",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Trigonometric Functions",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q171",
        "prompt": "(a) Solve 2sin(x) = 1 for 0° ≤ x ≤ 360° (b) Solutions?",
        "answer": "(a) 30°, 150° (b) 2 solutions",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q172",
        "prompt": "(a) Bearings: N 40° E means bearing ? (b) What's the difference from N 40° W?",
        "answer": "(a) 040° (b) 80° difference",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q173",
        "prompt": "(a) In triangle with sides 4, 5, 6. Find largest angle using cosine rule",
        "answer": "(a) 82.8°",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q174",
        "prompt": "(a) Angle of depression from 100 m high building to object 30 m away. Angle?",
        "answer": "(a) tan⁻¹(100/30) = 73.3°",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q175",
        "prompt": "(a) Solve cos(x) - sin(x) = 0 for 0° ≤ x ≤ 360° (b) When are they equal?",
        "answer": "(a) 45°, 225° (b) Where tan(x) = 1",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q176",
        "prompt": "(a) In right triangle, if sin(θ) = 3/5, find cos(θ) and tan(θ)",
        "answer": "(a) cos = 4/5, tan = 3/4",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q177",
        "prompt": "(a) Sine rule: solve a/sin(A) = 10/sin(50°) if a = 8 (b) Find A",
        "answer": "(b) 36.5° or 143.5°",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q178",
        "prompt": "(a) Area of triangle using Heron's formula with sides 5, 6, 7 (b) Compare with sin formula",
        "answer": "(a) 14.7 cm²",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q179",
        "prompt": "(a) In right triangle with hypotenuse 20, angle 28°. Find both other sides",
        "answer": "(a) 10, 17.7 (approximately)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q180",
        "prompt": "(a) Prove tan(x) = sin(x)/cos(x) (b) Use to simplify sin(x)/tan(x)",
        "answer": "(b) cos(x)",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-trigonometric-functions-set-4",
    "title": "Trigonometric Functions — Set 4",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Trigonometric Functions",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q181",
        "prompt": "(a) Angle between two lines with gradients m₁ and m₂? Formula?",
        "answer": "(a) tan⁻¹|m₁-m₂)/(1+m₁m₂)|",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-statistics-probability-set-1",
    "title": "Statistics & Probability — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Statistics & Probability",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q201",
        "prompt": "Dataset: 3, 5, 7, 5, 9, 5. (a) Find mean (b) Median (c) Mode",
        "answer": "(a) 5.67 (b) 5 (c) 5",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q202",
        "prompt": "(a) Frequency table shows ages 10, 20, 30 with freq 5, 8, 7. Mean age?",
        "answer": "(a) 21.43",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q203",
        "prompt": "(a) Standard deviation formula (b) For data 2, 4, 6, find σ",
        "answer": "(a) √[Σ(x-mean)²/n] (b) 1.63",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q204",
        "prompt": "(a) In die roll, P(even) = ? (b) P(even or prime)?",
        "answer": "(a) 1/2 (b) 2/3",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q205",
        "prompt": "(a) Two coins: P(at least one heads)? (b) Tree diagram or list",
        "answer": "(a) 3/4 (b) HH, HT, TH, TT",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q206",
        "prompt": "(a) Conditional probability: given it's red, P(card) from deck? (b) Formula?",
        "answer": "(a) 13/26 = 1/2 (b) P(A∩B)/P(B)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q207",
        "prompt": "(a) Normal distribution: mean 100, σ = 15. P(X > 115)? (b) Z-score?",
        "answer": "(a) 15.87% (b) Z = 1",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q208",
        "prompt": "(a) Cumulative frequency table: 30 students, median in which class? (b) Find median",
        "answer": "(b) From cumulative frequencies",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q209",
        "prompt": "(a) Binomial: n = 5, p = 0.6. Find P(X = 3) (b) Formula used?",
        "answer": "(a) 0.346 (b) C(5,3)×0.6³×0.4²",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q210",
        "prompt": "(a) Correlation coefficient r = -0.85. Strength? (b) Direction?",
        "answer": "(a) Strong (b) Negative",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-statistics-probability-set-2",
    "title": "Statistics & Probability — Set 2",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Statistics & Probability",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q211",
        "prompt": "(a) Sample of 100 from population 10,000. Sample mean 50. Likely population mean?",
        "answer": "(a) ≈ 50",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q212",
        "prompt": "(a) Chi-squared test: expected freq 25, observed 30. Contribution? (b) Formula?",
        "answer": "(a) 1 (b) (O-E)²/E",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q213",
        "prompt": "(a) For independent events A and B, P(A∩B) = ? (b) If P(A) = 0.4, P(B) = 0.3, find P(A∩B)",
        "answer": "(a) P(A)×P(B) (b) 0.12",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q214",
        "prompt": "(a) Mutually exclusive: P(A∪B) = ? (b) If P(A) = 0.2, P(B) = 0.3, find P(A∪B)",
        "answer": "(a) P(A) + P(B) (b) 0.5",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q215",
        "prompt": "(a) Box plot: median, Q1, Q3, min, max. Which is which? (b) Sketch for 1,3,4,8,9",
        "answer": "(b) Box from 3 to 8, line at 4",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q216",
        "prompt": "(a) Outlier rule: 1.5×IQR below Q1 or above Q3 (b) For Q1=20, Q3=40, find outlier boundaries",
        "answer": "(b) Below -10 or above 70",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q217",
        "prompt": "(a) Stem and leaf: arrange 23, 25, 32, 37, 52. (b) What's the median?",
        "answer": "(a) 2|3 5, 3|2 7, 5|2 (b) 32",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q218",
        "prompt": "(a) Two-way table: boys/girls, pass/fail. (b) Find P(boy|pass)",
        "answer": "(b) Boys passed / total passed",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q219",
        "prompt": "(a) Probability of at least one success = ? (b) If P(success once) = 0.7, P(at least one in 2)?",
        "answer": "(a) 1 - P(no success) (b) 0.91",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q220",
        "prompt": "(a) Venn diagram: A and B. If P(A) = 0.4, P(B) = 0.3, P(A∩B) = 0.1, find P(A∪B)",
        "answer": "(a) 0.6",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-circles-geometry-set-1",
    "title": "Circles & Geometry — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Circles & Geometry",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q251",
        "prompt": "(a) Circle with radius 6. Find circumference (b) Area",
        "answer": "(a) 12π (b) 36π",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q252",
        "prompt": "(a) Sector: radius 5, angle 72°. Arc length? (b) Area?",
        "answer": "(a) 2π (b) 5π",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q253",
        "prompt": "(a) Tangent to circle at point P perpendicular to ? (b) If radius OP, angle between tangent and OP?",
        "answer": "(a) radius (b) 90°",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q254",
        "prompt": "(a) Two tangents from external point: equal or not? (b) Why?",
        "answer": "(a) Equal (b) Symmetry/congruent triangles)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q255",
        "prompt": "(a) Chord in circle radius 10, distance 6 from centre. Length? (b) Method?",
        "answer": "(a) 16 (b) Pythagoras in right triangle)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q256",
        "prompt": "(a) Angle in semicircle = ? (b) Angle at centre vs circumference for same arc?",
        "answer": "(a) 90° (b) 2:1 ratio",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q257",
        "prompt": "(a) Cyclic quadrilateral ABCD. If angle A = 70°, angle C = ?",
        "answer": "(a) 110° (opposite angles sum to 180°)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q258",
        "prompt": "(a) Alternate segment theorem: angle between tangent and chord = ? (b) What angle?",
        "answer": "(a) Inscribed angle in alternate segment",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q259",
        "prompt": "(a) Circle equation centre (3, -2), radius 5 (b) Point (6, 2) on circle?",
        "answer": "(a) (x-3)² + (y+2)² = 25 (b) Yes",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q260",
        "prompt": "(a) Area of annulus (ring): outer radius 8, inner 5 (b) Difference of what?",
        "answer": "(a) 39π (b) Two circles)",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-circles-geometry-set-2",
    "title": "Circles & Geometry — Set 2",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Circles & Geometry",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q261",
        "prompt": "(a) Inscribed angle theorem: angle subtended at centre = ? times circumference angle",
        "answer": "(a) 2",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q262",
        "prompt": "(a) Triangle ABC inscribed in circle, AB = 10 cm, angle C = 30°. Diameter?",
        "answer": "(a) 20 cm (sine rule variant)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q263",
        "prompt": "(a) Power of a point theorem: PA × PB = ? (b) When does it apply?",
        "answer": "(a) PC × PD (b) Two chords/secants from point)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q264",
        "prompt": "(a) Arc length formula in radians: s = ? (b) If s = 4, r = 2, find θ",
        "answer": "(b) θ = 2 radians",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q265",
        "prompt": "(a) Polygon interior angle sum for n sides (b) For pentagon?",
        "answer": "(a) (n-2)×180° (b) 540°",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q266",
        "prompt": "(a) Regular hexagon interior angle (b) Exterior angle?",
        "answer": "(a) 120° (b) 60°",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q267",
        "prompt": "(a) Tangent-secant from external point: length squared = ? (b) Formula?",
        "answer": "(a) (whole secant) × (external part)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q268",
        "prompt": "(a) Perpendicular from centre to chord: bisects it? (b) Why?",
        "answer": "(a) Yes (b) Symmetry)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q269",
        "prompt": "(a) Two circles same centre (concentric). Find area between if r₁=3, r₂=5 (b) Is it an annulus?",
        "answer": "(a) 16π (b) Yes",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q270",
        "prompt": "(a) Line y = 2x + 1 and circle x² + y² = 5. Intersections? (b) How many?",
        "answer": "(a) Solve simultaneously (b) 2",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-circles-geometry-set-3",
    "title": "Circles & Geometry — Set 3",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Circles & Geometry",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q271",
        "prompt": "(a) Sine rule for diameter: a/sin(A) = ? (b) What is a?",
        "answer": "(a) 2R (diameter) (b) Side opposite angle A)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q272",
        "prompt": "(a) Angle APB where P on circle, AB diameter (b) Special angle?",
        "answer": "(a) 90° (b) Right angle in semicircle)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q273",
        "prompt": "(a) Circumradius of triangle (b) Formula R = ?",
        "answer": "(b) a/(2sin(A)) or abc/(4K)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q274",
        "prompt": "(a) Segments of circle: major and minor add to ? (b) Why?",
        "answer": "(a) Whole circle (b) Definition)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q275",
        "prompt": "(a) Tangent from (5, 0) to circle x² + y² = 9. Length?",
        "answer": "(a) 4",
        "difficulty": "Medium",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-sequences-series-set-1",
    "title": "Sequences & Series — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Sequences & Series",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q301",
        "prompt": "(a) Arithmetic: 2, 5, 8, 11, ... nth term? (b) 20th term?",
        "answer": "(a) 3n-1 (b) 59",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q302",
        "prompt": "(a) Geometric: 2, 6, 18, ... ratio (b) Sum of first 5 terms?",
        "answer": "(a) 3 (b) 242",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q303",
        "prompt": "(a) Sum of first n natural numbers formula (b) Sum 1 to 100?",
        "answer": "(a) n(n+1)/2 (b) 5050",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q304",
        "prompt": "(a) Sum to infinity geometric series a=1, r=0.5 (b) Converges if...?",
        "answer": "(a) 2 (b) |r| < 1",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q305",
        "prompt": "(a) Arithmetic series sum formula (b) Sum first 50 terms: a=3, d=2?",
        "answer": "(a) n/2(2a+(n-1)d) (b) 2550",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q306",
        "prompt": "(a) Geometric: 3, 6, 12, ... (b) 7th term? (c) Sum first 7?",
        "answer": "(b) 192 (c) 381",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q307",
        "prompt": "(a) Recurrence relation: uₙ₊₁ = 2uₙ + 1, u₁ = 3. Find u₃",
        "answer": "(a) u₂=7, u₃=15",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q308",
        "prompt": "(a) Difference method: 1, 4, 9, 16, ... type of sequence? (b) Formula?",
        "answer": "(a) Quadratic (b) n²",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q309",
        "prompt": "(a) Sum of squares: 1² + 2² + ... + n² = ?",
        "answer": "(a) n(n+1)(2n+1)/6",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q310",
        "prompt": "(a) Fibonacci: each term = sum of previous two. Sequence? (b) Ratio of consecutive?",
        "answer": "(a) 1,1,2,3,5,8... (b) approaches φ ≈ 1.618",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-sequences-series-set-2",
    "title": "Sequences & Series — Set 2",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Sequences & Series",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q311",
        "prompt": "(a) Arithmetic with 10th term 28, 15th term 53. Common diff? (b) First term?",
        "answer": "(a) d=5 (b) a=-17",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q312",
        "prompt": "(a) Geometric: 3rd term 12, 5th term 48. Ratio? (b) 1st term?",
        "answer": "(a) r=2 (b) a=3",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q313",
        "prompt": "(a) Sum of arithmetic: first 20 terms = 500, a = 5. Find d",
        "answer": "(a) d = 4.5",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q314",
        "prompt": "(a) Converging geometric: first term 50, sum to infinity 100. Ratio?",
        "answer": "(a) r = 0.5",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q315",
        "prompt": "(a) Sigma notation: Σ(2r+1) from r=1 to n = ?",
        "answer": "(a) n² + 2n or n(n+2)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q316",
        "prompt": "(a) Second differences constant: what type sequence? (b) Example?",
        "answer": "(a) Quadratic (b) n², 2n² + 3, etc)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q317",
        "prompt": "(a) Binomial expansion: (x+1)⁴ = ?",
        "answer": "(a) x⁴ + 4x³ + 6x² + 4x + 1",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q318",
        "prompt": "(a) Pascal's triangle: row 6 = ?",
        "answer": "(a) 1, 6, 15, 20, 15, 6, 1",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q319",
        "prompt": "(a) For arithmetic, if a=2, n=15, Sₙ=465, find d",
        "answer": "(a) d=4",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q320",
        "prompt": "(a) Decreasing geometric: a=100, r=-0.1. Sum to infinity?",
        "answer": "(a) 100/1.1 ≈ 90.9",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-algebra-set-1",
    "title": "Algebra — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q1",
        "prompt": "(a) Simplify 3(2x-1) + 2x (b) Solve = 21",
        "answer": "8x-3, x=3",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q3",
        "prompt": "Question 3",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q5",
        "prompt": "Question 5",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q6",
        "prompt": "Question 6",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q10",
        "prompt": "Question 10",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q12",
        "prompt": "Question 12",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q19",
        "prompt": "Question 19",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q21",
        "prompt": "Question 21",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q22",
        "prompt": "Question 22",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q26",
        "prompt": "Question 26",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-algebra-set-2",
    "title": "Algebra — Set 2",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q32",
        "prompt": "Question 32",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q34",
        "prompt": "Question 34",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q35",
        "prompt": "Question 35",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q37",
        "prompt": "Question 37",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q40",
        "prompt": "Question 40",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q42",
        "prompt": "Question 42",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q43",
        "prompt": "Question 43",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q44",
        "prompt": "Question 44",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q46",
        "prompt": "Question 46",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q48",
        "prompt": "Question 48",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-algebra-set-3",
    "title": "Algebra — Set 3",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q53",
        "prompt": "Question 53",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q58",
        "prompt": "Question 58",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q64",
        "prompt": "Question 64",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q91",
        "prompt": "Question 91",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q104",
        "prompt": "Question 104",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q112",
        "prompt": "Question 112",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q113",
        "prompt": "Question 113",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q117",
        "prompt": "Question 117",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q126",
        "prompt": "Question 126",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q128",
        "prompt": "Question 128",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-algebra-set-4",
    "title": "Algebra — Set 4",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q131",
        "prompt": "Question 131",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q133",
        "prompt": "Question 133",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q134",
        "prompt": "Question 134",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q135",
        "prompt": "Question 135",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q136",
        "prompt": "Question 136",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q139",
        "prompt": "Question 139",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q140",
        "prompt": "Question 140",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q142",
        "prompt": "Question 142",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q143",
        "prompt": "Question 143",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q154",
        "prompt": "Question 154",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-algebra-set-5",
    "title": "Algebra — Set 5",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q155",
        "prompt": "Question 155",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q158",
        "prompt": "Question 158",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q162",
        "prompt": "Question 162",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q163",
        "prompt": "Question 163",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q164",
        "prompt": "Question 164",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q167",
        "prompt": "Question 167",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q174",
        "prompt": "Question 174",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q177",
        "prompt": "Question 177",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q184",
        "prompt": "Question 184",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q190",
        "prompt": "Question 190",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-algebra-set-6",
    "title": "Algebra — Set 6",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q399",
        "prompt": "(a) Factor 2x + 8 (b) What is common factor?",
        "answer": "2(x+4), factor is 2",
        "difficulty": "Easy",
        "year": null
      },
      {
        "id": "q400",
        "prompt": "(a) Expand 2(3x-5) - 3(x+2) (b) Simplify",
        "answer": "3x-16",
        "difficulty": "Medium",
        "year": null
      },
      {
        "id": "q401",
        "prompt": "A field is (2x+3) m by (x+2) m. (a) Perimeter? (b) If perimeter = 34 m, find x",
        "answer": "(a) 6x+10 (b) x=4",
        "difficulty": "Hard",
        "year": null
      },
      {
        "id": "q431",
        "prompt": "Solve 3(2x-1) = 2(x+5) + 4",
        "answer": "x = 4.5",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q441",
        "prompt": "(a) Solve 3(2x-1) = 2(x+5) + 4 (b) Check your answer",
        "answer": "x = 4.5 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q451",
        "prompt": "Solve 3(2x-1) = 2(x+5) + 4",
        "answer": "x = 4.5",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q461",
        "prompt": "Solve 3(2x-1) = 2(x+5) + 4",
        "answer": "x = 4.5",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q471",
        "prompt": "(a) Solve 3(2x-1) = 2(x+5) + 4 (b) Check your answer",
        "answer": "x = 4.5 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q481",
        "prompt": "Solve 3(2x-1) = 2(x+5) + 4",
        "answer": "x = 4.5",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q491",
        "prompt": "Solve 3(2x-1) = 2(x+5) + 4",
        "answer": "x = 4.5",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-geometry-set-1",
    "title": "Geometry — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Geometry",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q2",
        "prompt": "Polygon with 9 sides: (a) Sum interior angles (b) Each interior angle if regular",
        "answer": "1260°, 140°",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q7",
        "prompt": "Question 7",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q8",
        "prompt": "Question 8",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q16",
        "prompt": "Question 16",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q18",
        "prompt": "Question 18",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q31",
        "prompt": "Question 31",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q36",
        "prompt": "Question 36",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q41",
        "prompt": "Question 41",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q51",
        "prompt": "Question 51",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q52",
        "prompt": "Question 52",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-geometry-set-2",
    "title": "Geometry — Set 2",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Geometry",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q55",
        "prompt": "Question 55",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q60",
        "prompt": "Question 60",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q61",
        "prompt": "Question 61",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q72",
        "prompt": "Question 72",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q73",
        "prompt": "Question 73",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q74",
        "prompt": "Question 74",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q79",
        "prompt": "Question 79",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q82",
        "prompt": "Question 82",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q89",
        "prompt": "Question 89",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q94",
        "prompt": "Question 94",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-geometry-set-3",
    "title": "Geometry — Set 3",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Geometry",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q95",
        "prompt": "Question 95",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q102",
        "prompt": "Question 102",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q105",
        "prompt": "Question 105",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q111",
        "prompt": "Question 111",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q115",
        "prompt": "Question 115",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q119",
        "prompt": "Question 119",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q120",
        "prompt": "Question 120",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q123",
        "prompt": "Question 123",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q130",
        "prompt": "Question 130",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q146",
        "prompt": "Question 146",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-geometry-set-4",
    "title": "Geometry — Set 4",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Geometry",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q150",
        "prompt": "Question 150",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q151",
        "prompt": "Question 151",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q152",
        "prompt": "Question 152",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q153",
        "prompt": "Question 153",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q156",
        "prompt": "Question 156",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q161",
        "prompt": "Question 161",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q165",
        "prompt": "Question 165",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q168",
        "prompt": "Question 168",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q173",
        "prompt": "Question 173",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q178",
        "prompt": "Question 178",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-geometry-set-5",
    "title": "Geometry — Set 5",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Geometry",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q180",
        "prompt": "Question 180",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q181",
        "prompt": "Question 181",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q186",
        "prompt": "Question 186",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q188",
        "prompt": "Question 188",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q193",
        "prompt": "Question 193",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q405",
        "prompt": "(a) Circumference of circle radius 5 (b) Give answer in terms of π",
        "answer": "10π cm",
        "difficulty": "Easy",
        "year": null
      },
      {
        "id": "q406",
        "prompt": "(a) Sector angle 45°, radius 6. Arc length? (b) Area of sector?",
        "answer": "Arc: 1.5π; Area: 4.5π",
        "difficulty": "Medium",
        "year": null
      },
      {
        "id": "q407",
        "prompt": "Chord in circle radius 12, distance 5 from centre. (a) Half-chord length? (b) Full chord?",
        "answer": "(a) √119 ≈ 10.9 (b) 21.8 cm",
        "difficulty": "Hard",
        "year": null
      },
      {
        "id": "q432",
        "prompt": "(a) Cyclic quad angle sum (b) Check your answer",
        "answer": "360° ✓",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q442",
        "prompt": "Cyclic quad angle sum",
        "answer": "360°",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-geometry-set-6",
    "title": "Geometry — Set 6",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Geometry",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q452",
        "prompt": "Cyclic quad angle sum",
        "answer": "360°",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q462",
        "prompt": "(a) Cyclic quad angle sum (b) Check your answer",
        "answer": "360° ✓",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q472",
        "prompt": "Cyclic quad angle sum",
        "answer": "360°",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q482",
        "prompt": "Cyclic quad angle sum",
        "answer": "360°",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q492",
        "prompt": "(a) Cyclic quad angle sum (b) Check your answer",
        "answer": "360° ✓",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-trigonometry-set-1",
    "title": "Trigonometry — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Trigonometry",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q4",
        "prompt": "Question 4",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q11",
        "prompt": "Question 11",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q13",
        "prompt": "Question 13",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q23",
        "prompt": "Question 23",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q27",
        "prompt": "Question 27",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q28",
        "prompt": "Question 28",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q33",
        "prompt": "Question 33",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q39",
        "prompt": "Question 39",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q45",
        "prompt": "Question 45",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q47",
        "prompt": "Question 47",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-trigonometry-set-2",
    "title": "Trigonometry — Set 2",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Trigonometry",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q49",
        "prompt": "Question 49",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q50",
        "prompt": "Question 50",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q54",
        "prompt": "Question 54",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q62",
        "prompt": "Question 62",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q63",
        "prompt": "Question 63",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q66",
        "prompt": "Question 66",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q67",
        "prompt": "Question 67",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q68",
        "prompt": "Question 68",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q69",
        "prompt": "Question 69",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q70",
        "prompt": "Question 70",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-trigonometry-set-3",
    "title": "Trigonometry — Set 3",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Trigonometry",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q83",
        "prompt": "Question 83",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q86",
        "prompt": "Question 86",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q87",
        "prompt": "Question 87",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q88",
        "prompt": "Question 88",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q97",
        "prompt": "Question 97",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q101",
        "prompt": "Question 101",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q106",
        "prompt": "Question 106",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q107",
        "prompt": "Question 107",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q109",
        "prompt": "Question 109",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q110",
        "prompt": "Question 110",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-trigonometry-set-4",
    "title": "Trigonometry — Set 4",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Trigonometry",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q116",
        "prompt": "Question 116",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q121",
        "prompt": "Question 121",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q122",
        "prompt": "Question 122",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q125",
        "prompt": "Question 125",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q127",
        "prompt": "Question 127",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q137",
        "prompt": "Question 137",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q138",
        "prompt": "Question 138",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q148",
        "prompt": "Question 148",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q149",
        "prompt": "Question 149",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q157",
        "prompt": "Question 157",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-trigonometry-set-5",
    "title": "Trigonometry — Set 5",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Trigonometry",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q166",
        "prompt": "Question 166",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q170",
        "prompt": "Question 170",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q171",
        "prompt": "Question 171",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q172",
        "prompt": "Question 172",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q175",
        "prompt": "Question 175",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q179",
        "prompt": "Question 179",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q185",
        "prompt": "Question 185",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q189",
        "prompt": "Question 189",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q192",
        "prompt": "Question 192",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q402",
        "prompt": "(a) sin(30°) = ? (b) cos(60°) = ?",
        "answer": "1/2, 1/2",
        "difficulty": "Easy",
        "year": null
      }
    ]
  },
  {
    "slug": "igcse-trigonometry-set-6",
    "title": "Trigonometry — Set 6",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Trigonometry",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q403",
        "prompt": "(a) Solve sin(x) = 0.6 for 0° ≤ x ≤ 360° (b) How many solutions?",
        "answer": "36.87°, 143.13°; 2 solutions",
        "difficulty": "Medium",
        "year": null
      },
      {
        "id": "q404",
        "prompt": "Triangle ABC: a=10, b=8, A=50°. (a) Find angle B (b) Then find c",
        "answer": "(a) 36.4° (b) 7.08 cm",
        "difficulty": "Hard",
        "year": null
      },
      {
        "id": "q429",
        "prompt": "(a) sin(45°) = ? (b) Check your answer",
        "answer": "√2/2 ✓",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q439",
        "prompt": "sin(45°) = ?",
        "answer": "√2/2",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q449",
        "prompt": "sin(45°) = ?",
        "answer": "√2/2",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q459",
        "prompt": "(a) sin(45°) = ? (b) Check your answer",
        "answer": "√2/2 ✓",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q469",
        "prompt": "sin(45°) = ?",
        "answer": "√2/2",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q479",
        "prompt": "sin(45°) = ?",
        "answer": "√2/2",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q489",
        "prompt": "(a) sin(45°) = ? (b) Check your answer",
        "answer": "√2/2 ✓",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q499",
        "prompt": "sin(45°) = ?",
        "answer": "√2/2",
        "difficulty": "Medium",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-statistics-set-1",
    "title": "Statistics — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Statistics",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q9",
        "prompt": "Question 9",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q14",
        "prompt": "Question 14",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q15",
        "prompt": "Question 15",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q17",
        "prompt": "Question 17",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q20",
        "prompt": "Question 20",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q24",
        "prompt": "Question 24",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q25",
        "prompt": "Question 25",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q29",
        "prompt": "Question 29",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q30",
        "prompt": "Question 30",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q38",
        "prompt": "Question 38",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-statistics-set-2",
    "title": "Statistics — Set 2",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Statistics",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q56",
        "prompt": "Question 56",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q57",
        "prompt": "Question 57",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q59",
        "prompt": "Question 59",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q65",
        "prompt": "Question 65",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q71",
        "prompt": "Question 71",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q75",
        "prompt": "Question 75",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q76",
        "prompt": "Question 76",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q77",
        "prompt": "Question 77",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q78",
        "prompt": "Question 78",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q80",
        "prompt": "Question 80",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-statistics-set-3",
    "title": "Statistics — Set 3",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Statistics",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q81",
        "prompt": "Question 81",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q84",
        "prompt": "Question 84",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q85",
        "prompt": "Question 85",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q90",
        "prompt": "Question 90",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q92",
        "prompt": "Question 92",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q93",
        "prompt": "Question 93",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q96",
        "prompt": "Question 96",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q98",
        "prompt": "Question 98",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q99",
        "prompt": "Question 99",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q100",
        "prompt": "Question 100",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-statistics-set-4",
    "title": "Statistics — Set 4",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Statistics",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q103",
        "prompt": "Question 103",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q108",
        "prompt": "Question 108",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q114",
        "prompt": "Question 114",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q118",
        "prompt": "Question 118",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q124",
        "prompt": "Question 124",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q129",
        "prompt": "Question 129",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q132",
        "prompt": "Question 132",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q141",
        "prompt": "Question 141",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q144",
        "prompt": "Question 144",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q145",
        "prompt": "Question 145",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-statistics-set-5",
    "title": "Statistics — Set 5",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Statistics",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q147",
        "prompt": "Question 147",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q159",
        "prompt": "Question 159",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q160",
        "prompt": "Question 160",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q169",
        "prompt": "Question 169",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q176",
        "prompt": "Question 176",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q182",
        "prompt": "Question 182",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q183",
        "prompt": "Question 183",
        "answer": "Answer {i}",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q187",
        "prompt": "Question 187",
        "answer": "Answer {i}",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q191",
        "prompt": "Question 191",
        "answer": "Answer {i}",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q408",
        "prompt": "(a) Mean of 5, 10, 15, 20? (b) Median?",
        "answer": "Mean: 12.5; Median: 12.5",
        "difficulty": "Easy",
        "year": null
      }
    ]
  },
  {
    "slug": "igcse-statistics-set-6",
    "title": "Statistics — Set 6",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Statistics",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q409",
        "prompt": "(a) Standard deviation of 2, 4, 6, 8, 10 (b) Formula?",
        "answer": "σ = 2.83",
        "difficulty": "Medium",
        "year": null
      },
      {
        "id": "q410",
        "prompt": "(a) Binomial: P(X=2) if n=5, p=0.4 (b) Formula used?",
        "answer": "0.3456; C(5,2)p²(1-p)³",
        "difficulty": "Hard",
        "year": null
      },
      {
        "id": "q433",
        "prompt": "Mode of 1,2,2,3,3,3,4",
        "answer": "3",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q443",
        "prompt": "Mode of 1,2,2,3,3,3,4",
        "answer": "3",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q453",
        "prompt": "(a) Mode of 1,2,2,3,3,3,4 (b) Check your answer",
        "answer": "3 ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q463",
        "prompt": "Mode of 1,2,2,3,3,3,4",
        "answer": "3",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q473",
        "prompt": "Mode of 1,2,2,3,3,3,4",
        "answer": "3",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q483",
        "prompt": "(a) Mode of 1,2,2,3,3,3,4 (b) Check your answer",
        "answer": "3 ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q493",
        "prompt": "Mode of 1,2,2,3,3,3,4",
        "answer": "3",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-indices-surds-set-1",
    "title": "Indices & Surds — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Indices & Surds",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q396",
        "prompt": "(a) Simplify 2⁵ × 2³ (b) What is 2⁸?",
        "answer": "2⁸ = 256",
        "difficulty": "Easy",
        "year": null
      },
      {
        "id": "q397",
        "prompt": "(a) Rationalize 3/√5 (b) Simplify fully",
        "answer": "(a) 3√5/5",
        "difficulty": "Medium",
        "year": null
      },
      {
        "id": "q398",
        "prompt": "(a) Solve 2^x = 32 (b) Check answer",
        "answer": "x = 5",
        "difficulty": "Hard",
        "year": null
      }
    ]
  },
  {
    "slug": "igcse-sequences-set-1",
    "title": "Sequences — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Sequences",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q411",
        "prompt": "(a) Arithmetic: 3, 7, 11, ... nth term? (b) 10th term?",
        "answer": "4n-1; 39",
        "difficulty": "Easy",
        "year": null
      },
      {
        "id": "q412",
        "prompt": "(a) Geometric: 2, 6, 18, ... sum of first 4? (b) Ratio?",
        "answer": "Sum: 80; Ratio: 3",
        "difficulty": "Medium",
        "year": null
      },
      {
        "id": "q413",
        "prompt": "(a) Sum to infinity: a=5, r=0.2 (b) Converges if...?",
        "answer": "6.25; |r|<1",
        "difficulty": "Hard",
        "year": null
      },
      {
        "id": "q434",
        "prompt": "Arithmetic: a=2, d=3, 5th term?",
        "answer": "14",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q444",
        "prompt": "(a) Arithmetic: a=2, d=3, 5th term? (b) Check your answer",
        "answer": "14 ✓",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q454",
        "prompt": "Arithmetic: a=2, d=3, 5th term?",
        "answer": "14",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q464",
        "prompt": "Arithmetic: a=2, d=3, 5th term?",
        "answer": "14",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q474",
        "prompt": "(a) Arithmetic: a=2, d=3, 5th term? (b) Check your answer",
        "answer": "14 ✓",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q484",
        "prompt": "Arithmetic: a=2, d=3, 5th term?",
        "answer": "14",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q494",
        "prompt": "Arithmetic: a=2, d=3, 5th term?",
        "answer": "14",
        "difficulty": "Medium",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-functions-set-1",
    "title": "Functions — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Functions",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q414",
        "prompt": "(a) If f(x) = 3x - 2, find f(4) (b) Find f⁻¹(x)",
        "answer": "f(4)=10; f⁻¹(x)=(x+2)/3",
        "difficulty": "Easy",
        "year": null
      },
      {
        "id": "q415",
        "prompt": "(a) y = x² translated right 3. New equation? (b) Vertex?",
        "answer": "y = (x-3)²; (3,0)",
        "difficulty": "Medium",
        "year": null
      },
      {
        "id": "q416",
        "prompt": "(a) For f(x) = 2x+1, g(x) = x², find g(f(x)) (b) Simplify",
        "answer": "4x²+4x+1",
        "difficulty": "Hard",
        "year": null
      },
      {
        "id": "q430",
        "prompt": "If f(x) = x², find f(-3)",
        "answer": "9",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q440",
        "prompt": "If f(x) = x², find f(-3)",
        "answer": "9",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q450",
        "prompt": "(a) If f(x) = x², find f(-3) (b) Check your answer",
        "answer": "9 ✓",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q460",
        "prompt": "If f(x) = x², find f(-3)",
        "answer": "9",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q470",
        "prompt": "If f(x) = x², find f(-3)",
        "answer": "9",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q480",
        "prompt": "(a) If f(x) = x², find f(-3) (b) Check your answer",
        "answer": "9 ✓",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q490",
        "prompt": "If f(x) = x², find f(-3)",
        "answer": "9",
        "difficulty": "Medium",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-functions-set-2",
    "title": "Functions — Set 2",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Functions",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q500",
        "prompt": "If f(x) = x², find f(-3)",
        "answer": "9",
        "difficulty": "Medium",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-percentages-set-1",
    "title": "Percentages — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Percentages",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q417",
        "prompt": "(a) 25% of 80 (b) Express as fraction",
        "answer": "20; 1/4",
        "difficulty": "Easy",
        "year": null
      },
      {
        "id": "q418",
        "prompt": "(a) Increase 120 by 15% (b) Final amount?",
        "answer": "18 increase; 138",
        "difficulty": "Medium",
        "year": null
      },
      {
        "id": "q419",
        "prompt": "(a) Original price £100, after 20% discount £80 (b) % decrease?",
        "answer": "20%",
        "difficulty": "Hard",
        "year": null
      }
    ]
  },
  {
    "slug": "igcse-ratios-set-1",
    "title": "Ratios — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Ratios",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q420",
        "prompt": "(a) Simplify 12:18 (b) Ratio form?",
        "answer": "2:3",
        "difficulty": "Easy",
        "year": null
      },
      {
        "id": "q421",
        "prompt": "(a) Ratio A:B:C = 2:3:5, total 60 (b) Find C",
        "answer": "30",
        "difficulty": "Medium",
        "year": null
      },
      {
        "id": "q422",
        "prompt": "(a) Recipe ratio butter:flour 1:4. For 200g flour, butter? (b) Total?",
        "answer": "50g butter; 250g total",
        "difficulty": "Hard",
        "year": null
      }
    ]
  },
  {
    "slug": "igcse-vectors-set-1",
    "title": "Vectors — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Vectors",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q423",
        "prompt": "(a) Add (2,3) + (1,4) (b) Result?",
        "answer": "(3,7)",
        "difficulty": "Easy",
        "year": null
      },
      {
        "id": "q424",
        "prompt": "(a) Magnitude of (5,12) (b) Unit vector?",
        "answer": "13; (5/13, 12/13)",
        "difficulty": "Medium",
        "year": null
      },
      {
        "id": "q425",
        "prompt": "(a) Vector AB where A(1,2) B(7,5) (b) Length AB?",
        "answer": "(6,3); √45 = 6.7",
        "difficulty": "Hard",
        "year": null
      },
      {
        "id": "q435",
        "prompt": "(a) Dot product (1,2)·(3,4) (b) Check your answer",
        "answer": "11 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q445",
        "prompt": "Dot product (1,2)·(3,4)",
        "answer": "11",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q455",
        "prompt": "Dot product (1,2)·(3,4)",
        "answer": "11",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q465",
        "prompt": "(a) Dot product (1,2)·(3,4) (b) Check your answer",
        "answer": "11 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q475",
        "prompt": "Dot product (1,2)·(3,4)",
        "answer": "11",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q485",
        "prompt": "Dot product (1,2)·(3,4)",
        "answer": "11",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q495",
        "prompt": "(a) Dot product (1,2)·(3,4) (b) Check your answer",
        "answer": "11 ✓",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-linear-equations-set-1",
    "title": "Linear Equations — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Linear Equations",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q426",
        "prompt": "(a) Solve 2x + 7 = 15 (b) Check your answer",
        "answer": "x = 4 ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q436",
        "prompt": "Solve 2x + 7 = 15",
        "answer": "x = 4",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q446",
        "prompt": "Solve 2x + 7 = 15",
        "answer": "x = 4",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q456",
        "prompt": "(a) Solve 2x + 7 = 15 (b) Check your answer",
        "answer": "x = 4 ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q466",
        "prompt": "Solve 2x + 7 = 15",
        "answer": "x = 4",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q476",
        "prompt": "Solve 2x + 7 = 15",
        "answer": "x = 4",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q486",
        "prompt": "(a) Solve 2x + 7 = 15 (b) Check your answer",
        "answer": "x = 4 ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q496",
        "prompt": "Solve 2x + 7 = 15",
        "answer": "x = 4",
        "difficulty": "Easy",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "igcse-quadratic-set-1",
    "title": "Quadratic — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Quadratic",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q427",
        "prompt": "Factorize x² + 5x + 6",
        "answer": "(x+2)(x+3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q437",
        "prompt": "Factorize x² + 5x + 6",
        "answer": "(x+2)(x+3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q447",
        "prompt": "(a) Factorize x² + 5x + 6 (b) Check your answer",
        "answer": "(x+2)(x+3) ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q457",
        "prompt": "Factorize x² + 5x + 6",
        "answer": "(x+2)(x+3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q467",
        "prompt": "Factorize x² + 5x + 6",
        "answer": "(x+2)(x+3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q477",
        "prompt": "(a) Factorize x² + 5x + 6 (b) Check your answer",
        "answer": "(x+2)(x+3) ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q487",
        "prompt": "Factorize x² + 5x + 6",
        "answer": "(x+2)(x+3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q497",
        "prompt": "Factorize x² + 5x + 6",
        "answer": "(x+2)(x+3)",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "igcse-circles-set-1",
    "title": "Circles — Set 1",
    "subject": "Mathematics",
    "level": "IGCSE",
    "topic": "Circles",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q428",
        "prompt": "Radius 4, circumference?",
        "answer": "8π",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q438",
        "prompt": "(a) Radius 4, circumference? (b) Check your answer",
        "answer": "8π ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q448",
        "prompt": "Radius 4, circumference?",
        "answer": "8π",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q458",
        "prompt": "Radius 4, circumference?",
        "answer": "8π",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q468",
        "prompt": "(a) Radius 4, circumference? (b) Check your answer",
        "answer": "8π ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q478",
        "prompt": "Radius 4, circumference?",
        "answer": "8π",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q488",
        "prompt": "Radius 4, circumference?",
        "answer": "8π",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q498",
        "prompt": "(a) Radius 4, circumference? (b) Check your answer",
        "answer": "8π ✓",
        "difficulty": "Easy",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-algebra-polynomials-set-1",
    "title": "Algebra & Polynomials — Set 1",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Algebra & Polynomials",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q1",
        "prompt": "(a) Prove that (x+1)³ + (x-1)³ = 2x³ + 6x (b) Hence solve 2x³ + 6x = 250",
        "answer": "x = 4",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q2",
        "prompt": "(a) Show that x³ - 3x² + 2x = x(x-1)(x-2) (b) Solve x³ - 3x² + 2x + 12 = 0",
        "answer": "x = 3, -1.236, 0.236 approx or exact form",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q3",
        "prompt": "(a) For polynomial P(x) = 2x³ - 5x² + ax + 6, if (x-2) is factor, find a (b) Factorize completely",
        "answer": "(a) a = 1 (b) (x-2)(2x²-x-3) = (x-2)(2x-3)(x+1)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q4",
        "prompt": "(a) Use synthetic division to divide x⁴ - 5x³ + 2x² + 12x - 8 by (x-1) (b) Quotient?",
        "answer": "Quotient: x³ - 4x² - 2x + 10, remainder 2",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q5",
        "prompt": "(a) Remainder theorem: P(x) = 3x³ + 2x² - 5x + 1. Find P(-1) (b) Verify (x+1) is/isn't factor",
        "answer": "(a) 5 (b) Not a factor",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q6",
        "prompt": "(a) Factor x⁴ - 13x² + 36 by substitution (b) Find all real roots",
        "answer": "(a) (x²-4)(x²-9) (b) x = ±2, ±3",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q7",
        "prompt": "(a) Partial fractions: (3x+7)/(x²+4x+3) (b) Express as sum of fractions",
        "answer": "(a)(b) 2/(x+1) + 1/(x+3)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q8",
        "prompt": "(a) Partial fractions: (5x²-2x+3)/(x³-1) (b) Decompose fully",
        "answer": "(a) Need to include (x-1), (x²+x+1) terms",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q9",
        "prompt": "(a) Show that x⁴ - 4x³ + 6x² - 4x + 1 = (x-1)⁴ (b) Verify by expansion",
        "answer": "✓ Binomial expansion",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q10",
        "prompt": "(a) If α and β are roots of x² - 3x + 1 = 0, find α + β and αβ (b) Form equation with roots α², β²",
        "answer": "(a) 3, 1 (b) x² - 7x + 1 = 0",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-algebra-polynomials-set-2",
    "title": "Algebra & Polynomials — Set 2",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Algebra & Polynomials",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q11",
        "prompt": "(a) Prove Σ(r(r+1)) from r=1 to n = n(n+1)(n+2)/3 (b) Verify for n=5",
        "answer": "(b) 5×6×7/3 = 70 ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q12",
        "prompt": "(a) Solve |2x-5| = 7 (b) How many solutions?",
        "answer": "(a) x = 6, x = -1 (b) 2",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q13",
        "prompt": "(a) Solve |x²-4| = 3 (b) How many real solutions?",
        "answer": "(a) x = ±√7, ±1 (b) 4",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q14",
        "prompt": "(a) Inequalities: 2|x-3| > 6 (b) Express in interval notation",
        "answer": "(a) x < 0 or x > 6 (b) (-∞,0)∪(6,∞)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q15",
        "prompt": "(a) For f(x) = (2x+1)/(x-3), find f⁻¹(x) (b) Verify f(f⁻¹(x)) = x",
        "answer": "(a) f⁻¹(x) = (3x+1)/(x-2)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q16",
        "prompt": "(a) Modulus-argument form: express 3-4i in form r(cosθ + i sinθ) (b) Find r and θ",
        "answer": "(a) 5(cos(-53.1°) + i sin(-53.1°)) or 5e^(-i0.927)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q17",
        "prompt": "(a) Complex numbers: find all solutions to z² = -2 + 2√3i (b) Express in Cartesian form",
        "answer": "(a) ±(√3 + i)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q18",
        "prompt": "(a) De Moivre: (1+i)⁸ = ? (b) Express in form a+bi",
        "answer": "(a) 16",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q19",
        "prompt": "(a) Surds: simplify (√5 + √2)/(√5 - √2) (b) Rationalize denominator",
        "answer": "(a) (7 + 2√10)/3",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q20",
        "prompt": "(a) Prove that √2 is irrational (b) Method used?",
        "answer": "(b) Proof by contradiction)",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-sequences-series-set-1",
    "title": "Sequences & Series — Set 1",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Sequences & Series",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q51",
        "prompt": "(a) Arithmetic series: first term 5, common difference 3, 20th term? (b) Sum of first 20 terms?",
        "answer": "(a) 62 (b) 670",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q52",
        "prompt": "(a) Geometric series: a = 2, r = 1/2. Sum to infinity? (b) Convergence condition?",
        "answer": "(a) 4 (b) |r| < 1",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q53",
        "prompt": "(a) Sum Σ(r²) from r=1 to n = n(n+1)(2n+1)/6. Verify for n=4",
        "answer": "(a) 30 = 4×5×9/6 ✓",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q54",
        "prompt": "(a) Binomial expansion: (2x - 1/x)⁵ general term (b) Coefficient of x²?",
        "answer": "(a) C(5,r)×(2x)^(5-r)×(-1/x)^r (b) -80",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q55",
        "prompt": "(a) For (1 + 2x)ⁿ, coefficient of x² is 60. Find n (b) Find 3rd term",
        "answer": "(a) n = 6 (b) 160x²",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q56",
        "prompt": "(a) Recurrence relation: uₙ₊₁ = 2uₙ - 3, u₁ = 5 (b) General formula?",
        "answer": "(a) uₙ = 2^(n-1) + 3",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q57",
        "prompt": "(a) Fibonacci: prove Fₙ₊₁Fₙ₋₁ - Fₙ² = (-1)ⁿ (b) Check for n = 5",
        "answer": "✓ Cassini's identity",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q58",
        "prompt": "(a) Partial sums: Sₙ = n(n+1)(n+2)/6. Find nth term uₙ (b) Formula?",
        "answer": "(a) uₙ = n(n+1)/2",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q59",
        "prompt": "(a) Telescoping series: Σ(1/(r(r+1))) from r=1 to n (b) Sum?",
        "answer": "(a) 1 - 1/(n+1) = n/(n+1)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q60",
        "prompt": "(a) Harmonic series: why does it diverge? (b) Proof?",
        "answer": "(b) By comparison to 1/2 + 1/4 + 1/4 + ... which = ∞",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-sequences-series-set-2",
    "title": "Sequences & Series — Set 2",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Sequences & Series",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q61",
        "prompt": "(a) Taylor series for eˣ = ? (b) Use to approximate e^0.1 to 4 d.p.",
        "answer": "(a) 1 + x + x²/2! + x³/3! + ... (b) 1.1052",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q62",
        "prompt": "(a) Maclaurin series for sin(x) (b) Find coefficient of x⁵",
        "answer": "(a) x - x³/3! + x⁵/5! - ... (b) -1/120",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q63",
        "prompt": "(a) Summing: 2 + 4 + 8 + ... + 2⁵⁰ (b) Formula for geometric series?",
        "answer": "(a) 2(2⁵⁰ - 1) (b) a(r^n - 1)/(r-1)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q64",
        "prompt": "(a) Inequality: prove 1 + 1/2 + 1/3 + ... + 1/n > ln(n+1) (b) Show for n=10",
        "answer": "(b) LHS ≈ 2.93, ln(11) ≈ 2.40",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q65",
        "prompt": "(a) Pascal's triangle: row n has how many terms? (b) Sum of row n?",
        "answer": "(a) n+1 (b) 2ⁿ",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q66",
        "prompt": "(a) Vandermonde's identity: C(m+n, r) = Σ C(m, k)C(n, r-k) (b) Verify for m=2, n=2, r=2",
        "answer": "✓ Identity holds",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-differentiation-set-1",
    "title": "Differentiation — Set 1",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Differentiation",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q101",
        "prompt": "(a) f(x) = (2x+3)/(x-1). Find f'(x) using quotient rule (b) f'(2)?",
        "answer": "(a) -5/(x-1)² (b) -5",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q102",
        "prompt": "(a) g(x) = √(3x² + 2x). Find dg/dx (b) Simplify",
        "answer": "(a) (6x+2)/(2√(3x²+2x)) = (3x+1)/√(3x²+2x)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q103",
        "prompt": "(a) y = eˣ sin(x). Find dy/dx using product rule (b) At x = π?",
        "answer": "(a) eˣ(sin x + cos x) (b) -eᵖ",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q104",
        "prompt": "(a) Chain rule: y = ln(2x² + 3). Find dy/dx (b) Simplify",
        "answer": "(a) 4x/(2x²+3)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q105",
        "prompt": "(a) Implicit differentiation: x² + y² = 25. Find dy/dx (b) At (3, 4)?",
        "answer": "(a) -x/y (b) -3/4",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q106",
        "prompt": "(a) Parametric: x = t³ + 1, y = t² - 2. Find dy/dx (b) At t = 2?",
        "answer": "(a) 2t/(3t²) (b) 2/12 = 1/6",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q107",
        "prompt": "(a) Related rates: cylinder radius r, height h = 2r. If dV/dt = 12 cm³/s, find dr/dt (b) When r = 5?",
        "answer": "(a) dr/dt = 12/(6πr²) (b) ≈ 0.076 cm/s",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q108",
        "prompt": "(a) Optimization: rectangle perimeter 40. Maximum area? (b) Dimensions?",
        "answer": "(a) 100 cm² (b) 10 × 10",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q109",
        "prompt": "(a) Inflection points: f(x) = x⁴ - 6x². Find second derivative (b) Inflection at?",
        "answer": "(a) f''(x) = 12x² - 12 (b) x = ±1",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q110",
        "prompt": "(a) Rolle's theorem: f(x) = x³ - 3x on [0, √3]. Verify conditions (b) Find c",
        "answer": "(b) c = 1",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-differentiation-set-2",
    "title": "Differentiation — Set 2",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Differentiation",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q111",
        "prompt": "(a) Mean value theorem: f(x) = x² on [1, 3]. Find c (b) Verify f'(c) = (f(3)-f(1))/(3-1)",
        "answer": "(b) c = 2, f'(2) = 4 ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q112",
        "prompt": "(a) ∫(3x² - 2x + 5)dx = ? (b) Find definite integral from 0 to 2",
        "answer": "(a) x³ - x² + 5x + C (b) 14",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q113",
        "prompt": "(a) Integration by parts: ∫x sin(x)dx (b) Evaluate from 0 to π",
        "answer": "(a) -x cos(x) + sin(x) + C (b) π",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q114",
        "prompt": "(a) Substitution: ∫₀^(π/2) cos²(x)dx. Use cos²(x) = (1+cos(2x))/2",
        "answer": "(a) π/4",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q115",
        "prompt": "(a) Partial fractions: ∫(3x+7)/(x²+4x+3)dx (b) Integrate",
        "answer": "(b) 2ln|x+1| + ln|x+3| + C",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q116",
        "prompt": "(a) Improper integral: ∫₁^∞ 1/x² dx (b) Converge?",
        "answer": "(a) 1 (b) Yes",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q117",
        "prompt": "(a) Numerical integration: trapezoid rule for ∫₀^1 eˣ dx with 4 intervals (b) Estimate?",
        "answer": "(b) ≈ 1.72",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q118",
        "prompt": "(a) Differential equation: dy/dx = 2xy. Solve (b) If y(0) = 1?",
        "answer": "(a) y = e^(x²) + C (b) y = e^(x²)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q119",
        "prompt": "(a) Separable ODE: (1+x²)dy/dx = xy. Solve",
        "answer": "(a) y = ke^(x²/2) or y = Ae^(x²/2)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q120",
        "prompt": "(a) Linear ODE: dy/dx + 2y = e⁻ˣ. Integrating factor? (b) Solve",
        "answer": "(a) e²ˣ (b) y = e⁻ˣ(-e⁻ˣ + C)",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-trigonometry-set-1",
    "title": "Trigonometry — Set 1",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Trigonometry",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q161",
        "prompt": "(a) Prove sin(A+B) = sin A cos B + cos A sin B (b) Use to find sin(75°)",
        "answer": "(b) (√6 + √2)/4",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q162",
        "prompt": "(a) Prove tan(2θ) = 2tan(θ)/(1-tan²(θ)) (b) Find tan(60°) using tan(30°)",
        "answer": "(b) √3",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q163",
        "prompt": "(a) Solve 2cos²(x) + cos(x) - 1 = 0 for 0 ≤ x < 2π (b) How many solutions?",
        "answer": "(a) x = 0, 2π/3, 4π/3 (b) 3",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q164",
        "prompt": "(a) Prove cos(3θ) = 4cos³(θ) - 3cos(θ) (b) Solve cos(3θ) = cos(θ)",
        "answer": "(a) Triple angle formula (b) θ = nπ/2",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q165",
        "prompt": "(a) Complex form: express sin(θ) using e^(iθ) (b) Simplify",
        "answer": "(a) (e^(iθ) - e^(-iθ))/(2i)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q166",
        "prompt": "(a) De Moivre's theorem: (cos(θ) + i sin(θ))ⁿ = ? (b) Use for cos(5θ)",
        "answer": "(a) cos(nθ) + i sin(nθ) (b) 16cos⁵(θ) - 20cos³(θ) + 5cos(θ)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q167",
        "prompt": "(a) Inverse trig: domain and range of arcsin(x) (b) Sketch",
        "answer": "(a) Domain [-1,1], Range [-π/2, π/2]",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q168",
        "prompt": "(a) Solve arctan(x) + arctan(1/x) = π/2 (b) For x > 0?",
        "answer": "(a) Always true for x > 0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q169",
        "prompt": "(a) Identities: prove 1 + tan²(x) = sec²(x) (b) Verify for x = π/4",
        "answer": "(b) 1 + 1 = 2 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q170",
        "prompt": "(a) Small angle approximations: sin(θ) ≈ θ, tan(θ) ≈ θ for small θ. Prove",
        "answer": "Using Taylor series sin(θ) = θ - θ³/3! + ...",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-trigonometry-set-2",
    "title": "Trigonometry — Set 2",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Trigonometry",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q171",
        "prompt": "(a) Harmonic form: express 3sin(x) + 4cos(x) as R sin(x + α) (b) Find R and α",
        "answer": "(a) 5sin(x + 53.1°)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q172",
        "prompt": "(a) Equation: 2sin(x) + 3cos(x) = 4. How many solutions in [0, 2π]?",
        "answer": "1 solution (amplitude check)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q173",
        "prompt": "(a) T-substitution: let t = tan(x/2). Express sin(x) in terms of t (b) Use to ∫sin(x)dx",
        "answer": "(a) sin(x) = 2t/(1+t²)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q174",
        "prompt": "(a) Spherical trig: in spherical triangle, solve sides/angles using spherical law of sines",
        "answer": "Advanced topic",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q175",
        "prompt": "(a) Prove cot(A) + tan(A) = cosec(A)sec(A) (b) Verify for A = π/3",
        "answer": "(b) LHS = RHS",
        "difficulty": "Medium",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-exponentials-logarithms-set-1",
    "title": "Exponentials & Logarithms — Set 1",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Exponentials & Logarithms",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q211",
        "prompt": "(a) Solve 2^(3x-1) = 8 (b) Check solution",
        "answer": "(a) x = 4/3",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q212",
        "prompt": "(a) Solve e^(2x) - 5e^x + 6 = 0 (b) How many real solutions?",
        "answer": "(a) x = ln(2), ln(3) (b) 2",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q213",
        "prompt": "(a) Logarithms: prove log_a(xy) = log_a(x) + log_a(y) (b) Use to simplify log(8) + log(5)",
        "answer": "(b) log(40)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q214",
        "prompt": "(a) Change of base: log_5(100) = ? (b) Express in terms of ln",
        "answer": "(a) 2ln(10)/ln(5)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q215",
        "prompt": "(a) Solve ln(x-1) + ln(x+2) = ln(6) (b) Check domain",
        "answer": "(a) x = 3 (domain x > 1)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q216",
        "prompt": "(a) Inequality: 2^x > 10. Solve (b) Express using logarithms",
        "answer": "(a) x > log_2(10) ≈ 3.32",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q217",
        "prompt": "(a) Exponential growth: A = P(1 + r/100)ⁿ. If P = 1000, r = 5%, A = 2000? (b) Time n?",
        "answer": "(a) n = log(2)/log(1.05) ≈ 14.2 years",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q218",
        "prompt": "(a) Half-life: N(t) = N₀(1/2)^(t/T). If T = 30 days, N₀ = 100, find N(60)",
        "answer": "(a) 25",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q219",
        "prompt": "(a) Natural logarithm: ∫1/x dx = ln|x| + C. Verify by differentiation",
        "answer": "d/dx[ln|x|] = 1/x ✓",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q220",
        "prompt": "(a) Prove e^x = Σ(x^n/n!) from n=0 to ∞ (b) Use to find e",
        "answer": "(b) Sum 1 + 1 + 1/2! + 1/3! + ... ≈ 2.718",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-exponentials-logarithms-set-2",
    "title": "Exponentials & Logarithms — Set 2",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Exponentials & Logarithms",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q221",
        "prompt": "(a) Logarithmic differentiation: y = x^x. Find dy/dx (b) At x = 1?",
        "answer": "(a) y' = x^x(ln x + 1) (b) 1",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q222",
        "prompt": "(a) Solve 3^(x²-2x) = 1/27 (b) How many solutions?",
        "answer": "(a) x = -1, 3 (b) 2",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q223",
        "prompt": "(a) Inverse function: if f(x) = e^(2x-1), find f⁻¹(x) (b) Check f(f⁻¹(x))",
        "answer": "(a) f⁻¹(x) = (ln x + 1)/2",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q224",
        "prompt": "(a) Solve (log x)² - 3log x + 2 = 0 (b) Find x",
        "answer": "(a) x = 10, 100",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q225",
        "prompt": "(a) Graphing: sketch y = ln|x| (b) Domain and range?",
        "answer": "(b) Domain x ≠ 0, Range all reals",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q226",
        "prompt": "(a) Modular arithmetic with exp: e^x ≡ 0 (mod something) - explain context",
        "answer": "Advanced application",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-numerical-methods-set-1",
    "title": "Numerical Methods — Set 1",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Numerical Methods",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q261",
        "prompt": "(a) Newton-Raphson: f(x) = x³ - 2. x₀ = 1, find x₁ (b) Formula?",
        "answer": "(a) x₁ = 1.333 (b) x_{n+1} = x_n - f(x_n)/f'(x_n)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q262",
        "prompt": "(a) Bisection method: f(x) = x³ - 5 on [1, 2]. First interval?",
        "answer": "(a) [1, 1.5] since f(1.5) > 0",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q263",
        "prompt": "(a) Iteration: x_{n+1} = √(3x_n + 1), x₀ = 1. x₁, x₂?",
        "answer": "(a) x₁ = 2, x₂ = √7 ≈ 2.646",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q264",
        "prompt": "(a) Fixed point: show that x = 1/2 + 1/x has solution (b) Find to 3 d.p.",
        "answer": "(a) Rearrange to g(x) = x (b) 1.366",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q265",
        "prompt": "(a) Error bounds: approximate √5 to 2 d.p. Give error bound",
        "answer": "(a) 2.24, error < 0.01",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q266",
        "prompt": "(a) Simpson's rule: ∫₀² x² dx with 4 intervals (b) Compare to exact",
        "answer": "(a) 8/3 (exact), Simpson: 8/3",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q267",
        "prompt": "(a) Trapezoidal rule: ∫₁² ln(x) dx with 4 strips (b) Estimate",
        "answer": "(a) ≈ 0.384",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q268",
        "prompt": "(a) Convergence: Newton-Raphson for f(x) = x² - 3. Order of convergence?",
        "answer": "(a) Quadratic (order 2)",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-matrices-vectors-set-1",
    "title": "Matrices & Vectors — Set 1",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Matrices & Vectors",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q301",
        "prompt": "(a) Matrices: A = [[1,2],[3,4]], B = [[2,0],[1,3]]. Find AB (b) Is AB = BA?",
        "answer": "(a) [[4,6],[10,12]] (b) No (non-commutative)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q302",
        "prompt": "(a) Determinant: find det(A) for A = [[2,3],[4,5]] (b) Is A invertible?",
        "answer": "(a) -2 (b) Yes",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q303",
        "prompt": "(a) Find A⁻¹ for A = [[1,2],[3,4]] (b) Verify AA⁻¹ = I",
        "answer": "(a) [[-2,1],[1.5,-0.5]]",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q304",
        "prompt": "(a) Solve using matrices: 2x + 3y = 8, 4x + 5y = 14 (b) Use matrix method",
        "answer": "(a) x = 1, y = 2",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q305",
        "prompt": "(a) Eigenvalues: find eigenvalues of [[2,1],[1,2]] (b) Eigenvalues?",
        "answer": "(a) λ = 3, 1",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q306",
        "prompt": "(a) Eigenvectors: for λ = 3 above, find eigenvector (b) Normalize",
        "answer": "(a) [1,1]ᵀ (b) [1/√2, 1/√2]ᵀ",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q307",
        "prompt": "(a) Diagonalization: express A = PDP⁻¹ for 2×2 matrix (b) Applications?",
        "answer": "(b) Computing Aⁿ, solving systems)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q308",
        "prompt": "(a) Vectors: a = (2,3,1), b = (1,-1,2). Find a · b (b) Angle between?",
        "answer": "(a) 1 (b) cos θ = 1/√504",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q309",
        "prompt": "(a) Cross product: a × b for a = (1,0,0), b = (0,1,0) (b) Magnitude?",
        "answer": "(a) (0,0,1) (b) 1",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q310",
        "prompt": "(a) Vector equation of line: through (1,2,3) with direction (2,1,-1) (b) Parametric form?",
        "answer": "(b) r = (1,2,3) + t(2,1,-1)",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-proof-logic-set-1",
    "title": "Proof & Logic — Set 1",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Proof & Logic",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q311",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q313",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q315",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q317",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q321",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q327",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q334",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q339",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q344",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q346",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-proof-logic-set-2",
    "title": "Proof & Logic — Set 2",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Proof & Logic",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q354",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q357",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q367",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q369",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q382",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q386",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q387",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q389",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q401",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q403",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Medium",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-proof-logic-set-3",
    "title": "Proof & Logic — Set 3",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Proof & Logic",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q415",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q427",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q431",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q433",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q439",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q440",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q448",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q449",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q458",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q460",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-proof-logic-set-4",
    "title": "Proof & Logic — Set 4",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Proof & Logic",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q463",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q467",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q470",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q472",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q475",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q479",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q487",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q488",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q498",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q500",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Medium",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-proof-logic-set-5",
    "title": "Proof & Logic — Set 5",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Proof & Logic",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q505",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q508",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q511",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q512",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q523",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q524",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q528",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q529",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q531",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q533",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-proof-logic-set-6",
    "title": "Proof & Logic — Set 6",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Proof & Logic",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q534",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q538",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q539",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q541",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q543",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q545",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q549",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q555",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q557",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q558",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-proof-logic-set-7",
    "title": "Proof & Logic — Set 7",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Proof & Logic",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q578",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q582",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q585",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q591",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q597",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q599",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q604",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q606",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q607",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q612",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-proof-logic-set-8",
    "title": "Proof & Logic — Set 8",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Proof & Logic",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q615",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q617",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q619",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q620",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q621",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q626",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q627",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q631",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q634",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q636",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-proof-logic-set-9",
    "title": "Proof & Logic — Set 9",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Proof & Logic",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q643",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q650",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q652",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q654",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q659",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q660",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q661",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q663",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q670",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q672",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-proof-logic-set-10",
    "title": "Proof & Logic — Set 10",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Proof & Logic",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q681",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q683",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q684",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q685",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q702",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q703",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q705",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-complex-numbers-set-1",
    "title": "Complex Numbers — Set 1",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Complex Numbers",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q312",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q319",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q320",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q322",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q323",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q326",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q340",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q341",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q342",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q347",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-complex-numbers-set-2",
    "title": "Complex Numbers — Set 2",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Complex Numbers",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q348",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q350",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q351",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q353",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q355",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q358",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q359",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q368",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q371",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q375",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-complex-numbers-set-3",
    "title": "Complex Numbers — Set 3",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Complex Numbers",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q378",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q379",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q381",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q383",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q388",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q396",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q398",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q400",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q406",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q407",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Easy",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-complex-numbers-set-4",
    "title": "Complex Numbers — Set 4",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Complex Numbers",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q409",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q410",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q412",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q413",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q414",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q417",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q418",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q430",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q442",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q445",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Medium",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-complex-numbers-set-5",
    "title": "Complex Numbers — Set 5",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Complex Numbers",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q446",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q447",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q452",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q454",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q456",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q461",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q465",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q469",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q476",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q477",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-complex-numbers-set-6",
    "title": "Complex Numbers — Set 6",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Complex Numbers",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q482",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q484",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q485",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q489",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q492",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q495",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q496",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q497",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q499",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q502",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-complex-numbers-set-7",
    "title": "Complex Numbers — Set 7",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Complex Numbers",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q514",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q520",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q530",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q532",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q536",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q542",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q546",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q552",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q560",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q563",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-complex-numbers-set-8",
    "title": "Complex Numbers — Set 8",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Complex Numbers",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q564",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q565",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q566",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q568",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q574",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q575",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q580",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q583",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q587",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q588",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-complex-numbers-set-9",
    "title": "Complex Numbers — Set 9",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Complex Numbers",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q593",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q608",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q609",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q611",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q613",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q630",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q635",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q641",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q644",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q647",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-complex-numbers-set-10",
    "title": "Complex Numbers — Set 10",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Complex Numbers",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q648",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q655",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q656",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q666",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q669",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q674",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q675",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q676",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q682",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q686",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Medium",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-complex-numbers-set-11",
    "title": "Complex Numbers — Set 11",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Complex Numbers",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q687",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q690",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q691",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q693",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q700",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q704",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-algebra-set-1",
    "title": "Algebra — Set 1",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q314",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q316",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q324",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q325",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q329",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q330",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q332",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q333",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q335",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q337",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Easy",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-algebra-set-2",
    "title": "Algebra — Set 2",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q343",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q345",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q360",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q361",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q362",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q364",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q365",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q366",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q374",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q376",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-algebra-set-3",
    "title": "Algebra — Set 3",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q377",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q391",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q392",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q393",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q394",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q399",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q402",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q404",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q405",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q419",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-algebra-set-4",
    "title": "Algebra — Set 4",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q420",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q421",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q422",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q423",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q425",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q426",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q434",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q435",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q436",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q437",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-algebra-set-5",
    "title": "Algebra — Set 5",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q450",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q455",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q466",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q474",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q480",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q483",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q486",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q491",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q494",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q503",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-algebra-set-6",
    "title": "Algebra — Set 6",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q504",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q506",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q510",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q522",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q527",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q540",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q551",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q554",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q559",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q561",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-algebra-set-7",
    "title": "Algebra — Set 7",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q569",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q570",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q572",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q573",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q576",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q577",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q586",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q592",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q594",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q601",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-algebra-set-8",
    "title": "Algebra — Set 8",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q610",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q616",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q629",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q638",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q640",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q645",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q651",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q657",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q662",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q671",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-algebra-set-9",
    "title": "Algebra — Set 9",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Algebra",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q678",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q680",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q688",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q689",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q692",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q698",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q701",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-calculus-set-1",
    "title": "Calculus — Set 1",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Calculus",
    "durationMin": 15,
    "premium": false,
    "questions": [
      {
        "id": "q318",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q328",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q331",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q336",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q338",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q349",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q352",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q356",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q363",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q370",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Medium",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-calculus-set-2",
    "title": "Calculus — Set 2",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Calculus",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q372",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q373",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q380",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q384",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q385",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q390",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q395",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q397",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q408",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q411",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-calculus-set-3",
    "title": "Calculus — Set 3",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Calculus",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q416",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q424",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q428",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q429",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q432",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q438",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q441",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q443",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q444",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q451",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Hard",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-calculus-set-4",
    "title": "Calculus — Set 4",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Calculus",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q453",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q457",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q459",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q462",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q464",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q468",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q471",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q473",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q478",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q481",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-calculus-set-5",
    "title": "Calculus — Set 5",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Calculus",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q490",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q493",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q501",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q507",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q509",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q513",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q515",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q516",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q517",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q518",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Medium",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-calculus-set-6",
    "title": "Calculus — Set 6",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Calculus",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q519",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q521",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q525",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q526",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q535",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q537",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q544",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q547",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q548",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q550",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-calculus-set-7",
    "title": "Calculus — Set 7",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Calculus",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q553",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q556",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q562",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q567",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q571",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q579",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q581",
        "prompt": "(a) Complex numbers: |3 + 4i| = ? (b) Argument?",
        "answer": "5, arctan(4/3)",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q584",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q589",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q590",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Medium",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-calculus-set-8",
    "title": "Calculus — Set 8",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Calculus",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q595",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q596",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q598",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q600",
        "prompt": "(a) Modulus: solve |x-2| > 3 (b) Interval notation?",
        "answer": "x < -1 or x > 5",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q602",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q603",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q605",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q614",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q618",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q622",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2023"
      }
    ]
  },
  {
    "slug": "a-level-calculus-set-9",
    "title": "Calculus — Set 9",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Calculus",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q623",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q624",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q625",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q628",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q632",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q633",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q637",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q639",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q642",
        "prompt": "(a) Set theory: |A ∪ B| = |A| + |B| - |A ∩ B| (b) If |A| = 5, |B| = 3, |A∩B| = 1?",
        "answer": "|A∪B| = 7",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q646",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-calculus-set-10",
    "title": "Calculus — Set 10",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Calculus",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q649",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q653",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q658",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q664",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q665",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q667",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q668",
        "prompt": "(a) Intermediate value theorem: if f continuous on [a,b], f(a)<0, f(b)>0... (b) Conclusion?",
        "answer": "∃c∈(a,b): f(c)=0",
        "difficulty": "Medium",
        "year": "2023"
      },
      {
        "id": "q673",
        "prompt": "(a) Proof by induction: prove 1² + 2² + ... + n² = n(n+1)(2n+1)/6 (b) Base case?",
        "answer": "Base: n=1, LHS=1, RHS=1 ✓",
        "difficulty": "Easy",
        "year": "2023"
      },
      {
        "id": "q677",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Hard",
        "year": "2024"
      },
      {
        "id": "q679",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Easy",
        "year": "2024"
      }
    ]
  },
  {
    "slug": "a-level-calculus-set-11",
    "title": "Calculus — Set 11",
    "subject": "Mathematics",
    "level": "A Level",
    "topic": "Calculus",
    "durationMin": 15,
    "premium": true,
    "questions": [
      {
        "id": "q694",
        "prompt": "(a) Boolean algebra: simplify A(A + B) (b) Result?",
        "answer": "A",
        "difficulty": "Hard",
        "year": "2023"
      },
      {
        "id": "q695",
        "prompt": "(a) Graph theory: Euler path exists if... (b) Condition?",
        "answer": "0 or 2 vertices of odd degree",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q696",
        "prompt": "(a) Limit: lim_{x→2} (x²-4)/(x-2) = ? (b) Method?",
        "answer": "4, by L'Hôpital or factoring",
        "difficulty": "Medium",
        "year": "2024"
      },
      {
        "id": "q697",
        "prompt": "(a) Continuity: is f(x) = 1/x continuous at x=0? (b) Why?",
        "answer": "No, undefined at x=0",
        "difficulty": "Easy",
        "year": "2024"
      },
      {
        "id": "q699",
        "prompt": "(a) Surds: rationalize (1+√2)/(1-√2) (b) Simplify",
        "answer": "-(3+2√2)",
        "difficulty": "Medium",
        "year": "2024"
      }
    ]
  }
] as EdexcelQuiz[];

export function getEdexcelQuizBySlug(slug: string) {
  return EDEXCEL_QUIZZES.find((q) => q.slug === slug);
}
