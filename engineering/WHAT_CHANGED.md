# 📋 What Changed - Modular Structure Breakdown

## Before (Single File)
- ❌ Everything in one massive HTML file (15,000+ lines)
- ❌ Hard to find specific content
- ❌ Difficult to add new flashcards/questions
- ❌ CSS, JavaScript, and HTML all mixed together

## After (Modular Structure)
- ✅ Clean separation of concerns
- ✅ Easy to find and edit each section
- ✅ Simple to add content
- ✅ Professional organization

---

## 🗂️ What Went Where

### Main Structure Files

**index.html** (Main Entry Point)
- Header with title
- Navigation bar
- Empty content area (pages load here dynamically)
- Links to CSS and JavaScript

**css/styles.css** (All Styling)
- Color variables
- All visual styles
- Responsive design
- Box styles (formula-box, example-box, etc.)

---

### Page Content (pages/ folder)

**home.html**
- Welcome message
- Module cards (clickable boxes)
- Overview of features

**syllabus.html** (BIGGEST FILE - all syllabus content)
- Year 11 Preliminary Course
  - Module 1: Three Engineering Disciplines
  - Module 2: Engineering Mechanics (including ALL simple machines)
  - Module 3: Engineering Materials
  - Module 4: Engineering Communication
- Year 12 HSC Course
  - Module 1: Civil Structures
  - Module 2: Personal & Public Transport
  - Module 3: Aeronautical Engineering
  - Module 4: Telecommunications
  - Module 5: Biomedical Engineering
  - Module 6: Engineering Report

**flashcards.html**
- Just the flashcard display interface
- Front/back card divs
- Navigation buttons
- Counter display

**simulations.html**
- MA/VR/Efficiency calculator interface
- Beam bending simulation canvas
- Circuit simulator canvas
- Input controls for each

**practice.html**
- Quiz question container
- Score display
- Reset button

**notes.html**
- Year 11 formula sheet
- Year 12 formula sheet
- Simple machines quick reference
- Key concepts checklist

---

### JavaScript Logic (js/ folder)

**main.js** (Navigation)
- `loadPage()` function - loads HTML from pages/
- Updates active navigation button
- Initializes page-specific features
- DOM ready handler

**flashcards.js** (Flashcard Data & Logic)
- Array of 35 flashcards with questions and answers
- `flipCard()` - flips the card
- `nextCard()` - advances to next
- `previousCard()` - goes back
- `updateCard()` - updates display

**simulations.js** (Interactive Tools)
- `calcMachine()` - MA/VR/Efficiency calculations
- `updateBeam()` - beam bending visualization
- `updateCircuit()` - Ohm's law calculations
- Canvas drawing code for visualizations

**quiz.js** (Practice Test)
- Array of 15 quiz questions
- `selectAnswer()` - handles answer selection
- `showScore()` - displays results
- `resetQuiz()` - starts over
- Answer validation logic

---

## 🎯 How Pages Are Organized

### Home Page
```
Simple welcome card with 5 clickable module cards
→ Each card links to a different page
```

### Syllabus Page
```
2 Major Cards:
├── Year 11 Card
│   ├── Module 1 (3 disciplines)
│   ├── Module 2 (Mechanics + ALL 6 simple machines)
│   ├── Module 3 (Materials)
│   └── Module 4 (Communication)
│
└── Year 12 Card
    ├── Module 1 (Civil Structures)
    ├── Module 2 (Transport)
    ├── Module 3 (Aeronautical)
    ├── Module 4 (Telecommunications)
    ├── Module 5 (Biomedical)
    └── Module 6 (Engineering Report)
```

### Flashcards Page
```
Single card with:
├── Question side
├── Answer side (flips to show)
└── Navigation controls
```

### Simulations Page
```
3 Simulations:
├── Machine Calculator (inputs + results)
├── Beam Bending (canvas + sliders)
└── Circuit Simulator (canvas + sliders)
```

### Practice Page
```
15 Questions displayed:
├── Each with 4 options
├── Instant feedback (green/red)
└── Final score at end
```

### Notes Page
```
4 Summary Sheets:
├── Year 11 Formulas
├── Year 12 Formulas
├── Simple Machines Reference
└── Concepts Checklist
```

---

## ✏️ Where to Edit What

| Want to change... | Edit this file... |
|------------------|-------------------|
| Syllabus content | `pages/syllabus.html` |
| Add flashcards | `js/flashcards.js` |
| Add quiz questions | `js/quiz.js` |
| Summary sheets | `pages/notes.html` |
| Colors/styling | `css/styles.css` |
| Navigation | `index.html` |
| Add new page | Create in `pages/` + update `index.html` nav |

---

## 🔑 Key Benefits

1. **Easy Content Addition**
   - Want to add a flashcard? Just add one line to the array!
   - Want to add syllabus content? Edit one HTML file!

2. **Clear Organization**
   - Each feature in its own file
   - No more hunting through 15,000 lines

3. **Maintainable**
   - Fix a bug in flashcards? Only edit flashcards.js
   - Update styling? Only edit styles.css

4. **Scalable**
   - Easy to add new pages
   - Simple to add new features
   - Can duplicate and modify existing patterns

5. **Professional**
   - Industry-standard file structure
   - Separation of concerns
   - Clean, readable code

---

## 📊 File Size Comparison

| File | Lines | Purpose |
|------|-------|---------|
| Original | ~15,000 | Everything |
| index.html | ~30 | Main structure |
| styles.css | ~400 | All styles |
| syllabus.html | ~900 | All syllabus content |
| flashcards.js | ~80 | Flashcard data |
| quiz.js | ~90 | Quiz questions |
| Other pages | ~50 each | Interface templates |

**Total**: Same content, but now organized into 13 focused files instead of 1 monster file!
