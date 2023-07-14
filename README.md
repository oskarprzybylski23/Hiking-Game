# Hiking Game

Game created as part of the application process for Founders and Coders (FAC).

## Description
In this game, the player sets off on a hike with the objective of reaching the finish point before the time runs out. The gameplay starts by showing the entire map for 5 seconds, during which the character cannot move. After 5 seconds, the map is obscured, a countdown starts, and the player has to find their way from memory.

The player is free to explore the map but must navigate various obstacles such as trees, boulders, trunks, rivers, and cliffs. The character's movement speed is also affected by the surface they are walking on, with paths being faster than grassland. Additionally, the river current moves the character downstream, but the player can swim against it.

Players are encouraged to keep playing by trying to improve their time and finding new ways to reach the destination.

The game currently features three maps, each with its own characteristics and difficulty level, to keep the game engaging.

This project uses only vanilla JavaScript, HTML, and CSS.

### How to Play
1. Launch the game and familiarize yourself with the "help" section.
2. Start the game by pressing the "n" key or clicking on the start button.
3. When the map is displayed, try to find the finish point marked with a signpost (![Signpost](/images/sign.png)).
4. Memorize as much of the route as possible before the map is covered, paying attention to shortcuts and obstacles.
5. Use the keyboard arrow keys to move the character towards the destination.
6. Enjoy!

## Why and How I Created It
I came up with the idea for this game during a solo camping trip in the Lake District when my phone ran out of battery and I had to rely on my memory to navigate back to my destination. This experience inspired me to create a game that recreates this challenge and allows me to showcase my hobby through this project.

Initially, I planned for a Pac-Man style gameplay with a tile map design. However, I decided to give players more freedom to explore the map and create a more engaging gameplay experience with interactive elements. I implemented collision detection, surface detection, water current, map covering and uncovering, timer, and win/lose events as the main functionalities.

During the design and creation process, I used various tools and assets, including:

- [Coolors](https://coolors.co/): A color palette generation tool.
- Game assets:
  - [Forest Tileset](https://pixivan.itch.io/top-down-forest-tileset)
  - [Grasslands](https://lamorapedia.itch.io/grasslands-free?download)
  - [Trees & Bushes](https://rowdy41.itch.io/trees-bushes)
  - [Hiker Girl](https://www.deviantart.com/avalypuff/art/Hiker-Girl-806685123)

## Setup
To run the game locally on your machine, follow these steps:

1. Clone the repository:

```bash
git  clone  https://github.com/oskarprzybylski23/Hiking-Game.git
```

2. Navigate to the project directory:

  
```bash
cd  hiking-game
```

3. Open the index.html file in your preferred web browser or deploy it with GitHub pages.

## Contributing

Contributions are welcome! If you find any issues, would like to propose enhancements, or add new maps, please open a new issue or submit a pull request.

New maps can be created from within the "TileMap.js" file by creating a new map object with a consecutive number (e.g., "map4"). Each map needs to have three layers with relevant numeric values assigned to each tile. Refer to other map objects as examples.

## License



This project is licensed under the MIT license.