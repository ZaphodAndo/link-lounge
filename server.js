import { createServer } from "node:http";
import { html } from "./src/index.js";

const PORT = 3000;

const server = createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    console.log(`${method} ${url}`);

    if (url === "/") {
        res.statusCode = 200;
        res.end(html);
    } else {
        res.statusCode = 404;
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>404 - Not Found</title>
            </head>
            <body>
                <h1>404 - Page Not Found</h1>
                <p>The page you're looking for doesn't exist.</p>
                <p><a href="/">← Back to Home</a></p>
            </body>
            </html>
        `);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

process.on('SIGINT', () => {
    console.log("\nShutting down server...");
    server.close(() => {
        console.log("Server stopped.");
        process.exit(0);
    });
});
