class Player{
    constructor()
    {}
getCount(){
    var playerref=database.ref("playerCount")
    playerref.on("value",function(data){
        playerCount=data.val()
    })
}
updateCount(count){
    database.ref("/").update({
        playerCount:count
    })
}
update(Name){
    var playerIndex="Player"+playerCount
    database.ref(playerIndex).update({
       Name:Name
    })
}
}