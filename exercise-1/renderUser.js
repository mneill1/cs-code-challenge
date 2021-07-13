function renderUser(e){
    context={ "id" : e.id, "name" : e.name, "createdAt": e.createdAt, "avatar": e.avatar};
    console.log(context)
    return context;
}
module.exports = renderUser;