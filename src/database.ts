import mongoose from 'mongoose';
const url = 'mongodb": "mongodb://evils:75315986245@localhost:27017/test-graphql-mongo?authSource=admin';
// 'mongodb://localhost:27017/test-graphql-mongo'
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err));
    