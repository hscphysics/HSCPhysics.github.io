// Main JavaScript for page navigation and loading

async function loadPage(pageName) {
    const contentArea = document.getElementById('content-area');
    
    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Load the page content
    try {
        const response = await fetch(`https://hscphysics.github.io/engineering/pages/${pageName}.html`);
        const html = await response.text();
        contentArea.innerHTML = html;
        
        // Initialize page-specific functionality
        if (pageName === 'flashcards') {
            initFlashcards();
        } else if (pageName === 'simulations') {
            initSimulations();
        } else if (pageName === 'practice') {
            initQuiz();
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    } catch (error) {
        console.error('Error loading page:', error);
        contentArea.innerHTML = '<div class="card"><h2>Error loading page</h2><p>Please try again.</p></div>';
    }
}

// Load home page on initial load
document.addEventListener('DOMContentLoaded', () => {
    loadPage('home');
});
