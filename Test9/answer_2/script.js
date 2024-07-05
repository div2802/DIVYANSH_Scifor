function getData() {
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

function displayData(data) {
    const displayDiv = document.getElementById('dataDisplay');
    displayDiv.innerHTML = `<h3>Title: ${data.title}</h3><p>Tags: ${data.tags}</p>`;
}