// Article Database
const articles = {
    1: {
        title: "Can I Know?",
        date: "January 28, 2026",
        author: "Abhilash Biswas",
        content: `
            <h2>Introduction</h2>
            <p>This is your first article "Can I Know?". Replace this with your actual article content about analyzing the self.</p>
            
            <p>Write your thoughts and analysis here. You can write as much as you want.</p>

            <h2>Main Content</h2>
            <p>Add your main content here. This is just placeholder text that you should replace with your actual article content.</p>

            <h3>Key Points</h3>
            <p>Here are some points you might want to discuss:</p>
            <ul>
                <li>First important point about self-analysis</li>
                <li>Second key insight or observation</li>
                <li>Third thought or conclusion</li>
            </ul>

            <blockquote>
                "You can add meaningful quotes that relate to your topic here."
            </blockquote>

            <h2>Conclusion</h2>
            <p>Wrap up your article with a conclusion that summarizes your thoughts about knowing the self.</p>

            <p>Remember to replace all of this placeholder text with your actual article content!</p>
        `
    },
    2: {
        title: "Why and How to develop a Scientific Temperament",
        date: "February 01, 2026",
        author: "Abhilash Biswas",
        content: `
            <h2>Introduction</h2>
            <p>As a human of the 21st century and a student of science, developing a scientific temperament is crucial. This article explores why and how we can cultivate this important mindset.</p>

            <p>Replace this section with your actual thoughts on scientific temperament.</p>

            <h2>Why Scientific Temperament Matters</h2>
            <p>Discuss the importance of scientific thinking in modern society:</p>
            <ol>
                <li>First reason why it's important</li>
                <li>Second benefit of scientific thinking</li>
                <li>Third aspect of scientific temperament</li>
            </ol>

            <h2>How to Develop Scientific Temperament</h2>
            <p>Share practical steps and methods for developing scientific thinking.</p>

            <h3>Practical Approaches</h3>
            <ul>
                <li>Question everything with curiosity</li>
                <li>Rely on evidence and data</li>
                <li>Be open to changing your mind</li>
                <li>Think critically and logically</li>
            </ul>

            <blockquote>
                "Science is a way of thinking much more than it is a body of knowledge." - Carl Sagan
            </blockquote>

            <h2>Conclusion</h2>
            <p>Summarize your thoughts on building a scientific temperament and its importance for students and society.</p>
        `
    },
    3: {
        title: "Remember?",
        date: "February 01, 2026",
        author: "Abhilash Biswas",
        content: `
            <h2>Remember?</h2>
            
            <p style="font-style: italic; font-size: 1.2rem; line-height: 2;">
                [Replace this with your poem]<br><br>
                
                Write your poem here,<br>
                Line by line,<br>
                Express your thoughts,<br>
                In verse and rhyme.<br><br>
                
                Each stanza flows,<br>
                With meaning deep,<br>
                Memories cherished,<br>
                Forever to keep.<br><br>
                
                This is just a placeholder,<br>
                For your creative voice,<br>
                Replace these words,<br>
                With your poetic choice.
            </p>

            <p style="margin-top: 2rem; font-size: 0.95rem; color: #666;">
                <em>Note: Replace the placeholder text above with your actual poem "Remember?"</em>
            </p>
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
