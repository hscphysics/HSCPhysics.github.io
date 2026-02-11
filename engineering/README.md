# Engineering Studies Revision Hub - Modular Structure

## 📁 Project Structure

```
/
├── index.html              # Main entry point
├── css/
│   └── styles.css          # All CSS styles
├── js/
│   ├── main.js            # Navigation and page loading
│   ├── flashcards.js      # Flashcard functionality
│   ├── simulations.js     # Simulation tools
│   └── quiz.js            # Practice quiz
└── pages/
    ├── home.html          # Home/welcome page
    ├── syllabus.html      # Complete syllabus (Year 11 & 12)
    ├── flashcards.html    # Flashcard interface
    ├── simulations.html   # Simulation tools interface
    ├── practice.html      # Quiz/practice test interface
    └── notes.html         # Summary sheets and formulas
```

## 🎯 How to Add Content

### Adding to Syllabus
Edit `pages/syllabus.html`
- Add new sections with proper heading tags (h3, h4)
- Use the following box styles:
  - `.formula-box` for formulas
  - `.example-box` for examples
  - `.note-box` for important notes
  - `.key-concept` for critical concepts
  - `.analogy` for analogies

### Adding Flashcards
Edit `js/flashcards.js`
- Add new cards to the `flashcards` array
- Format: `{q: "question", a: "answer"}`
- Use `<br>` for line breaks in answers

### Adding Quiz Questions
Edit `js/quiz.js`
- Add questions to the `quizQuestions` array
- Format: `{question: "text", options: ["A", "B", "C", "D"], correct: index}`
- `correct` is the index of the correct option (0-3)

### Adding Simulations
Edit `pages/simulations.html` for HTML structure
Edit `js/simulations.js` for functionality

### Adding Summary Sheets
Edit `pages/notes.html`
- Use `.summary-sheet` class for each sheet
- Use `.formula-box` inside for formulas

## 🎨 CSS Classes Reference

### Box Styles
- `.formula-box` - Blue box for formulas
- `.example-box` - Green box for examples
- `.note-box` - Yellow box for notes
- `.key-concept` - Red box for critical concepts
- `.analogy` - Purple box for analogies

### Badges
- `.badge.year11` - Blue badge for Year 11
- `.badge.year12` - Orange badge for Year 12

### Cards
- `.card` - Main content card
- `.module-card` - Clickable module cards (grid layout)
- `.summary-sheet` - Summary/formula sheets

### Interactive Elements
- `.btn` - Primary button (orange)
- `.btn-secondary` - Secondary button (blue)

## 🚀 Usage

1. Open `index.html` in a web browser
2. Navigation automatically loads pages from the `pages/` folder
3. JavaScript modules auto-initialize when their respective pages load

## ✏️ Easy Content Additions

**Example: Adding a new flashcard**
```javascript
// In js/flashcards.js, add to flashcards array:
{
    q: "What is the Capital of Australia?", 
    a: "Canberra"
}
```

**Example: Adding a new quiz question**
```javascript
// In js/quiz.js, add to quizQuestions array:
{
    question: "What color is the sky?",
    options: ["Red", "Blue", "Green", "Yellow"],
    correct: 1  // Index 1 = "Blue"
}
```

**Example: Adding a new syllabus section**
```html
<!-- In pages/syllabus.html -->
<h3>New Module Name</h3>
<h4>Section Name</h4>
<p>Content here...</p>

<div class="formula-box">
    <strong>Important Formula:</strong><br>
    E = mc²
</div>
```

## 🔧 Customization

- Colors: Edit CSS variables in `css/styles.css` (`:root` section)
- Add new pages: Create HTML in `pages/` and add nav button in `index.html`
- Modify layouts: Edit the grid system in `css/styles.css`

## 📝 Notes

- All pages load dynamically via JavaScript
- No server required - works with file:// protocol
- Mobile responsive design
- Print-friendly summary sheets
