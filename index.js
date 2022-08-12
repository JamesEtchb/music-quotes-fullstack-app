import express from "express";

import { addNewQuote, getMusicQuotes } from "./src/functions.js";

const app = express()
const PORT = 3030
app.use(express.json())

app.get('/quotes', getMusicQuotes)
app.post('/quotes', addNewQuote)

app.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`)
})
