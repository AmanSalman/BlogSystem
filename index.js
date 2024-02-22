import express from 'express';
import { initApp } from './src/modules/app.router.js';
const PORT = process.env.PORT || 3000;
const app = express();

// app.use(express.json());

initApp(app,express);
app.listen(PORT, ()=>{
    console.log("Server is running on port 3000");
});