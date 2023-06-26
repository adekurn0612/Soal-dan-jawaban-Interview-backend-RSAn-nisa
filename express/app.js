import  Express  from "express";
import "dotenv/config";
import router from "./router/routers.js";
// import cors from "cors"

const app = Express();

const port = process.env.PORT;

app.use(Express.json());

app.use(Express.urlencoded({ extended: true }));
// app.use(cors())
app.use(router);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});