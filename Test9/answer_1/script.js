function getData() {
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

function displayData(data) {
    const displayDiv = document.getElementById('dataDisplay');
    displayDiv.innerHTML = `<h3>Title: ${data.title}</h3><p>Tags: ${data.tags}</p>`;
}