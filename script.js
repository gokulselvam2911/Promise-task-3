document.getElementById('random-button').addEventListener('click', async () => {
    const adviceContainer = document.getElementById('advice-container');
    adviceContainer.innerHTML = ''; // Clear previous advice

    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const advice = data.slip.advice;
        displayAdvice(advice);
    } catch (error) {
        adviceContainer.innerHTML = `<div class="alert alert-danger">Failed to fetch random advice</div>`;
    }
});

document.getElementById('search-button').addEventListener('click', async () => {
    const query = document.getElementById('search-input').value.trim();
    const adviceContainer = document.getElementById('advice-container');
    adviceContainer.innerHTML = ''; // Clear previous advice

    if (query) {
        try {
            const response = await fetch(`https://api.adviceslip.com/advice/search/${query}`);
            const data = await response.json();

            if (data.total_results > 0) {
                data.slips.forEach(slip => {
                    displayAdvice(slip.advice);
                });
            } else {
                adviceContainer.innerHTML = `<div class="alert alert-warning">No advice found for "${query}"</div>`;
            }
        } catch (error) {
            adviceContainer.innerHTML = `<div class="alert alert-danger">Failed to fetch advice for "${query}"</div>`;
        }
    } else {
        alert('Please enter a word to search.');
    }
});

function displayAdvice(advice) {
    const adviceContainer = document.getElementById('advice-container');
    const adviceHTML = `
        <div class="card advice-card">
            <div class="card-body">
                <p class="card-text">${advice}</p>
            </div>
        </div>
    `;
    adviceContainer.innerHTML += adviceHTML;
}
