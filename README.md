# Description

Ajudando uma amiga

# Nodejs-API

### CRIA UM NOVO ITEM
post http://localhost:3001/create
Content-Type:application/json

{
    "name" : "tay",
    "image" : "imagem",
    "title": "titulo",
    "category": "categoria",
    "enabled": true
}

### TRAS TODOS OS DADOS
get http://localhost:3001/find


### BUSCA PELO NOME
get http://localhost:3001/findbyname?name=tay


### EDITA PELO ID
put http://localhost:3001/edit?_id=66721e9fe06af61611ca9337
Content-Type:application/json

{
    "name" : "taytaytay",
    "image" : "imagem",
    "title": "titulo",
    "category": "categoria",
    "enabled": true
}


### DELETA PELO ID
delete http://localhost:3001/delete?_id=66721e9fe06af61611ca9337
