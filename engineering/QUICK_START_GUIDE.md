# 🚀 Quick Start Guide

## Opening the Website
1. Download all the files
2. Open `index.html` in your web browser
3. That's it! The site works completely offline.

## File Structure - Super Simple!

```
📁 Your Website Folder/
│
├── 📄 index.html          ← Main file - OPEN THIS!
│
├── 📁 css/
│   └── styles.css         ← All the styling
│
├── 📁 js/
│   ├── main.js           ← Navigation
│   ├── flashcards.js     ← Flashcard data & logic
│   ├── simulations.js    ← Calculators & simulations
│   └── quiz.js           ← Quiz questions & scoring
│
└── 📁 pages/
    ├── home.html         ← Home page
    ├── syllabus.html     ← ALL Year 11 & 12 content
    ├── flashcards.html   ← Flashcard interface
    ├── simulations.html  ← Simulation interface
    ├── practice.html     ← Quiz interface
    └── notes.html        ← Summary sheets
```

## ✏️ How to Add Content

### Want to add more syllabus content?
➡️ Edit `pages/syllabus.html`

### Want to add flashcards?
➡️ Edit `js/flashcards.js` - add to the array like this:
```javascript
{q: "Your question?", a: "Your answer"}
```

### Want to add quiz questions?
➡️ Edit `js/quiz.js` - add like this:
```javascript
{
    question: "What is 2+2?",
    options: ["3", "4", "5", "6"],
    correct: 1  // Index 1 = "4"
}
```

### Want to add summary sheets?
➡️ Edit `pages/notes.html`

## 🎨 Using Special Boxes in Syllabus

Copy and paste these templates into `pages/syllabus.html`:

**Formula Box (Blue):**
```html
<div class="formula-box">
    <strong>Title:</strong><br>
    Your formula here
</div>
```

**Example Box (Green):**
```html
<div class="example-box">
    <strong>Example:</strong><br>
    Your example here
</div>
```

**Note Box (Yellow):**
```html
<div class="note-box">
    <strong>Important:</strong><br>
    Your note here
</div>
```

**Key Concept Box (Red):**
```html
<div class="key-concept">
    <strong>Remember:</strong><br>
    Critical concept here
</div>
```

**Analogy Box (Purple):**
```html
<div class="analogy">
    <strong>Think of it like:</strong><br>
    Your analogy here
</div>
```

## 📝 Adding New Sections to Syllabus

```html
<h3>Module Name</h3>
<h4>Section Name</h4>
<p>Your content here...</p>

<ul>
    <li>Point 1</li>
    <li>Point 2</li>
</ul>

<div class="formula-box">
    Formulas go here
</div>
```

## 🎯 Pro Tips

1. **Everything is in plain HTML/CSS/JavaScript** - easy to edit with any text editor
2. **No server needed** - works directly from your computer
3. **Each page is separate** - easy to find and edit specific content
4. **Flashcards and quiz questions are in arrays** - just copy the format and add more!
5. **Want to change colors?** Edit the `:root` section in `css/styles.css`

## 🆘 Troubleshooting

**Page not loading?**
- Make sure all folders (css, js, pages) are in the same place as index.html
- Check the browser console for errors (F12 key)

**Simulations not working?**
- Make sure you've loaded the simulations page first
- The calculators auto-initialize when the page loads

**Content not showing?**
- Check for unclosed HTML tags
- Make sure you're editing the right file
- Refresh the browser (Ctrl+F5 or Cmd+Shift+R)

## 📱 Mobile Friendly
The site automatically adjusts for phones and tablets - no extra work needed!

## 🖨️ Printing
Summary sheets are designed to be print-friendly. Just use your browser's print function!
