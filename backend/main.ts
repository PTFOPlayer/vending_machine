import express from "express"
import mongoose from "mongoose"

const port = 3000;
const mongoString = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000";

//utworzenie bazy danych, łącząc się z sewerem lokalnym
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => console.log(error))
database.once('connected', () => console.log("Database Connected"))

const app = express()

app.get("/", (req: any,res: { send: (arg0: string) => void }) => {
    res.send("lorem")
})

app.listen(port, () => console.log(`listening on: ${port}`))