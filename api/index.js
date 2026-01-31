import express from "express"
import cors from "cors"
import { GoogleGenAI } from "@google/genai"

const PORT = process.env.PORT || 3_000
const GEMINI_API_KEY = process.env.GEMINI_API_KEY

const app = express()

const ai = new GoogleGenAI( { apiKey: GEMINI_API_KEY } )

app.use( cors() )

app.get( "/", ( req, res ) => {

	res.send( { ok: true } )
} )

app.listen( PORT, () => console.log( `Server ready at: ${ PORT }`) )
