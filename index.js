const response = await fetch("./data.json");
const data = await response.json();
const list = document.getElementById("list");

for (let item of data) {
    const node = document.createElement("li");
    node.innerHTML = `
        <h2>${item.title}</h2>
        <a href="${item.url}" target="_blank">${item.url}</a>
        <p>${item.note}</p>
    `;
    list.appendChild(node);
}

function search(event) {
    event.preventDefault();
    const searchTerm = document.getElementById("search").value;
    const links = list.querySelectorAll("li");

    for (let link of links) {
        const html = link.getHTML().toLowerCase();
        if (!html.includes(searchTerm)) {
            link.style.display = "none";
        } else {
            link.style.display = "list-item";
        }
    }
}

document.getElementById("search-form").addEventListener("submit", search);
document.getElementById("search-button").addEventListener("click", search);
