const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done)=>{
mongoose.connect('mongodb+srv://Brad123:P!ssw0rd123@cluster0-zhnnh.mongodb.net/users_test?retryWrites=true');

mongoose.connection
.once('open', () => {done();})
.on('error', (error)=> {
    console.warn('Warning', error);
});

});

beforeEach((done) =>{

    mongoose.connection.collections.users.drop(()=>{
        done();

    });
});