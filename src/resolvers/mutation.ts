import { IResolvers } from 'graphql-tools';
import Users from '../models/users'
const Mutation: IResolvers = {
    Mutation: {
        async newUser(_: void, { user }) {
            const userData = {
                name: user.name,
                mail: user.mail,
                content: user.content
            }
            // console.log(userData)
            const newUserCreate = new Users(userData)
            // console.log(newUserCreate)
            return await newUserCreate.save();
        }
        , async deleteUser(_: void, { id }) {
            const delelteUserByID = await Users.findByIdAndDelete(id)
            return delelteUserByID;
        }
        , async updateUser(_: void, { user }) {
            const query = {
                _id :user.id
            }
            const userData = {
                // name: user.name,
                mail: user.mail,
                // content: user.content
            }
            const updateUserID = await Users.findOneAndUpdate(query,userData,{
                new:true,
                upsert:true
            });
            // console.log(updateUserID)            
            return updateUserID
        }
    }
}

export default Mutation;
// const newMessage = new Message({ title, content, author });
// return await newMessage.save();