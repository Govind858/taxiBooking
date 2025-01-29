const express =  require('express');
const router = require('./Auth/Router/userRouter');
const driverRouter =require('./Driver/Router/diverRouter')
const tripRouter = require('./Trip/Router/tripRouter')
const databbase = require('./config/dbConnection')
const app = express();
const port = 3001

async function db() {
    try {
        await dbConnection()
        console.log('databbase connected')
    } catch (error) {
        console.log(error)
    }
}

db()

app.use(express.json())



app.use('/user',router)
app.use('/driver',driverRouter)
app.use('/trip',tripRouter)



app.listen(port,() => {
    console.log(`server is running at http://localhost:${port}`)
})

