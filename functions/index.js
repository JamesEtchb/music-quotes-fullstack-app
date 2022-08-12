import functions from 'firebase-functions'
import express from "express";
import cors from 'cors'
import { addNewQuote, getMusicQuotes } from "./src/functions.js";

const app = express()
app.use(express.json())
app.use(cors())


app.get('/quotes', getMusicQuotes)
app.post('/quotes', addNewQuote)

export const api = functions.https.onRequest(app)