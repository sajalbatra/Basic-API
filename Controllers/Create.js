const createuser = require('../Models/Createuser');

const createuserdata = async (req, res) => {
  try {
    const { name, age } = req.body; // Assuming the user input is sent in the request body
    if (!name || !age) {
      return res.status(400).json({ error: 'Name and age are required fields' });
    }

    const newUser = await createuser.create({
      name,
      age,
    });
    res.json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

const getuserdata = async (req, res) => {
  try {
    const { name, age } = req.body; // Assuming the user input is sent in the request body
    if (!name || !age) {
      return res.status(400).json({ error: 'Name and age are required fields' });
    }

    const getUser = await createuser.findOneAndUpdate({
      name,
      age,
    });
    res.json(getUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
const updateuserdata = async (req, res) => {
  try {
    const { name, age } = req.body; // Assuming the user input is sent in the request body
    if (!name || !age) {
      return res.status(400).json({ error: 'Name and age are required fields' });
    }

    const getUser = await createuser.findOneAndUpdate({
      name,
      age,
    });
    res.json(getUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
const deleteuserdata = async (req, res) => {
  try {
    const { name, age } = req.body; // Assuming the user input is sent in the request body
    if (!name || !age) {
      return res.status(400).json({ error: 'Name and age are required fields' });
    }

    const getUser = await createuser.findOneAndDelete({
      name,
      age,
    });
    res.json(getUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
module.exports = {
  createuserdata,
  getuserdata,
  updateuserdata,
  deleteuserdata,
};
