import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom({
    "fullscreen":"true",
    "debug":"true"
});

// add a piece of text at position (120, 80)
// add([
//     text("hello"),
//     pos(120, 80),
// ]);

loadSprite("tlo", "tlo.png")

loadSprite("stefan", "stefan.png")

loadSound("muzyka","Kolenda.mp3")

add([
    sprite("tlo"),
    pos(0,0)
])

const stefan=add([
    sprite("stefan"),
    pos(100,150),
    area(),
])

let prawo=true

onUpdate(()=>{

    if(prawo&& stefan.pos.x<500)
    stefan.pos.x +=1

    else

    {
        prawo=false


    }
})

onKeyPress("space",()=>{
    play("muzyka")
})
