const express = require('express');
const mongoose = require('mongoose');
//const cors = require('cors');
const createController = require('./Controllers/Create');

const app = express();
const port = 3000;

require('events').EventEmitter.defaultMaxListeners = 15; // Set an appropriate limit

// app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/6pp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

//create
app.post('/create', createController.createuserdata );
//read
app.get('/read',createController.getuserdata)
//update
app.patch('/update',createController.updateuserdata)
//delete
app.delete('/delete',createController.deleteuserdata)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
