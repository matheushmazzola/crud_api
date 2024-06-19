const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = __dirname + '/client/build/';
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./src/controllers/crudController')(app);

app.use(cors());
app.use(express.static(path));

app.get('/', (request, response)=>{
    return response.send("API OK");
})

app.listen(process.env.PORT || 3001, (error)=>{
    
    if (error) {
        return console.log('Error', error)
      }

    console.log("server started");
})