document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetch-button').addEventListener('click', () => {
        const selectedDrink = document.getElementById('drink-type').value;
        fetchData(selectedDrink);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    fetchData('espresso');
});

function fetchData(drinkType) {
    fetch(`https://starbucks-japan.onrender.com/drinks?type=${drinkType}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function displayData(data) {
    const container = document.getElementById('data-container');
    data.forEach(item => {
        const element = document.createElement('div');
        element.innerHTML = `Item: ${item.name}`; 
        container.appendChild(element);
    });
}
