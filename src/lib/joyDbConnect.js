import { connect } from "mongoose"

export const JoyConnectDb = async()=>{
    try {
        await connect(process.env.MY_MONGO_URI)
        console.log('connected to joy mongodb')
    } catch (error) {
        console.log(error.message);
    }
}