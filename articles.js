// Article Database
const articles = {
    1: {
        title: "Article Title 1",
        date: "January 15, 2026",
        author: "Abhilash Biswas",
        content: `
            <h2>Introduction</h2>
            <p>This is the first article. Replace this with your actual article content. You can write as much as you want here.</p>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

            <h2>Main Section</h2>
            <p>You can add multiple paragraphs, headings, lists, and more. This is just placeholder text that you should replace with your actual article content.</p>

            <h3>Subsection</h3>
            <p>Here's a subsection with some points:</p>
            <ul>
                <li>First important point about your topic</li>
                <li>Second key insight or finding</li>
                <li>Third observation or conclusion</li>
            </ul>

            <blockquote>
                "You can also add quotes or highlighted text like this. This makes your article more engaging and visually interesting."
            </blockquote>

            <h2>Conclusion</h2>
            <p>Wrap up your article with a conclusion that summarizes your main points and leaves the reader with something to think about.</p>

            <p>Remember to replace all of this placeholder text with your actual article content!</p>
        `
    },
    2: {
        title: "Article Title 2",
        date: "December 20, 2025",
        author: "Abhilash Biswas",
        content: `
            <h2>Getting Started</h2>
            <p>This is your second article. Write about a different topic here. This template gives you complete freedom to structure your content however you like.</p>

            <p>You can discuss your research, share insights from your studies, or write about topics that interest you in physics and astronomy.</p>

            <h2>Key Findings</h2>
            <p>Here you might want to share important discoveries or observations:</p>
            <ol>
                <li>First major finding or concept</li>
                <li>Second important discovery</li>
                <li>Third significant observation</li>
            </ol>

            <h3>Technical Details</h3>
            <p>If you need to include code or technical formulas, you can use the code formatting:</p>
            <pre><code>def example_function():
    # Your code here
    return "This is how code looks"</code></pre>

            <p>Or inline code like this: <code>variable_name = value</code></p>

            <h2>Future Work</h2>
            <p>Discuss what comes next or what questions remain to be explored. This keeps readers engaged and interested in your ongoing work.</p>
        `
    },
    3: {
        title: "Article Title 3",
        date: "November 10, 2025",
        author: "Abhilash Biswas",
        content: `
            <h2>Overview</h2>
            <p>Welcome to your third article. This is another opportunity to share your thoughts, research, or experiences.</p>

            <p>Think about what your readers would find most valuable and interesting. Use this space to educate, inform, or inspire.</p>

            <h2>Important Concepts</h2>
            <p>Break down complex ideas into digestible sections. Use headings and subheadings to organize your thoughts clearly.</p>

            <h3>Example Application</h3>
            <p>Provide real-world examples or applications of the concepts you're discussing. This helps readers understand and relate to your content.</p>

            <blockquote>
                "The important thing is not to stop questioning. Curiosity has its own reason for existing." - Albert Einstein
            </blockquote>

            <h2>Practical Implications</h2>
            <p>What does this mean for your field? How can others apply these insights?</p>
            <ul>
                <li>Practical application one</li>
                <li>Practical application two</li>
                <li>Practical application three</li>
            </ul>

            <h2>Final Thoughts</h2>
            <p>End with a strong conclusion that ties everything together and gives readers something to remember.</p>
        `
    }
};

// Function to load an article
function loadArticle(articleId) {
    const article = articles[articleId];
    const displayDiv = document.getElementById('article-display');
    
    if (!article) {
        displayDiv.innerHTML = '<p class="loading">Article not found.</p>';
        return;
    }

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Display the article
    displayDiv.innerHTML = `
        <h1>${article.title}</h1>
        <div class="article-meta">
            <span>📅 ${article.date}</span>
            <span>✍️ ${article.author}</span>
        </div>
        <div class="article-body">
            ${article.content}
        </div>
    `;

    // Update active state in navigation
    const navCards = document.querySelectorAll('.article-nav-card');
    navCards.forEach((card, index) => {
        if (index + 1 === articleId) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    // Update URL without reloading page
    const newUrl = `article.html?id=${articleId}`;
    window.history.pushState({ articleId }, '', newUrl);
}

// Load article based on URL parameter when page loads
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id')) || 1;
    loadArticle(articleId);
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.articleId) {
        loadArticle(event.state.articleId);
    }
});
