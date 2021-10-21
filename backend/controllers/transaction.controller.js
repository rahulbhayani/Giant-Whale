const transaction = require('../models/transaction.js')


exports.create = async (req, res) => {

  const data = req.body
  const transactionData = new transaction(data)
  try {

    await transactionData.save().then((result) => {
      res.status(200).json(result)
    })
  } catch (error) {
    res.json(400).send({ message: error.message })
  }
}
exports.FindAll = (req, res) => {

  transaction.find().then((result) => {
    res.status(201).json(result)
  }).catch((err) => {
    console.log({ error: err });
  })
};