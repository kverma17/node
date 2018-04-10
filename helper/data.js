const data = {
    "users":[{
        "user":"admin",
        "pass":"password",
        "id":1523352913526 
    },{
        "user":"admin1",
        "pass":"password1",
        "id":1523352913882
    }]
}

function getRow(id){
    for(let element of data.users){
        console.log(element);
        if(element.id == id){
            return element;
        }
    }
    return false;
}

function getId(user_data,id){
    return user_data.indexOf(getRow(id));
}

exports.data = data;
exports.getRow = getRow;
exports.getId = getId;