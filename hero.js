export default class Hero {
    constructor(x, y, tileSize, velocity, tileMap){
        this.x = x;
        this. y = y;
        this.tileSize = tileSize;
        this.velocity = velocity;
        this.tileMap = tileMap;
        this.#loadHeroImage();
    }

// HERO CREATION

    draw(ctx){
        ctx.drawImage(this.HeroImages[this.HeroImageIndex], this.x, this.y, this.tileSize, this.tileSize);
    }

    #loadHeroImage() {
        let HeroImage1 = new Image();
        HeroImage1.src = "./images/pacman.png";
        this.HeroImages = [HeroImage1];
        this.HeroImageIndex = 0;
    };

// MOVEMENT


    moveUp() {
        this.checkIfSolid()
        if (this.isSolidAbove == false){
        this.y -= (this.tileSize*this.velocity)/this.tileSize;
        }
    }

    moveDown() {
        this.checkIfSolid()
        if (this.isSolidBelow == false){
        this.y += (this.tileSize*this.velocity)/this.tileSize;
        }
    }

    moveRight() {
        this.checkIfSolid()
        if (this.isSolidRight == false){
        this.x += (this.tileSize*this.velocity)/this.tileSize;
        }
    }

    moveLeft() {
        this.checkIfSolid()
        if (this.isSolidLeft == false){
        this.x -= (this.tileSize*this.velocity)/this.tileSize;
        }
    }

    // COLISSION
    
      


    checkIfSolid() {
        let collisionCoordinates = this.findCollision();
        
        this.isSolidAbove = false;
        this.isSolidBelow = false;
        this.isSolidRight = false;
        this.isSolidLeft = false;

        let tileAbove = this.y;
        let tileBelow = this.y;
        let tileRight = this.x;
        let tileLeft = this.x;
        const mapHeight = this.tileMap.layer1.length * this.tileSize;
        const mapWidth = this.tileMap.layer1[1].length * this.tileSize;

        if (tileAbove < 0 ){
            this.isSolidAbove = true;
            }
        
        if (tileBelow > mapHeight-this.tileSize){
            this.isSolidBelow = true;
            }

        if (tileRight > mapWidth-this.tileSize){
            this.isSolidRight = true;
            }

        if (tileLeft < 0 || collisionCoordinates.some(coord => coord.x === tileLeft && coord.y === this.y)){
            this.isSolidLeft = true;
            }
        
        console.log(
            "above:"+this.isSolidAbove,
            "below:" + this.isSolidBelow,
            "right:" + this.isSolidRight,
            "left:" + this.isSolidLeft,
            "map-height:" + (this.tileMap.layer1.length * this.tileSize-this.tileSize),
            "map-width:" + (this.tileMap.layer1[1].length * this.tileSize-this.tileSize)
            )
            console.log("colission object coordinates:"+ JSON.stringify(this.findCollision()));
            console.log("is colission:" + collisionCoordinates.some(coord => coord.x === tileLeft && coord.y === this.y))
        };

        findCollision(){
            const collisionCoordinates = [];
    
            for (let row = 0; row < this.tileMap.heroLayer.length; row++) {
              for (let column = 0; column < this.tileMap.heroLayer[row].length; column++) {
                const tile = this.tileMap.heroLayer[row][column];
                if (tile === 4) {
                  collisionCoordinates.push({ x: column*this.tileSize, y: row*this.tileSize });
                  
                }
              }
            }
            return collisionCoordinates;
            
            
          };
    

    }