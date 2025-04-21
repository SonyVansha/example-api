// Mock database
const users = [
  {
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@example.com',
  },
  {
    first_name: 'Alice',
    last_name: 'Smith',
    email: 'alicesmith@example.com',
  },
];

// Welcome message for the user
const welcomeUser = (req, res) => {
  res.status(200).json({ message: "Welcome to the User API!" });
}

// Get all users
const getAllUsers = (req, res) => {
  res.status(200).json(users);
}

module.exports = {
  welcomeUser,
  getAllUsers,
};