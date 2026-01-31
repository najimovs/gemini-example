import express from "express"
import cors from "cors"
import OpenAI from "openai"

const PORT = process.env.PORT || 3_000

const app = express()

const client = new OpenAI( {
	apiKey: process.env.GROQ_API_KEY,
	baseURL: "https://api.groq.com/openai/v1",
} )

console.log( client )

app.use( cors() )

app.get( "/", ( req, res ) => {

	res.send( { ok: true } )
} )

app.listen( PORT, () => console.log( `Server ready at: ${ PORT }`) )
