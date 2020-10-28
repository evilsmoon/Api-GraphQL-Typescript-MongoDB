import {Schema,model} from 'mongoose';


const usersModel = new Schema({

    name:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }

});

export default model("User",usersModel);