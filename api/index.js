import express from "express"
import cors from "cors"

const PORT = process.env.PORT || 3_000
const app = express()

app.use( cors() )

app.get( "/", ( req, res ) => {

	res.send( { ok: true } )
} )

app.listen( PORT, () => console.log( `Server ready at: ${ PORT }`) )
