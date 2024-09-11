const summaryData = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "./assets/images/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "./assets/images/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "./assets/images/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "./assets/images/icon-visual.svg"
    }
];

const summaryItems = document.getElementById('summary-items');

summaryData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'summary-item';
    div.style.backgroundColor = getCategoryColor(item.category, true);
    div.style.color = getCategoryColor(item.category, false);

    div.innerHTML = `
        <img src="${item.icon}" alt="${item.category} icon">
        <span class="category">${item.category}</span>
        <span class="score">${item.score} <span class="total">/ 100</span></span>
    `;

    summaryItems.appendChild(div);
});

function getCategoryColor(category, darkMode = false) {
    const colors = {
        'Reaction': ['var(--light-red)'],
        'Memory': ['var(--orangey-yellow)'],
        'Verbal': ['var(--green-teal)'],
        'Visual': ['var(--cobalt-blue)']
    };

    return colors[category][darkMode ? 1 : 0];
}
