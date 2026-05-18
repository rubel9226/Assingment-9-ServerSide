const app = require("./app");
const connectDatabase = require("./config/db");
const { port } = require("./secret");



app.listen(port, '0.0.0.0', async ()=> {
    console.log(`server is running http://localhost:${port}`);
    await connectDatabase();
})

