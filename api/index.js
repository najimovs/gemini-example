import express from "express"
import cors from "cors"
import OpenAI from "openai"

const PORT = process.env.PORT || 3_000

const app = express()

app.use( express.json() )

const client = new OpenAI( {
	apiKey: process.env.GROQ_API_KEY,
	baseURL: "https://api.groq.com/openai/v1",
} )

app.use( cors() )

app.get( "/", ( req, res ) => {

	res.send( { ok: true } )
} )

app.post( "/prompt", async ( req, res ) => {

	const { prompt } = req.body

	const response = await client.responses.create( {
		model: "openai/gpt-oss-20b",
		input: prompt,
	} )

	res.send( { answer: response.output_text } )
} )

app.listen( PORT, () => console.log( `Server ready at: ${ PORT }`) )
