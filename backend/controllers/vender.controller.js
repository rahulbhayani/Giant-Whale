const venders = require('../models/vender.js')

// Create and Save a new Vender
exports.create = (req, res) => {
  
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Vender
    const vender = new venders({
        vender_name: req.body.vender_name
    })

    vender.save().then((result) => {
        res.status(201).json(result)
    })

};

// Retrieve all Venders from the database.
exports.findAll = (req, res) => {

    venders.find().then((result) => {
        res.json(result)
      })

};

// Delete a Vender with the specified VenderId in the request
exports.delete = (req, res) => {

    venders.deleteOne({ _id: req.params.id }).then((result) => {
    res.json(result)
  })
  res.status(201).json("User deleted successfully!!!");

};
