import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema'

export function startServer() {

    const app = express();

    const server = new ApolloServer({
        schema,
        introspection: true

    });

    server.applyMiddleware({
        app,
        path: '/graphql'
    })

    return app;
}
