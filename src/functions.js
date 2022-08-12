import { dbconnect } from "./connect.js";

export function getMusicQuotes(req, res) {
    const db = dbconnect()
    db.collection('quotes').get()
    .then(collection => {
        const quotes = collection.docs.map(doc => doc.data())
        res.send(quotes)
    })
    .catch(err => res.status(500).send(err.message))
}

export function addNewQuote(req, res) {
    const db = dbconnect()
    const newQuotes = req.body
    db.collection('quotes').add(newQuotes)
    .then(doc => {
        res.status(200).send({
            success: true,
            id: doc.id
        })
    })
    .catch(err => res.status(500).send(err.message))
}
