import mongoose from 'mongoose'

(async () =>{
    await mongoose.connect('mongodb://localhost/mern-database')
})()
