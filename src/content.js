import { generateBookmarks } from "./functions/generateBookmarks.js";

// This is not ideal, but it does the job 🤷‍♂️
export const content = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Link Lounge</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
            <style>
                :root {
                    --colour-primary: #1D3CD8;
                }
                
                body {
                    font-family: "Inter", sans-serif;
                    margin: 40px;
                }
                
                h1 {
                    margin-bottom: 20px;
                }
                
                form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                
                label {
                    font-weight: 500;
                }
                
                .search {
                    display: flex;
                    gap: 10px;
                }
                
                #search {
                    border: black 2px solid;
                    height: 34px;
                    min-width: 340px;
                    font-size: 16px;
                    outline-offset: 4px;
                    outline-color: var(--colour-primary);
                }
                
                #search-button {
                        background-color: var(--colour-primary);
                        border: transparent;
                        color: white;
                        font-family: "Inter",sans-serif;
                        font-size: 16px;
                        font-weight: 400;
                        padding: 0 20px;
                        outline-offset: 3px;
                        outline-color: var(--colour-primary);
                }
                
                ul {
                    padding: 0;
                    margin: 40px 0;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }
                
                li {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                
                h2 {
                    font-weight: 600;
                    margin: 0;
                }
                
                a {
                    color: var(--colour-primary);
                    max-width: fit-content;
                }
                
                p {
                    margin: 0;
                }
            </style>
        </head>
        <body>
            <h1>Link Lounge</h1>
            <main>
                <search>
                    <form id="search-form">
                        <label for="search">Search the site:</label>
                        <div class="search">                        
                            <input type="search" id="search" />
                            <button id="search-button">Search</button>
                        </div>
                    </form>
                </search>
                <ul id="list">
                    ${await generateBookmarks()}
                </ul>
            </main>
            <footer>Made by <a href="https://ethana.dev" target="_blank">Ethan</a> 🦀</footer>
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
                        link.style.display = "flex";
                    }
                }
            }
    
            document.getElementById("search-form").addEventListener("submit", search);
            document.getElementById("search-button").addEventListener("click", search);
        </script>
    </html>
`;
