import express from 'express'
import path from 'path'
// import { handle } from './.output/server/index.mjs'

const app = express()

app.use(express.static('./.output/public'));
// app.use(handle)
app.listen(3000)

app.use((req, res) => {
    res.sendFile(path.resolve('./.output/public/index.html'));
});