import {IResolvers} from 'graphql-tools';

import User from '../models/users'
const Query:IResolvers ={
    Query:{
        ping(){
            return 'Pong !!'
        },
        async users() {
           return await  User.find();
        },
        async user(_:void,{id}){
            return await User.findById(id)
        }
    }
}

export default Query;