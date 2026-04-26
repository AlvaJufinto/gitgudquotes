document.addEventListener('DOMContentLoaded', () => {
  const quotesContainer = document.getElementById('quotes-container');
  const searchInput = document.getElementById('search');
  const emptyState = document.getElementById('empty-state');
  const errorState = document.getElementById('error-state');

  let quotesData = [];

  // Fetch quotes from the quotes.json file
  fetch('quotes.json')
    .then(response => {
      // Basic manual error handling for HTTP response
      if (!response.ok) {
        throw new Error(`Failed to load quotes.json: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => {
      quotesData = data;
      renderQuotes(data);
    })
    .catch(error => {
      console.error('Error fetching quotes:', error);
      quotesContainer.classList.add('hidden');
      errorState.classList.remove('hidden');
    });

  // Render the list of quotes to the DOM
  function renderQuotes(quotesToRender) {
    // Clear out current cards
    quotesContainer.innerHTML = '';
    
    if (quotesToRender.length === 0) {
      emptyState.classList.remove('hidden');
    } else {
      emptyState.classList.add('hidden');
      
      quotesToRender.forEach(item => {
        const card = document.createElement('div');
        card.className = 'quote-card';
        
        // Use an escapeHTML helper to prevent any XSS issues
        card.innerHTML = `
          <div class="card-header">
            <span class="class-badge">${escapeHTML(item.class)}</span>
          </div>
          <div class="card-body">
            <p class="quote-text">${escapeHTML(item.quote)}</p>
          </div>
          <div class="card-footer">
            <span class="student-name">— ${escapeHTML(item.name)}</span>
          </div>
        `;
        quotesContainer.appendChild(card);
      });
    }
  }

  // Filter based on search input
  function filterQuotes() {
    const searchTerm = searchInput.value.toLowerCase();

    const filtered = quotesData.filter(item => {
      const nameMatch = item.name.toLowerCase().includes(searchTerm);
      const classMatch = item.class.toLowerCase().includes(searchTerm);
      const quoteMatch = item.quote.toLowerCase().includes(searchTerm);
      
      return nameMatch || classMatch || quoteMatch;
    });

    renderQuotes(filtered);
  }

  // Event Listeners for Filters
  searchInput.addEventListener('input', filterQuotes);

  // Helper method: Prevents script injection by escaping raw input 
  function escapeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
});
