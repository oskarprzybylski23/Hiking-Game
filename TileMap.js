import Hero from "./hero.js";

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

    // CREATE MAP LAYERS

    //0 - null
    //1 - grass
    //2 - stone path
    //3- water
    //4 - tree 1
    //5 - Hero starting position (heroLayer only)
    //6 - Hero starting position (heroLayer only)


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
      [1, 1, 1, 1, 1, 1,1 , 1, 1, 1, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1],
      
    ];

    layer2 = [
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,2 ,2 ,2 ,0 ,2 ,2 ,2 ,2 ,2 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,2 ,2 ,2 ,2 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
    ];

    heroLayer = [
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,4 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,6 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,4 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,4 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,4 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ],
      [0 ,0 ,5 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ]
    ];

    coverLayer = [
      [7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ],
      [7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ],
      [7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ],
      [7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ],
      [7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ],
      [7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ],
      [7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ],
      [7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ],
      [7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ],
      [7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ],
      [7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ],
      [7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ],
      [7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ,7 ]
    ];

    
    // SET UP CANVAS AND DRAW OBJECTS

    draw(canvas, ctx) {
      this.#setCanvasSize(canvas);
      this.#clearCanvas(canvas, ctx);
      this.#drawlayer1(ctx);
      this.#drawlayer2(ctx);
      this.#drawcolission(ctx);
      // this.#drawcover(ctx);
    }
  
    // FUNCTIONS TO DRAW LAYERS

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

    #drawcover(ctx) {
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

    getHero(velocity){
      for(let row=0; row < this.heroLayer.length; row++) {
        for(let column =0; column < this.heroLayer[row].length; column++) {
          let tile = this.heroLayer[row][column];
          if (tile === 5) {
            this.heroLayer[row][column] = 0;
            this.coverLayer[row][column] = 0;
            return new Hero(column * this.tileSize, row* this.tileSize, this.tileSize, velocity, this);

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
  
