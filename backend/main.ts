import express from "express"
import mongoose from "mongoose"
import routes from "./routes/routes"
import cors from "cors"

const port = 3100;

//link do bazy danych
const mongoString = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000";

//utworzenie bazy danych, łącząc się z sewerem lokalnym
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => console.log(error))
database.once('connected', () => console.log("Database Connected"))


const app = express()

app.use(express.json())
//certyfikaty
app.use(cors())

//sprawdzenie API czy dziala
app.get("/", (_req, res) => {
    res.send("lorem")
})

app.listen(port, () => console.log(`listening on: ${port}`))

//dodanie API przez Router expressa
//aby odwołać się do api należy podać /api/
app.use('/api', routes)