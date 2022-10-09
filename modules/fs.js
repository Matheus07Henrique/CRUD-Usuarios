import fs from "fs";
import path, {dirname} from "path";
import { fileURLToPath } from 'url';

// const __dirname = dirname(fileURLToPath(import.meta.url));

// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log(`Erro: ${error}`);
//   }
//   console.log("Pasta criada com sucesso!");
// });

// fs.writeFile(path.join(__dirname, "/test", "test.txt"), 'Hello world', (error) => {
//   if (error) {
//     return console.log(`Erro: ${error}`);
//   }
//   console.log("Arquivo criado com sucesso!");

//   fs.appendFile(path.join(__dirname, "/test", "test.txt"), ' Hello world 2', (error) => {
//     if (error) {
//       return console.log(`Erro: ${error}`);
//     }
//     console.log("Arquivo modificado com sucesso!");
//   });
  
//   fs.readFile(path.join(__dirname, "/test", "test.txt"), 'utf8', (error, data) => {
//     if (error) {
//       return console.log(`Erro: ${error}`);
//     }
//     console.log(data);
//   });
// });