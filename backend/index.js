const http = require("http");
const app = require("./app");
const mongoose = require('mongoose')

const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;


async function start() {
  try {
    await mongoose.connect('mongodb+srv://DBUSER:DBUSER@cluster0.poo1l.mongodb.net/myFirstDatabase')
    server.listen(port, () => {               // server listening 
    console.log(`Server running on port ${port}`);
    });
  } catch(e) {
    console(e)                               // вывод ошибок в консоль
  }
}

start()