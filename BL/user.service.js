const usersController = require('../DL/user.controller')

const getAllUsers = () => {
   return usersController.findAll()
}
const createUser = (user) => {
   if (!user?.firstName) throw ''
   return usersController.create(user)
}

// TODO
// get one user by id
// check if there is id (and throw error if not)
// call the userController.readOne and send the id
// check if it's a userController return or null | undefined (and throw error)
// return one user

// TODO
// get delete user by id
// check if there is id (and throw error if not)
// call the userController.deleteOne and send the id
// check if it's a userController return or null | undefined (and throw error)
// return ok

// TODO
// get update user by id and data
// check if there is id and data (and throw error if not)
// call the userController.updateOne and send the id and body
// check if it's a userController return or null | undefined (and throw error)
// return the updated user


// TODO
// add here the created functions
module.exports = {getAllUsers, createUser}