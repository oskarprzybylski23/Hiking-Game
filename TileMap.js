import Hero from "./hero.js";

export default class TileMap {
  constructor(tileSize) {
    this.tileSize = tileSize;
    this.grass = this.#image("tilesetGrass.png");
    this.water = this.#image("tilesetWater.png");
    this.stonePath = this.#image("tilesetPath.png");
    this.tree01 = this.#image("tree01.png");
    this.targetTime = 10;

    this.grass01 = {
      image: this.grass,
      sx: this.tileSize*3,
      sy: this.tileSize*2,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.path01 = {
      image: this.stonePath,
      sx: this.tileSize*3,
      sy: this.tileSize*2,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.water01 = {
      image: this.water,
      sx: 0,
      sy: 0,
      swidth: this.tileSize,
      sheight: this.tileSize
    }
  }

  #image(fileName) {
    const img = new Image();
    img.src = `images/${fileName}`;
    return img;
  }
  



  //MAP DATA

  //0 - null
  //1 - grass
  //2 - stone path
  //3- water
  //4 - tree 1
  //5 - Hero starting position (heroLayer only)
  //6 - Hero starting position (heroLayer only)


  //Map 1
  map1 = {
    layer1: [
      [1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],

    ],

    layer2: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],

    heroLayer: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  }
  //Map 2
  map2 = {
    layer1: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],

    ],

    layer2: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],

    heroLayer: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0]
    ]
  }

  // MAP SELECTION AND DRAWING LAYERS

  //set initial map to map1
  mapNumber = 1;
  selectedMap = this.selectMap(this.mapNumber);

  selectMap(mapNumber) {
    let currentMap = "";

    switch (mapNumber) {
      case 1:
        currentMap = this.map1;
        break;
      case 2:
        currentMap = this.map2;
        break;
      // Add more cases for additional maps
      default:
        console.log("Invalid map number!");
        return currentMap;
    }

    return currentMap;
  }

  //assign current map layers
  layer1 = this.selectedMap.layer1;
  layer2 = this.selectedMap.layer2;
  heroLayer = this.selectedMap.heroLayer;

  //select next map number and update variables when called
  nextMap() {
    this.mapNumber += 1;
    this.selectedMap = this.selectMap(this.mapNumber);
    this.layer1 = this.selectedMap.layer1;
    this.layer2 = this.selectedMap.layer2;
    this.heroLayer = this.selectedMap.heroLayer;
  }

  //create map cover layer
  //7 - covered tile (coverLayer only)

  coverLayer = [
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
    [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
  ];


  // SET UP CANVAS AND DRAW OBJECTS

  // deafult canvas state
  drawInitial(canvas, ctx) {

    this.#setCanvasSize(canvas);
    this.#clearCanvas(canvas, ctx);
  }

  //draw map and game elements
  draw(canvas, ctx) {
    this.#setCanvasSize(canvas);
    this.#clearCanvas(canvas, ctx);
    this.#drawlayer1(ctx);
    this.#drawlayer2(ctx);
    this.#drawcolission(ctx);
  }

  // FUNCTIONS TO DRAW LAYERS

  #drawlayer1(ctx) {
    for (let row = 0; row < this.layer1.length; row++) {
      for (let column = 0; column < this.layer1[row].length; column++) {
        const tile = this.layer1[row][column];
        let tileObject = null;

        switch (tile) {
          case 0:
            tileObject = null;
            break;
          case 1:
            
            tileObject = this.grass01;
            break;
          case 2:
       
            tileObject = this.path01;
            break;
          case 3:
         
            tileObject = this.water01;
            break;
          case 4:
            tileObject = this.water01;
            break;
        }


        if (tileObject != null)
          ctx.drawImage(
            tileObject.image, tileObject.sx, tileObject.sy, tileObject.swidth, tileObject.sheight,
            column * this.tileSize,
            row * this.tileSize,
            this.tileSize,
            this.tileSize
          );



      }
    }
  }

  #drawlayer2(ctx) {
    for (let row = 0; row < this.layer2.length; row++) {
      for (let column = 0; column < this.layer2[row].length; column++) {
        const tile = this.layer2[row][column];
        let tileObject = "";
        
        switch (tile) {
          case 0:
            tileObject = null;
            break;
          case 1:
            tileObject = this.grass01;
            break;
          case 2:
       
            tileObject = this.path01;
            break;
          case 3:
         
            tileObject = this.water01;
            break;
          case 4:
            tileObject = this.water01;
            break;
        }


        if (tileObject != null)
          ctx.drawImage(
            tileObject.image, tileObject.sx, tileObject.sy, tileObject.swidth, tileObject.sheight,
            column * this.tileSize,
            row * this.tileSize,
            this.tileSize,
            this.tileSize
          );
      }
    }
  }

  #drawcolission(ctx) {
    for (let row = 0; row < this.heroLayer.length; row++) {
      for (let column = 0; column < this.heroLayer[row].length; column++) {
        let tile = this.heroLayer[row][column];
        let image = null;
        switch (tile) {
          case 0:
            image = null;
            break;
          case 1:
            image = this.grass;
            break;
          case 2:
            image = this.stonePath;
            break;
          case 3:
            image = this.water;
            break;
          case 4:
            image = this.tree01;
            break;
        }

        if (image != null)
          ctx.drawImage(
            image,
            column * this.tileSize,
            row * this.tileSize,
            this.tileSize,
            this.tileSize
          );
      }
    }
  }

  drawcover(ctx) {
    const whiteTileColor = "#FFFFFF";

    for (let row = 0; row < this.coverLayer.length; row++) {
      for (let column = 0; column < this.coverLayer[row].length; column++) {
        let tile = this.coverLayer[row][column];
        let color = null;

        switch (tile) {
          case 7:
            color = whiteTileColor;
            break;
        }

        if (color === whiteTileColor) {
          ctx.fillStyle = color;
          ctx.fillRect(
            column * this.tileSize,
            row * this.tileSize,
            this.tileSize,
            this.tileSize
          );
        }
      }
    }
  }

  getHero(velocity) {
    for (let row = 0; row < this.heroLayer.length; row++) {
      for (let column = 0; column < this.heroLayer[row].length; column++) {
        let tile = this.heroLayer[row][column];
        if (tile === 5) {
          this.heroLayer[row][column] = 0;
          this.coverLayer[row][column] = 0;
          return new Hero(column * this.tileSize, row * this.tileSize, this.tileSize, velocity, this);
        }
      }
    }
  }

  // SET UP CANVAS DEAFULT LOOK

  #clearCanvas(canvas, ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  #setCanvasSize(canvas) {
    canvas.height = this.layer1.length * this.tileSize;
    canvas.width = this.layer1[0].length * this.tileSize;
  }




}

