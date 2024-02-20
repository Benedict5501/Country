// sample data for each country
const data = [
    {name: 'Ghana', category: 'category A'},
    {name: 'Nigeria', category: 'category A'},
    {name: 'Cameroon', category: 'category A'},
    {name: 'Belgium', category: 'category A'},
    {name: 'Chad', category: 'category A'},
    {name: 'United Kingdom', category: 'category A'},
    {name: 'USA', category: 'category A'},
    {name: 'Canada', category: 'category A'},
    {name: 'Jamaica', category: 'category A'},
    {name: 'Japan', category: 'category A'},
    {name: 'Spain', category: 'category A'},
    {name: 'Germany', category: 'category A'},
    {name: 'France', category: 'category A'},
    {name: 'Brazil', category: 'category A'},
    {name: 'Argentina', category: 'category A'},
    {name: 'Colombia', category: 'category A'},
    {name: 'Portugal', category: 'category A'},
    {name: 'Mexico', category: 'category A'},
    {name: 'Norway', category: 'category A'},
    {name: 'Moocco', category: 'category A'},
    {name: 'Poland', category: 'category A'},
    {name: 'Finland', category: 'category A'},
    {name: 'Iceland', category: 'category A'},
    {name: 'Italy', category: 'category A'},
]


function renderResults(results) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        document.getElementById('noResultsMessage').style.display = 'block';
    } else {
        document.getElementById('noResultsMessage').style.display = 'none';
        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.textContent = item.name;
            resultsContainer.appendChild(resultItem);
        });
    }
}

// Function to perform filtering
function filterResults(query) {
    const filteredResults = data.filter(item => {
        // Perform case-insensitive search
        return item.name.toLowerCase().includes(query.toLowerCase());
    });
    renderResults(filteredResults);
}

// Event listener for search input
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    filterResults(this.value);
});

// Event listener for search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function () {
    filterResults(searchInput.value);
});

// Initial rendering
filterResults('');


function createResultsContainer(data) {
    const resultsContainer = document.getElementById('resultsContainer');
    data.forEach(country => {
        const divItem = document.createElement('div');
        divItem.textContent = country.name;
        resultsContainer.appendChild(divItem)
    })
}

createResultsContainer(data)
