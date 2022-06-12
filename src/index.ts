import express from 'express'
import formidable from "express-formidable"
import cors from "cors"
import fs from 'fs'
import mongoose from "mongoose"
import { fileRouter } from './routes/fileRouter'
import { userRouter } from './routes/userRouter'
import { PORT, SECRET, DB_URL, FILE_LIST_PATH, MERGED_FILE_DIR, CHUNK_DIR } from './config'
import path from 'path'
import { auth } from './middlewares/auth'

const app = express()
const port = PORT

// 2.Route
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(formidable())
app.use(express.json())

// app.use("/api/v1/user", userRouter)
// app.use("/api/v1/file", fileRouter)
app.get('*', (req, res) => {
  res.redirect('/index.html#/404')
})

// 3.Listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))