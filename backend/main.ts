import express from "express"
const port = 3000

const app = express()

app.get("/", (req: any,res: { send: (arg0: string) => void }) => {
    res.send("lorem")
})

app.listen(port, () => console.log(`listening on: ${port}`))