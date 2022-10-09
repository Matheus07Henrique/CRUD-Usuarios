import http from "http";

// const server = http.createServer((req, res) => {
//     const users = [
//         {
//             name: 'Matheus',
//         },
//         {
//             name: 'Henrique',
//         }
//     ]

//     if (req.url === "/home") {
//         res.writeHead(200, { "Content-Type": "text.html" });
//         res.end("<h1>Home</h1>");
//     }

//     if (req.url === "/users") {
//         res.writeHead(200, { "Content-Type": "aplication/json" });
//         res.end(JSON.stringify(users));
//     }
// });

// server.listen(8080, () => {
//   console.log("Rodando...");
// });