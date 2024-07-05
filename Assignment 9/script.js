// Function to fetch data using Fetch API
function fetchData() {
    fetch('https://dummyjson.com/posts/1')
        .then((res) => res.json())
        .then((data) => {
            displayData(data);
            console.log(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

// Function to fetch data using AJAX (XMLHttpRequest)
function ajaxData() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products/1');
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(request.responseText);
            displayData(data);
            console.log(data);
        }
    };
    request.send();
}

// Function to display fetched data
function displayData(data) {
    const displayDiv = document.getElementById('dataDisplay');
    displayDiv.innerHTML = `<h3>Title: ${data.title}</h3><p>Tags: ${data.tags}</p>`;
}
