import Hero from "./hero.js";

export default class TileMap {
  constructor(tileSize) {
    this.tileSize = tileSize;
    this.grass = this.#image("tilesetGrass.png");
    this.water = this.#image("tilesetWater.png");
    this.path = this.#image("tilesetPath.png");
    this.tree = this.#image("tree01.png");
    this.targetTime = 10;

    //single tile images from tilesets
    this.grass01 = {
      image: this.grass,
      sx: this.tileSize * 2,
      sy: this.tileSize * 2,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.grass02 = {
      image: this.grass,
      sx: this.tileSize * 2,
      sy: this.tileSize * 1,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.path01 = {
      image: this.path,
      sx: this.tileSize * 0,
      sy: this.tileSize * 2,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.path02 = {
      image: this.path,
      sx: this.tileSize * 5,
      sy: this.tileSize * 3,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    // this.path03 = {
    //   image: this.path,
    //   sx: this.tileSize * 4,
    //   sy: this.tileSize * 3,
    //   swidth: this.tileSize,
    //   sheight: this.tileSize
    // }

    // this.path04 = {
    //   image: this.path,
    //   sx: this.tileSize * 5,
    //   sy: this.tileSize * 2,
    //   swidth: this.tileSize,
    //   sheight: this.tileSize
    // }

    // this.path05 = {
    //   image: this.path,
    //   sx: this.tileSize * 4,
    //   sy: this.tileSize * 2,
    //   swidth: this.tileSize,
    //   sheight: this.tileSize
    // }

    this.water01 = {
      image: this.water,
      sx: this.tileSize * 1,
      sy: this.tileSize * 1,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.water02 = {
      image: this.water,
      sx: this.tileSize * 3,
      sy: this.tileSize * 2,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.water03 = {
      image: this.water,
      sx: this.tileSize * 5,
      sy: this.tileSize * 2,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.water04 = {
      image: this.water,
      sx: this.tileSize * 5,
      sy: this.tileSize * 1,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.water05 = {
      image: this.water,
      sx: this.tileSize * 5,
      sy: this.tileSize * 0,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.water06 = {
      image: this.water,
      sx: this.tileSize * 0,
      sy: this.tileSize * 2,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.water07 = {
      image: this.water,
      sx: this.tileSize * 2,
      sy: this.tileSize * 0,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.water08 = {
      image: this.water,
      sx: this.tileSize * 4,
      sy: this.tileSize * 0,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.water09 = {
      image: this.water,
      sx: this.tileSize * 3,
      sy: this.tileSize * 1,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.water10 = {
      image: this.water,
      sx: this.tileSize * 3,
      sy: this.tileSize * 1,
      swidth: this.tileSize,
      sheight: this.tileSize
    }
    this.tree01 = {
      image: this.tree,
      sx: this.tileSize * 0,
      sy: this.tileSize * 0,
      swidth: 84,
      sheight: 102,
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
      [1, 7, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 7, 5, 13, 8, 8, 8, 8, 8, 8, 11, 1, 1, 1, 1],
      [1, 7, 5, 5, 5, 5, 5, 5, 5, 5, 6, 1, 1, 1, 1],
      [1, 10, 9, 9, 9, 9, 9, 9, 12, 5, 6, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 7, 5, 6, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 7, 5, 6, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 7, 5, 13, 8, 11, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 7, 5, 5, 5, 6, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 10, 9, 12, 5, 6, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 5, 6, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 5, 6, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 5, 6, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 5, 6, 1, 1],

    ],

    layer2: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1],
      [0, 0, 0, 0, 0, 4, 1, 1, 0, 0, 0, 1, 5, 0, 0],
      [0, 0, 4, 1, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 98],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 99, 0, 0, 0, 0, 0, 0, 0]
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
        let rotation = 0;

        switch (tile) {
          case 0:
            tileObject = null;
            break;
          case 1:
            tileObject = this.grass01;
            rotation = 0;
            break;
          case 2:
            tileObject = this.grass02;
            rotation = 0;
            break;
          case 3:
            tileObject = this.grass03;
            rotation = 0;
            break;
          case 4:
            tileObject = this.grass04;
            rotation = 0;
            break;
          case 5:
            tileObject = this.water01;
            rotation = 0;
            break;
          case 6:
            tileObject = this.water02;
            rotation = 0;
            break;
          case 7:
            tileObject = this.water03;
            rotation = 0;
            break;
          case 8:
            tileObject = this.water04;
            rotation = 0;
            break;
          case 9:
            tileObject = this.water05;
            rotation = 0;
            break;
          case 10:
            tileObject = this.water06;
            rotation = 0;
            break;
          case 11:
            tileObject = this.water07;
            rotation = 0;
            break;
          case 12:
            tileObject = this.water08;
            rotation = 0;
            break;
          case 13:
            tileObject = this.water09;
            rotation = 0;
            break;
        }

        if (tileObject != null) {
          const rotationRad = (rotation * Math.PI) / 180;
          const centerX = column * this.tileSize + this.tileSize / 2;
          const centerY = row * this.tileSize + this.tileSize / 2;
          ctx.save();
          ctx.translate(centerX, centerY);
          ctx.rotate(rotationRad);
          ctx.drawImage(
            tileObject.image, tileObject.sx, tileObject.sy, tileObject.swidth, tileObject.sheight,
            -this.tileSize / 2,
            -this.tileSize / 2,
            this.tileSize,
            this.tileSize
          );
          ctx.restore();
        }
      }
    }
  }

  #drawlayer2(ctx) {
    for (let row = 0; row < this.layer2.length; row++) {
      for (let column = 0; column < this.layer2[row].length; column++) {
        const tile = this.layer2[row][column];
        let tileObject = "";
        let rotation = 0;

        switch (tile) {
          case 0:
            tileObject = null;
            break;
          case 1:
            tileObject = this.path01
            rotation = 0;
            break;
          case 2:
            tileObject = this.path01;
            rotation = 90;
            break;
          case 3:
            tileObject = this.path02;
            rotation = 0;
            break;
          case 4:
            tileObject = this.path02;
            rotation = -90;
            break;
          case 5:
            tileObject = this.path02;
            rotation = 90;
            break;
          case 6:
            tileObject = this.path02;
            rotation = 180;
            break;
        }

        if (tileObject != null) {
          const rotationRad = (rotation * Math.PI) / 180;
          const centerX = column * this.tileSize + this.tileSize / 2;
          const centerY = row * this.tileSize + this.tileSize / 2;
          ctx.save();
          ctx.translate(centerX, centerY);
          ctx.rotate(rotationRad);
          ctx.drawImage(
            tileObject.image, tileObject.sx, tileObject.sy, tileObject.swidth, tileObject.sheight,
            -this.tileSize / 2,
            -this.tileSize / 2,
            this.tileSize,
            this.tileSize
          );
          ctx.restore();
        }
      }
    }
  }

  #drawcolission(ctx) {
    for (let row = 0; row < this.heroLayer.length; row++) {
      for (let column = 0; column < this.heroLayer[row].length; column++) {
        let tile = this.heroLayer[row][column];
        let tileObject = null;
        let rotation = 0;
        switch (tile) {
          case 0:
            tileObject = null;
            break;
          case 1:
            tileObject = this.tree01;
            rotation = 0;
            break;
          case 2:
            tileObject = this.tree01;
            rotation = 0;
            break;
          case 3:
            tileObject = this.tree01;
            rotation = 0;
            break;
          case 4:
            tileObject = this.tree01;
            rotation = 0;
            break
        }

        if (tileObject != null) {
        const rotationRad = (rotation * Math.PI) / 180; // Convert rotation to radians
        const centerX = column * this.tileSize + this.tileSize / 2;
        const centerY = row * this.tileSize + this.tileSize / 2;
        ctx.save(); // Save the current transformation state
        ctx.translate(centerX, centerY); // Translate to the center of the tile
        ctx.rotate(rotationRad); // Apply the rotation
        ctx.drawImage(
          tileObject.image,
          tileObject.sx,
          tileObject.sy,
          tileObject.swidth,
          tileObject.sheight,
          -this.tileSize / 2,
          -this.tileSize / 2,
          this.tileSize,
          this.tileSize
        );
        ctx.restore(); // Restore the previous transformation state
      }
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
        if (tile === 99) {
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

