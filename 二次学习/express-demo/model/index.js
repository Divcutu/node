import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/Dxx');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.on('open', function() {
//   console.log('db --- 连接成功')
// });
// db.on('close', function() {
//   console.log('db --- 连接关闭')
// });


const useSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

export const userModel = mongoose.model('user', useSchema)