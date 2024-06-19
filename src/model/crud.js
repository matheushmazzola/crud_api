const mongoose = require("../database");

const crudSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },

    image: {
        type: String,
        require: true,
    },

    title: {
        type: String,
    },

    category: {
        type: String,
    },

    enabled: {
        type: Boolean,
        default: true,
    },

    created: {
        type: Date,
        default: Date.now,

    }

});

const Crud = mongoose.model('crud', crudSchema);

module.exports = Crud;