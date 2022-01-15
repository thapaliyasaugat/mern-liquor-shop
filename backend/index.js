const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require('dotenv').config()

const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")



const PORT = process.env.PORT || 3000
const app = express()


//Connect Db
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB connected sucessfully")).catch((err) => console.log(err))
//middleware
app.use(express.json())
app.use(cors())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/product', productRoute)
app.use('/api/cart', cartRoute)
app.use('/api/order', orderRoute)

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})