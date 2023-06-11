export default class TileMap {
    constructor(tileSize) {
      this.tileSize = tileSize;
      this.grass = this.#image("grass.png");
      this.water = this.#image("water.png");
      this.stonePath = this.#image("stonePath.png");
      this.tree01 = this.#image("tree01.png");
    }
  
    #image(fileName) {
      const img = new Image();
      img.src = `images/${fileName}`;
      return img;
    }
    //0 - grass
    //1 - stone path
    //2- water
    //3 - tree 1
    map = [
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
      [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1],
      [0, 0, 0, 3, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
      [0, 3, 1, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 3, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
      
    ];
  
    draw(canvas, ctx) {
      this.#setCanvasSize(canvas);
      this.#clearCanvas(canvas, ctx);
      this.#drawMap(ctx);
    }
  
    #drawMap(ctx) {
      for (let row = 0; row < this.map.length; row++) {
        for (let column = 0; column < this.map[row].length; column++) {
          const tile = this.map[row][column];
          let image = null;
          switch (tile) {
            case 0:
              image = this.grass;
              break;
            case 1:
              image = this.stonePath;
              break;
            case 2:
              image = this.water;
              break;
            case 3:
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
  
    #clearCanvas(canvas, ctx) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  
    #setCanvasSize(canvas) {
      canvas.height = this.map.length * this.tileSize;
      canvas.width = this.map[0].length * this.tileSize;
    }
  }
  
