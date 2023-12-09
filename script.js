document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetch-button').addEventListener('click', () => {
        const selectedDrink = document.getElementById('drink-type').value;
        fetchData(selectedDrink);
    });
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
            console.log('Fetched data:', data);
            displayData(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            displayError(error);
        });
}

function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; 
    data.forEach(item => {
        const element = document.createElement('div');
        element.innerHTML = `Item: ${item.name}`;
        container.appendChild(element);
    });
}

function displayError(error) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; 
    const errorElement = document.createElement('div');
    errorElement.style.color = 'red';
    errorElement.innerHTML = `Error: ${error.message}`;
    container.appendChild(errorElement);
}
