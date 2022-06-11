//  Add your code here
const mongoose = require('mongoose');
const { Schema } = mongoose;

const celebritySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    ocupation: {
        type: String
    },
    catchPhrase: {
        type: String
    }
})

const Celebrity = mongoose.model('Celebrity', showSchema);
module.exports = Celebrity;