import { IResolvers } from 'graphql-tools';
import query from './query'
import mutation from './mutation' 
const resolver:IResolvers ={
    ...query,
    ...mutation
};

export default resolver;