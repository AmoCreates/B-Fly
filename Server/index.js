import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors';
import 'dotenv/config'
dotenv.config({path: './.env'});

// Initialize Express App
const app = express();
const port = process.env.PORT || 8000;

// Middleware Configuration
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST"]
}))

app.get('/', (req, res) => {
  res.send("Server is ready to serve")
})

app.get('/connect', (req, res) => {
  res.send("Backend Connected Successfully!!")
})

app.listen(port, () => {
  console.log(`server ready, https://localhost:${port}`);
});