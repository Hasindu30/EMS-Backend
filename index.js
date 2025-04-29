import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import connectToDatabase from './db/db.js'
import employeeRouter from './routes/employeeRoutes.js'
import departmentRouter from './routes/departmentRoute.js'
connectToDatabase()
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth',authRouter)

app.use('/api', employeeRouter); 
app.use('/api', departmentRouter); 


app.listen(process.env.PORT, () =>{
    console.log(`server is running on port ${process.env.PORT}`)
})
