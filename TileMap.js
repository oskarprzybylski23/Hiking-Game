import Hero from "./hero.js";

export default class TileMap {
  constructor(tileSize) {
    this.tileSize = tileSize;
    this.background = this.#image("background.png")
    this.coverImage = this.#image("wood.png")
    this.grass = this.#image("tilesetGrass.png");
    this.water = this.#image("tilesetWater.png");
    this.path = this.#image("tilesetPath.png");
    this.rock = this.#image("tilesetRock.png");
    this.cliff = this.#image("tilesetCliff.png");
    this.tree01 = this.#image("tree01.png");
    this.tree02 = this.#image("tree02.png");
    this.tree02 = this.#image("tree02.png");
    this.tree03 = this.#image("tree03.png");
    this.tree04 = this.#image("tree04.png");
    this.bush01 = this.#image("bush01.png");
    this.bush02 = this.#image("bush02.png");
    this.stump01 = this.#image("stump01.png");
    this.stump02 = this.#image("stump02.png");
    this.sign = this.#image("sign.png")
    this.targetTime = 30;

    //single tile images

    this.cover = {
      image: this.wood,
      sx: 0,
      sy: 0,
      swidth: 49,
      sheight: 44,
    }

    this.grass01 = {
      image: this.grass,
      sx: this.tileSize * 2,
      sy: this.tileSize * 1,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.grass02 = {
      image: this.grass,
      sx: this.tileSize * 0,
      sy: this.tileSize * 4,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.grass03 = {
      image: this.grass,
      sx: this.tileSize * 4,
      sy: this.tileSize * 2,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.grass04 = {
      image: this.grass,
      sx: this.tileSize * 0,
      sy: this.tileSize * 0,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.path01 = {
      image: this.path,
      sx: this.tileSize * 2,
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

    this.stonepath01 = {
      image: this.path,
      sx: this.tileSize * 0,
      sy: this.tileSize * 4.5,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.stonepath02 = {
      image: this.path,
      sx: this.tileSize * 5,
      sy: this.tileSize * 4.5,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

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
      sx: this.tileSize * 2,
      sy: this.tileSize * 2,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.water11 = {
      image: this.water,
      sx: this.tileSize * 4,
      sy: this.tileSize * 1,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.water12 = {
      image: this.water,
      sx: this.tileSize * 0,
      sy: this.tileSize * 0,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.water13 = {
      image: this.water,
      sx: this.tileSize * 3,
      sy: this.tileSize * 0,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.cliff01 = {
      image: this.cliff,
      sx: 175,
      sy: 3,
      swidth: 49,
      sheight: 77,
    }

    this.cliff02 = {
      image: this.cliff,
      sx: 112,
      sy: 3,
      swidth: 49,
      sheight: 44,
    }

    this.cliff03 = {
      image: this.cliff,
      sx: 0,
      sy: 3,
      swidth: 49,
      sheight: 77,
    }

    this.cliff04 = {
      image: this.cliff,
      sx: 63,
      sy: 3,
      swidth: 47,
      sheight: 44,
    }

    this.tree01 = {
      image: this.tree01,
      sx: this.tileSize * 0,
      sy: this.tileSize * 0,
      swidth: 84,
      sheight: 102,
    }

    this.tree02 = {
      image: this.tree02,
      sx: this.tileSize * 0,
      sy: this.tileSize * 0,
      swidth: 90,
      sheight: 88,
    }

    this.tree03 = {
      image: this.tree03,
      sx: this.tileSize * 0,
      sy: this.tileSize * 0,
      swidth: 94,
      sheight: 128,
    }

    this.tree04 = {
      image: this.tree04,
      sx: this.tileSize * 0,
      sy: this.tileSize * 0,
      swidth: 96,
      sheight: 130,
    }

    this.bush01 = {
      image: this.bush01,
      sx: this.tileSize * 0,
      sy: this.tileSize * 0,
      swidth: 74,
      sheight: 62,
    }

    this.bush02 = {
      image: this.bush02,
      sx: this.tileSize * 0,
      sy: this.tileSize * 0,
      swidth: 64,
      sheight: 64,
    }

    this.stump01 = {
      image: this.stump01,
      sx: this.tileSize * 0,
      sy: this.tileSize * 0,
      swidth: 64,
      sheight: 64,
    }

    this.stump02 = {
      image: this.stump02,
      sx: this.tileSize * 0,
      sy: this.tileSize * 0,
      swidth: 64,
      sheight: 64,
    }

    this.rock01 = {
      image: this.rock,
      sx: this.tileSize * 0,
      sy: this.tileSize * 0,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.rock02 = {
      image: this.rock,
      sx: this.tileSize * 1,
      sy: this.tileSize * 0,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.rock03 = {
      image: this.rock,
      sx: this.tileSize * 0,
      sy: this.tileSize * 1,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.rock04 = {
      image: this.rock,
      sx: this.tileSize * 1,
      sy: this.tileSize * 1,
      swidth: this.tileSize,
      sheight: this.tileSize
    }

    this.sign = {
      image: this.sign,
      sx: this.tileSize * 0,
      sy: this.tileSize * 0,
      swidth: 64,
      sheight: 64,
    }

  }

  #image(fileName) {
    const img = new Image();
    img.src = `images/${fileName}`;
    return img;
  }

  // === MAP DATA ===

  //Map 1
  map1 = {
    name: 'map1',

    //key for layer 1 (terrain and water)
    //0 - null
    //1 - grass 1
    //2 - grass 2
    //3 - grass 3
    //4 - grass 4
    //5 - water (plain)
    //6 - water (shore right)
    //7 - water (shore left)
    //8 - water (shore top)
    //9 - water (shore bottom)
    //10 - water (corner 1)
    //11 - water (corner 2)
    //12 - water (corner 3)
    //13 - water (corner 4)

    layer1: [
      [1, 7, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 4, 1, 1, 1],
      [1, 7, 5, 13, 8, 8, 8, 8, 8, 8, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 7, 5, 5, 5, 5, 5, 5, 5, 5, 6, 2, 3, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 10, 9, 9, 9, 9, 9, 9, 12, 5, 6, 3, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1],
      [1, 2, 2, 1, 1, 1, 1, 1, 7, 5, 6, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 1, 1, 1, 1, 1, 1, 7, 5, 6, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 3, 4],
      [1, 1, 1, 1, 1, 1, 4, 1, 7, 5, 13, 8, 11, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 3, 4, 3],
      [1, 1, 1, 1, 1, 1, 3, 4, 7, 5, 5, 5, 6, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 3, 4],
      [1, 1, 1, 3, 1, 1, 1, 3, 10, 9, 12, 5, 6, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 3, 4, 3],
      [1, 1, 1, 4, 1, 1, 3, 4, 3, 2, 7, 5, 6, 1, 1, 1, 1, 4, 1, 1, 4, 1, 3, 1, 1, 4, 4, 3],
      [1, 1, 1, 1, 1, 1, 1, 3, 4, 4, 7, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4],
      [1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 3, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 5, 6, 1, 1, 1, 1, 1, 1, 1, 4, 1, 4, 1, 3, 1, 1, 1],
      [1, 4, 1, 2, 1, 1, 2, 1, 1, 1, 7, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 2],
      [1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 7, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1],
    ],

    //key for layer 2 (paths and non-solid decoration)
    //1 - path (horizontal)
    //2 - path (vertical)
    //3 - path (corner 1)
    //4 - path (corner 2)
    //5 - path (corner 3)
    //6 - path (corner 4)
    //7- stone path (horizontal)
    //8 - stone path (vertical)
    //9 - stone path (corner 1)
    //10 - stone path (corner 2)
    //11 - stone path (corner 3)
    //12 - stone path (corner 4)
    //13 - rock 1
    //14 - rock 2

    layer2: [
      [0, 0, 0, 0, 0, 0, 12, 7, 7, 7, 7, 7, 7, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 4, 1, 1, 0, 13, 0, 1, 5, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 12, 7, 7, 7],
      [0, 0, 4, 1, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0],
      [0, 0, 6, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 3, 7, 7, 7, 7, 9, 0, 0, 0],
      [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 4, 1, 1, 5, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],

    //key for heroLayer (solid objects and start/finish positions)
    //1 - tree 1
    //2 - tree 2
    //3 - tree 3
    //4 - tree 4
    //5 - bush 1
    //6 - bush 2
    //7 - rock 1
    //8 - rock 2
    //9 - rock 3
    //10 - rock 4
    //11 - stump 1
    //12 - stump 2
    //13 - cliff (grass)
    //14 - clifftop (grass)
    //15 - cliff (rock)
    //16 - clifftop (rock)

    heroLayer: [
      [13, 14, 0, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 13, 13, 13, 13, 14, 0, 0, 2, 2, 0, 2],
      [14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 2, 0, 4, 13, 14, 13, 13, 14, 14, 8, 1, 0, 1, 1],
      [14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 8, 14, 13, 13, 13, 13, 13, 7, 0, 2, 0],
      [13, 13, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 17],
      [5, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 14, 14, 8, 0, 0, 0, 0, 98],
      [11, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 9, 0, 3, 0, 3, 0, 0, 0, 14, 13, 13, 14, 0, 0, 0, 0, 0],
      [0, 0, 0, 12, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 14, 14, 13, 13, 14, 13, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 11, 0, 3, 0, 0, 14, 13, 13, 13, 13, 0, 0, 3, 0, 0],
      [5, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 13, 13, 0, 11, 0, 11, 0, 0, 0, 0],
      [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, , 8, 0, 0, 0, 12, 0, 0, 0, 0],
      [0, 0, 2, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 8, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
      [0, 1, 0, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 16, 16, 7, 0, 8, 10, 0, 6, 0, 2, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 15, 16, 0, 9, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 15, 16, 15, 0, 0, 0, 0, 3, 0, 2, 11, 0, 5, 6, 0],
      [4, 0, 99, 0, 0, 2, 0, 3, 0, 0, 0, 0, 0, 15, 15, 10, 0, 2, 0, 2, 0, 0, 0, 6, 0, 6, 0, 0],
    ]
  }

  //Map 2
  map2 = {
    name: 'map2',

    //key for layer 1 (terrain and water)
    //0 - null
    //1 - grass 1
    //2 - grass 2
    //3 - grass 3
    //4 - grass 4
    //5 - water (plain)
    //6 - water (shore right)
    //7 - water (shore left)
    //8 - water (shore top)
    //9 - water (shore bottom)
    //10 - water (corner 1)
    //11 - water (corner 2)
    //12 - water (corner 3)
    //13 - water (corner 4)

    layer1: [
      [4, 4, 4, 1, 4, 4, 7, 5, 6, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 16, 8, 8, 8,],
      [4, 1, 4, 1, 4, 1, 7, 5, 6, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 5, 5, 5],
      [1, 1, 1, 1, 2, 2, 7, 5, 6, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 7, 5, 17, 9],
      [1, 1, 1, 1, 16, 8, 15, 5, 6, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 16, 8, 8, 15, 5, 6, 4],
      [4, 1, 3, 1, 7, 5, 5, 5, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 5, 5, 5, 5, 6, 1],
      [3, 1, 2, 1, 7, 5, 17, 9, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 7, 5, 17, 9, 9, 14, 4],
      [1, 1, 1, 1, 7, 5, 6, 1, 1, 1, 1, 16, 8, 8, 8, 8, 8, 8, 8, 11, 1, 7, 5, 6, 1, 3, 1, 4],
      [2, 1, 1, 3, 7, 5, 13, 8, 8, 8, 8, 15, 5, 5, 5, 5, 5, 5, 5, 6, 1, 7, 5, 13, 8, 8, 8, 8],
      [1, 1, 1, 4, 10, 12, 5, 5, 5, 5, 5, 5, 5, 17, 9, 9, 9, 12, 5, 13, 8, 15, 5, 5, 5, 5, 5, 5],
      [1, 1, 1, 4, 4, 10, 9, 9, 9, 9, 9, 12, 5, 6, 4, 4, 4, 7, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 15, 5, 13, 8, 8, 8, 15, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 17, 9, 9, 9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 14, 3, 1, 1, 2, 1, 1, 3, 1, 1],
      [1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 4, 1, 1, 2, 2, 3, 1, 1],
    ],

    //key for layer 2 (paths and non-solid decoration)
    //1 - path (horizontal)
    //2 - path (vertical)
    //3 - path (corner 1)
    //4 - path (corner 2)
    //5 - path (corner 3)
    //6 - path (corner 4)
    //7- stone path (horizontal)
    //8 - stone path (vertical)
    //9 - stone path (corner 1)
    //10 - stone path (corner 2)
    //11 - stone path (corner 3)
    //12 - stone path (corner 4)
    //13 - rock 1
    //14 - rock 2

    layer2: [
      [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 0, 13, 0, 0, 0, 12, 7, 7, 7, 7, 10, 7, 7, 7, 7, 7, 7, 0, 0, 0, 0, 0],
      [0, 4, 1, 5, 0, 0, 0, 14, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 0, 0, 12, 7, 9, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 4, 1, 1, 1, 11, 7, 7, 7, 10, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 0, 0, 8, 1, 1, 5, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 7, 7, 0, 13, 0, 7, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 13, 14, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0],
      [0, 6, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 4, 1, 1, 1, 1, 1, 1, 3, 0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0],
      [0, 0, 6, 1, 1, 5, 0, 0, 0, 0, 0, 0, 6, 1, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
    ],

    //key for heroLayer (solid objects and start/finish positions)
    //1 - tree 1
    //2 - tree 2
    //3 - tree 3
    //4 - tree 4
    //5 - bush 1
    //6 - bush 2
    //7 - rock 1
    //8 - rock 2
    //9 - rock 3
    //10 - rock 4
    //11 - stump 1
    //12 - stump 2
    //13 - cliff (grass)
    //14 - clifftop (grass)
    //15 - cliff (rock)
    //16 - clifftop (rock)

    heroLayer: [
      [2, 0, 1, 99, 2, 6, 0, 0, 0, 0, 2, 13, 13, 13, 13, 13, 13, 13, 9, 7, 13, 13, 0, 1, 0, 0, 0, 0],
      [0, 3, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0],
      [0, 0, 0, 0, 11, 0, 0, 0, 0, , 3, 0, 14, 13, 13, 14, 0, 0, 1, 0, 0, 0, 2, 6, 0, 0, 0, 2],
      [12, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 13, 13, 13, 10, 7, 0, 1, 0, 0, 0, 0, 0, 0, 0,],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 5, 0, 0, 0, 2, 4, 0, 0, 0, 0, 0, 0, 8, 0, 3, 0, 0, 0, 0, 0, 0, 11, 3, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [5, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 4, 0],
      [3, 0, 0, 1, 0, 2, 0, 3, 6, 4, 0, 4, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1],
      [0, 5, 0, 0, 11, 0, 0, 0, 0, , 0, 0, 0, 2, 8, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [3, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 5, 0, 7, 8, 13, 13, 0, 0, 1, 0, 3, 0, 0, 0, 17, 98, 0],
    ]
  }

  //Map 3
  map3 = {
    name: 'map3',

    //key for layer 1 (terrain and water)
    //0 - null
    //1 - grass 1
    //2 - grass 2
    //3 - grass 3
    //4 - grass 4
    //5 - water (plain)
    //6 - water (shore right)
    //7 - water (shore left)
    //8 - water (shore top)
    //9 - water (shore bottom)
    //10 - water (corner 1)
    //11 - water (corner 2)
    //12 - water (corner 3)
    //13 - water (corner 4)

    layer1: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 3, 1, 1, 1, 1, 1],
      [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 3, 4],
      [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [4, 3, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 2, 2, 1],
      [1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],

    //key for layer 2 (paths and non-solid decoration)
    //1 - path (horizontal)
    //2 - path (vertical)
    //3 - path (corner 1)
    //4 - path (corner 2)
    //5 - path (corner 3)
    //6 - path (corner 4)
    //7- stone path (horizontal)
    //8 - stone path (vertical)
    //9 - stone path (corner 1)
    //10 - stone path (corner 2)
    //11 - stone path (corner 3)
    //12 - stone path (corner 4)
    //13 - rock 1
    //14 - rock 2

    layer2: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 7, 7, 7, 10, 0, 0, 0, 0, 0, 0, 12, 7, 7, 7, 7, 10, 0, 0],
      [0, 0, 0, 0, 0, 0, 12, 7, 7, 9, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0],
      [0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0],
      [0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0],
      [0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 12, 7, 9, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, 0],
      [7, 7, 7, 7, 7, 7, 9, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 12, 7, 7, 9, 0, 0, 0, 0, 8, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 12, 9, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 7, 7, 7, 10, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 8, 0, 0, 0, 0, 0, 0, 11, 7, 7, 7],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],

    //key for heroLayer (solid objects and start/finish positions)
    //1 - tree 1
    //2 - tree 2
    //3 - tree 3
    //4 - tree 4
    //5 - bush 1
    //6 - bush 2
    //7 - rock 1
    //8 - rock 2
    //9 - rock 3
    //10 - rock 4
    //11 - stump 1
    //12 - stump 2
    //13 - cliff (grass)
    //14 - clifftop (grass)
    //15 - cliff (rock)
    //16 - clifftop (rock)

    heroLayer: [
      [16, 16, 13, 15, 15, 15, 14, 16, 15, 13, 13, 16, 15, 15, 13, 15, 15, 13, 15, 16, 16, 16, 14, 14, 16, 14, 16, 16],
      [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 0, 0, 0, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
      [15, 15, 15, 16, 14, 15, 15, 15, 15, 0, 0, 0, 0, 0, 16, 15, 16, 0, 15, 15, 0, 0, 0, 0, 0, 0, 16, 15],
      [15, 15, 15, 15, 16, 16, 0, 0, 0, 0, 16, 16, 16, 0, 15, 15, 15, 0, 15, 15, 0, 16, 16, 16, 16, 0, 15, 13],
      [15, 15, 16, 16, 16, 16, 0, 16, 16, 15, 16, 15, 16, 0, 0, 0, 0, 0, 15, 15, 0, 16, 15, 15, 16, 0, 14, 15],
      [8, 15, 15, 15, 14, 15, 0, 16, 15, 15, 15, 15, 15, 0, 16, 15, 16, 16, 0, 15, 0, 15, 15, 15, 15, 0, 15, 13],
      [0, 7, 10, 15, 15, 15, 0, 16, 15, 15, 15, 0, 0, 0, 15, 15, 15, 15, 0, 15, 0, 15, 15, 15, 16, 0, 16, 15],
      [99, 0, 0, 0, 0, 0, 0, 16, 15, 15, 15, 0, 16, 16, 15, 15, 15, 0, 0, 9, 0, 0, 15, 15, 15, 0, 15, 15],
      [0, 0, 3, 16, 16, 16, 15, 15, 15, 15, 15, 0, 16, 15, 15, 15, 15, 0, 15, 15, 15, 0, 15, 15, 0, 0, 15, 1],
      [3, 0, 0, 16, 16, 15, 15, 15, 15, 15, 15, 0, 15, 15, 15, 15, 15, 0, 0, 0, 15, 0, 0, 16, 0, 15, 15, 8],
      [0, 0, 0, 16, 15, 15, 16, 15, 15, 15, 15, 0, 0, 0, 0, 0, 15, 0, 15, 0, 0, , 0, 16, 0, 0, 0, 17],
      [0, 0, 1, 15, 15, 15, 14, 14, 16, 15, 16, 16, 0, 16, 16, 0, 15, 0, 15, 15, 0, 15, 0, 15, 0, 0, 0, 98],
      [8, 0, 0, 0, 0, 0, 15, 15, 15, 13, 13, 15, 0, 15, 15, 0, 0, 0, 14, 15, 0, 15, 0, 13, 15, 0, 0, 0],
      [2, 0, 0, 13, 13, 0, 0, 0, 0, 0, 0, 15, 0, 15, 16, 14, 15, 15, 16, 15, 0, 0, 0, 15, 15, 8, 0, 4],
      [0, 1, 0, 13, 13, 14, 14, 14, 14, 14, 0, 0, 0, 8, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 9, 7, 10, 0],
    ]
  }

  // === MAP SELECTION AND DRAWING LAYERS ===

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
      case 3:
        currentMap = this.map3;
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
  //if map number does not exist then assume game complete and trigger game complete event and reset map number
  nextMap() {
    this.mapNumber += 1;

    if (this.selectMap(this.mapNumber)) {
      this.selectedMap = this.selectMap(this.mapNumber);
      this.layer1 = this.selectedMap.layer1;
      this.layer2 = this.selectedMap.layer2;
      this.heroLayer = this.selectedMap.heroLayer;
      
    } else {
      const gameCompleteEvent = new CustomEvent('gameCompleteEvent', { detail: { message: 'You completed all maps' } });
      document.dispatchEvent(gameCompleteEvent);
      this.mapNumber = 0;
      this.selectedMap = this.selectMap(this.mapNumber);
      this.layer1 = this.selectedMap.layer1;
      this.layer2 = this.selectedMap.layer2;
      this.heroLayer = this.selectedMap.heroLayer;
    }
    console.log("current map: map" + this.mapNumber)
  }

  //create map cover layer
  //1 - covered tile (coverLayer only)

  coverLayer = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  // === SET UP CANVAS AND DRAW OBJECTS ===

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
          case 14:
            tileObject = this.water10;
            rotation = 0;
            break;
          case 15:
            tileObject = this.water11;
            rotation = 0;
            break;
          case 16:
            tileObject = this.water12;
            rotation = 0;
            break;
          case 17:
            tileObject = this.water13;
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
          case 7:
            tileObject = this.stonepath01
            rotation = 0;
            break;
          case 8:
            tileObject = this.stonepath01;
            rotation = 90;
            break;
          case 9:
            tileObject = this.stonepath02;
            rotation = 0;
            break;
          case 10:
            tileObject = this.stonepath02;
            rotation = -90;
            break;
          case 11:
            tileObject = this.stonepath02;
            rotation = 90;
            break;
          case 12:
            tileObject = this.stonepath02;
            rotation = 180;
            break;
          case 13:
            tileObject = this.rock01;
            rotation = 0;
            break
          case 14:
            tileObject = this.rock02;
            rotation = 0;
            break
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
            tileObject = this.tree02;
            rotation = 0;
            break;
          case 3:
            tileObject = this.tree03;
            rotation = 0;
            break;
          case 4:
            tileObject = this.tree04;
            rotation = 0;
            break
          case 5:
            tileObject = this.bush01;
            rotation = 0;
            break
          case 6:
            tileObject = this.bush02;
            rotation = 0;
            break
          case 7:
            tileObject = this.rock01;
            rotation = 0;
            break
          case 8:
            tileObject = this.rock02;
            rotation = 0;
            break
          case 9:
            tileObject = this.rock03;
            rotation = 0;
            break
          case 10:
            tileObject = this.rock04;
            rotation = 0;
            break
          case 11:
            tileObject = this.stump01;
            rotation = 0;
            break
          case 12:
            tileObject = this.stump02;
            rotation = 0;
            break
          case 13:
            tileObject = this.cliff01;
            rotation = 0;
            break
          case 14:
            tileObject = this.cliff02;
            rotation = 0;
            break
          case 15:
            tileObject = this.cliff03;
            rotation = 0;
            break
          case 16:
            tileObject = this.cliff04;
            rotation = 0;
            break
          case 17:
            tileObject = this.sign;
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

    for (let row = 0; row < this.coverLayer.length; row++) {
      for (let column = 0; column < this.coverLayer[row].length; column++) {
        let tile = this.coverLayer[row][column];
        let tileType = null;
        
        switch (tile) {
          case 1:
            tileType = "covered";
            break;
        }

        if (tileType === "covered") {
          ctx.drawImage(
            this.coverImage, 
            column * this.tileSize, 
            row * this.tileSize,
            this.tileSize,
            this.tileSize
          );

          // ctx.fillStyle = color;

          // ctx.fillRect(
          //   column * this.tileSize,
          //   row * this.tileSize,
          //   this.tileSize,
          //   this.tileSize
          // );
        }
      }
    }
  }

  resetcover() {
    for (let row = 0; row < this.coverLayer.length; row++) {
      for (let column = 0; column < this.coverLayer[row].length; column++) {
        this.coverLayer[row][column] = 1;
      }
    }
  }

  getHero(velocity) {
    for (let row = 0; row < this.heroLayer.length; row++) {
      for (let column = 0; column < this.heroLayer[row].length; column++) {
        let tile = this.heroLayer[row][column];
        if (tile === 99) {
          return new Hero(column * this.tileSize, row * this.tileSize, this.tileSize, velocity, this);
        }
      }
    }
  }

  // === SET UP CANVAS DEAFULT LOOK ===

  #clearCanvas(canvas, ctx) {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = "white";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  #setCanvasSize(canvas) {
    canvas.height = this.layer1.length * this.tileSize;
    canvas.width = this.layer1[0].length * this.tileSize;
  }




}

