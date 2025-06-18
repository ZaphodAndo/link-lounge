import { generateBookmark } from "./functions/generateBookmark.js";

export const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Link Lounge</title>
            <link rel="manifest" href="/manifest.json">
        </head>
        <body>
            <h1>Link Lounge</h1>
            <main>
                <search>
                    <form id="search-form">
                        <label for="search">Search the site:</label>
                        <input type="search" id="search" />
                        <button id="search-button">Search</button>
                    </form>
                </search>
                <ul id="list">
                    ${generateBookmark()}
                </ul>
            </main>
            <footer>Made by Ethan 🦀</footer>
        </body>
        <script type="module">
            const list = document.getElementById("list");
    
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
        </script>
    </html>
`;
