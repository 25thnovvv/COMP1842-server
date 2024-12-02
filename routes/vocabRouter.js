// Import the vocabulary controller functions
const vocabController = require('../controllers/vocabController')

// Define the router function
const vocabRouter = (app) => {
   // Group API routes that do not require an "id" parameter
   app.route('/vocabs')
      // Handle GET request to retrieve all vocabulary records
      .get(vocabController.viewAllVocabs)
      // Handle POST request to add a new vocabulary record
      .post(vocabController.addVocab)
      // Handle DELETE request to delete all vocabulary records
      .delete(vocabController.deleteAllVocabs)

   // Group API routes that require an "id" parameter
   app.route('/vocabs/:id')
      // Handle GET request to retrieve a specific vocabulary by ID
      .get(vocabController.viewVocab)
      // Handle PUT request to edit a vocabulary by ID
      .put(vocabController.editVocab)
      // Handle DELETE request to delete a specific vocabulary by ID
      .delete(vocabController.deleteVocab)
}

// Export the router function to make it available for use in other files
module.exports = vocabRouter
