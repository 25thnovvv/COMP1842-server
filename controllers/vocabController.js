// Import the vocabulary model
const vocabModel = require('../models/vocabModel')

// Define functions for handling vocabulary operations
// Note 1: Functions use async/await for asynchronous operations
// Note 2: Errors are handled using try...catch blocks

// Retrieve all vocabularies from the database
const viewAllVocabs = async (req, res) => {
   try {
      // Find all documents in the database and sort by _id in descending order
      let vocabs = await vocabModel.find({}).sort({ _id: -1 })
      // Respond with the retrieved data in JSON format
      res.json(vocabs)
   } catch (err) {
      // Respond with error message if retrieval fails
      res.send(err)
   }
}

// Add a new vocabulary to the database
const addVocab = async (req, res) => {
   try {
      // Extract vocabulary data from the request body
      let vocab = req.body
      // Save the new vocabulary to the database
      await vocabModel.create(vocab)
      // Respond with a success message
      res.json({ "message": "Add vocab succeed !" })
   } catch (err) {
      // Respond with error message if saving fails
      res.send(err)
   }
}

// Delete all vocabularies from the database
const deleteAllVocabs = async (req, res) => {
   try {
      // Remove all documents from the collection
      await vocabModel.deleteMany()
      // Respond with a success message
      res.json({ "message": "Delete all vocabs succeed !" })
   } catch (err) {
      // Respond with error message if deletion fails
      res.send(err)
   }
}

// Retrieve a specific vocabulary by its ID
const viewVocab = async (req, res) => {
   try {
      // Extract the ID parameter from the request
      let id = req.params.id
      // Find the document with the given ID
      let vocab = await vocabModel.findById(id)
      // Respond with the found document in JSON format
      res.json(vocab)
   } catch (err) {
      // Respond with error message if retrieval fails
      res.send(err)
   }
}

// Edit an existing vocabulary by its ID
const editVocab = async (req, res) => {
   try {
      // Extract the ID parameter and update data from the request
      let id = req.params.id
      let data = req.body
      // Update the document with the given ID
      await vocabModel.findByIdAndUpdate(id, data)
      // Respond with a success message
      res.json({ "message": "Edit vocab succeed !" })
   } catch (err) {
      // Respond with error message if updating fails
      res.send(err)
   }
}

// Delete a specific vocabulary by its ID
const deleteVocab = async (req, res) => {
   try {
      // Extract the ID parameter from the request
      let id = req.params.id
      // Remove the document with the given ID
      await vocabModel.findByIdAndDelete(id)
      // Respond with a success message
      res.json({ "message": "Delete vocab succeed !" })
   } catch (err) {
      // Respond with error message if deletion fails
      res.send(err)
   }
}

// Export the defined functions for use in routing
module.exports = {
   viewAllVocabs,
   addVocab,
   deleteAllVocabs,
   viewVocab,
   editVocab,
   deleteVocab
}
