const express = require("express");
const Crud = require("../model/crud");
const router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

router.post('/create', async(request, response)=>{

    try{

        const crud = await Crud.create(request.body);
        return response.send({ crud });

    }catch(error){
        return response.status(400).send({ error: 'Creation failed' }) ;
    }
});

router.get('/find', async(request, response)=>{

    try{
        let crud = await Crud.find();
        return response.send({ crud });

    }catch(error){
        return response.status(400).send({ error: 'Find failed' }) ;
    }
});

router.get('/findbyname', async(request, response)=>{
    var { name } = request.query;

    try{

        const crud = await Crud.findOne({ name: { $regex: name, $options: 'i' }});
        return response.send({ crud });

    }catch(error){
        return response.status(400).send({ error: 'Find failed' }) ;
    }
});

router.put('/edit', async(request, response)=>{
    const { name, image, title, category, enabled } = request.body;
    const id = request.query;
    var _id = { _id: id };

    try{
        await Crud.updateOne(_id,{ $set: { name, image, title, category, enabled }});
        return response.send({ success: "successfully update" });

    }catch(error){
        return response.status(400).send({ error: 'Edit failed' }) ;
    }
});

router.delete('/delete', async(request, response)=>{
    const id = request.query;
    let deleted = { _id: id };

    try{

        await Crud.deleteOne(deleted);
        return response.send({ success: "successfully deleted" });

    }catch(error){
        return response.status(400).send({ error: 'Delete failed' }) ;
    }
});

module.exports = app => app.use('/', router);