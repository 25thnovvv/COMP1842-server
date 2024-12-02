// Import the mongoose library
const mongoose = require('mongoose')

// Define a schema for the "vocabs" collection
// The schema specifies the structure of documents in the collection, including field names, types, and validation rules
const vocabSchema = new mongoose.Schema(
   {
      // Define the "english" field: must be a string and is required
      english: {
         type: String,
         required: true
      },
      // Define the "german" field: must be a string and is required
      german: {
         type: String,
         required: true
      }
   },
   {
      versionKey: false   // Disable the "__v" field (MongoDB's versioning key for documents)
   }
)

// Create a model from the schema
// The model represents the "vocabs" collection in the database
const vocabModel = mongoose.model('vocabs', vocabSchema)

// Export the model to make it available for use in other files
module.exports = vocabModel
