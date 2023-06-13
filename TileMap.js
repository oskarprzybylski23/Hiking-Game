export default class TileMap {
    constructor(tileSize) {
      this.tileSize = tileSize;
      this.grass = this.#image("grass.png");
      this.water = this.#image("water.png");
      this.stonePath = this.#image("stonePath.png");
      this.tree01 = this.#image("tree01.png");
      this.char = this.#image("pacman.png");
    }
  
    #image(fileName) {
      const img = new Image();
      img.src = `images/${fileName}`;
      return img;
    }
    //0 - null
    //0 - grass
    //1 - stone path
    //2- water
    //3 - tree 1

    layer1 = [
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
      
    ];

    layer2 = [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,2,2,2,0,2,2,2,2,2],
      [0,0,0,0,0,0,2,0,0,0,0,0,0,0,0],
      [0,0,2,2,2,2,2,0,0,0,0,0,0,0,0],
      [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
    ];

    hero = [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,4,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,4,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,5,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      
    ];
  
    draw(canvas, ctx) {
      this.#setCanvasSize(canvas);
      this.#clearCanvas(canvas, ctx);
      this.#drawlayer1(ctx);
      this.#drawlayer2(ctx);
      this.#drawcolission(ctx);
    }
  
    #drawlayer1(ctx) {
      for (let row = 0; row < this.layer1.length; row++) {
        for (let column = 0; column < this.layer1[row].length; column++) {
          const tile = this.layer1[row][column];
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
  
    #drawlayer2(ctx) {
      for (let row = 0; row < this.layer2.length; row++) {
        for (let column = 0; column < this.layer2[row].length; column++) {
          const tile = this.layer2[row][column];
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

    #drawcolission(ctx) {
      for (let row = 0; row < this.hero.length; row++) {
        for (let column = 0; column < this.hero[row].length; column++) {
          const tile = this.hero[row][column];
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
            case 5:
              image = this.char;
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
  
    #clearCanvas(canvas, ctx) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  
    #setCanvasSize(canvas) {
      canvas.height = this.layer1.length * this.tileSize;
      canvas.width = this.layer1[0].length * this.tileSize;
    }
  }
  
