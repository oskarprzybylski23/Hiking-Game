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
        this.x += (this.tileSize*this.velocity)/this.tileSize;
    }

    moveLeft() {
        this.x -= (this.tileSize*this.velocity)/this.tileSize;
    }



    checkIfSolid() {
        this.isSolidAbove = false;
        this.isSolidBelow = false;
        this.isSolidRight = false;
        this.isSolidLeft = false;

        let tileAbove = this.y;
        let tileBelow = this.y;
        let tileRight = 0;
        let tileLeft = 0;

        if (tileAbove < 0)
            {
            this.isSolidAbove = true;
            }
        
        if (tileBelow > this.tileMap.layer1.length * this.tileSize-this.tileSize)
        {
        this.isSolidBelow = true;
        }
        console.log(this.isSolid, this.tileMap.layer1.length * this.tileSize-this.tileSize)
        };
    

    }