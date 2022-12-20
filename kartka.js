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

add([
    sprite("tlo"),
    pos(0,0)
])

add([
    sprite("stefan"),
    pos(100,100),
    area(),
])
