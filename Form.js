class Form{
    constructor()
    {}
    display(){
        var title=createElement("H2")
        title.html("Car racing game")
        title.position(130,0)
        var input=createInput("Name")
        input.position(130,150)
        var button=createButton("START")
        button.position(200,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            var greeting=createElement("H2")
            greeting.html("hello"+ name)
            greeting.position(130,150)
           
        })
    }
}