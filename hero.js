export default class Hero {
    constructor(x, y, tileSize, velocity, tileMap) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.velocity = velocity;
        this.tileMap = tileMap;
        this.#loadHeroImage();
        this.deafultVelocity = this.velocity;
    }


    // HERO CREATION




    draw(ctx) {
        let visibleHeight = this.tileSize;
        let offsetY = 0;
        let sx = 0;
        let sy = 0;
        let swidth = this.tileSize;
        let sheight = this.tileSize;
        let rowCurrent = Math.round(this.y / this.tileSize);
        let columnCurrent = Math.round(this.x / this.tileSize);


        if (this.tileMap.layer1[rowCurrent][columnCurrent] === 3) {
            sheight = this.tileSize / 2;
            visibleHeight = this.tileSize / 2;
        }

        //DRAW RECTANGLE FOR DEBUGGING
        // Get the tile coordinates
        const tileX = Math.round(this.x / this.tileSize);
        const tileY = Math.round(this.y / this.tileSize);

        // Calculate the position and size of the rectangle
        const rectX = tileX * this.tileSize;
        const rectY = tileY * this.tileSize;
        const rectWidth = this.tileSize;
        const rectHeight = this.tileSize;

        // Draw the rectangle
        ctx.strokeStyle = 'red'; // Set the stroke color
        ctx.lineWidth = 2; // Set the stroke width
        ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);

        //drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
        ctx.drawImage(this.HeroImages[this.HeroImageIndex], sx, sy, swidth, sheight, this.x, this.y - offsetY, this.tileSize, visibleHeight);
    }

    #loadHeroImage() {
        let HeroImage1 = new Image();
        HeroImage1.src = "./images/pacman.png";
        this.HeroImages = [HeroImage1];
        this.HeroImageIndex = 0;
    };

    // MOVEMENT

    moveUp() {
        this.checkIfSolid();

        if (this.isSolidAbove == false) {
            this.y -= (this.tileSize * this.velocity) / this.tileSize;
        }
    }

    moveDown() {
        this.checkIfSolid();
        if (this.isSolidBelow == false) {
            this.y += (this.tileSize * this.velocity) / this.tileSize;
        }
    }

    moveRight() {
        this.checkIfSolid()
        if (this.isSolidRight == false) {
            this.x += (this.tileSize * this.velocity) / this.tileSize;
        }
    }

    moveLeft() {
        this.checkIfSolid()
        if (this.isSolidLeft == false) {
            this.x -= (this.tileSize * this.velocity) / this.tileSize;
        }
    }

    // COLISSION

    checkIfSolid() {

        this.isSolidAbove = false;
        this.isSolidBelow = false;
        this.isSolidRight = false;
        this.isSolidLeft = false;

        const rowAbove = Math.ceil(this.y / this.tileSize) - 1;
        const rowBelow = Math.floor(this.y / this.tileSize) + 1;
        const columnRight = Math.ceil(this.x / this.tileSize);
        const columnLeft = Math.floor(this.x / this.tileSize);

        const rowCurrent = Math.round(this.y / this.tileSize);
        const columnCurrent = Math.round(this.x / this.tileSize);


        this.mapHeight = this.tileMap.layer1.length;
        this.mapWidth = this.tileMap.layer1[1].length;

        //add current row and column variables for readability

        if (rowAbove < 0) {
            this.isSolidAbove = true;
        } else {
            if (
                this.tileMap.heroLayer[rowAbove][columnCurrent] === 4
            ) {
                this.isSolidAbove = true;
            }
        }

        if (rowBelow >= this.mapHeight) {
            this.isSolidBelow = true;
        } else {
            if (
                this.tileMap.heroLayer[rowBelow][columnCurrent] === 4
            ) {
                this.isSolidBelow = true;
            }
        }

        if (columnRight >= this.mapWidth || (this.y / this.tileSize) > this.mapHeight - 1) {
            this.isSolidRight = true;
        } else {
            if (this.tileMap.heroLayer[rowCurrent] &&
                (this.tileMap.heroLayer[rowCurrent][columnRight] === 4)
            ) {
                this.isSolidRight = true;
            }
        }

        if (columnLeft < 0 || (this.y / this.tileSize) > this.mapHeight - 1) {
            this.isSolidLeft = true;
        } else {
            if (
                this.tileMap.heroLayer[rowCurrent] &&
                (this.tileMap.heroLayer[rowCurrent][columnLeft] === 4)
            ) {
                this.isSolidLeft = true;
            }
        }

        // LOG FOR DEBUGGING

        console.log(
            "above:" + this.isSolidAbove,
            "below:" + this.isSolidBelow,
            "right:" + this.isSolidRight,
            "left:" + this.isSolidLeft,
            "map-height:" + (this.mapHeight),
            "map-width:" + (this.mapWidth)
        )
        console.log("colission object coordinates:" + JSON.stringify(this.findCollision()));
        console.log("row: " + Math.round(this.y / this.tileSize) + " column: " + Math.round(this.x / this.tileSize))
        console.log("x:" + this.x, "y:" + this.y);
    };


    findCollision() {
        const collisionCoordinates = [];

        for (let row = 0; row < this.tileMap.heroLayer.length; row++) {
            for (let column = 0; column < this.tileMap.heroLayer[row].length; column++) {
                const tile = this.tileMap.heroLayer[row][column];
                if (tile === 4) {
                    collisionCoordinates.push({ x: column, y: row });
                }
            }
        }
        return collisionCoordinates;
    };

    // WIN CONDITION



    winCondition() {
        const winEvent = new CustomEvent('winEvent', { detail: { message: 'You won' } });
        if (this.tileMap.heroLayer[Math.round(this.y / this.tileSize)][Math.round(this.x / this.tileSize)] === 6) {
            console.log("WIN!!!");
            document.dispatchEvent(winEvent);
        }
    }

    resetHero(){
        this.x = 64;
        this.y = 350;
    }

    // SURFACE BEHAVIOUR

    surfaceBehaviour() {

        //SURFACES

        let updatedVelocity;
        let rowCurrent = Math.round(this.y / this.tileSize);
        let columnCurrent = Math.round(this.x / this.tileSize);

        if (this.tileMap.layer2[Math.round(this.y / this.tileSize)][Math.round(this.x / this.tileSize)] === 2) {
            updatedVelocity = this.deafultVelocity;
        } else {
            updatedVelocity = this.deafultVelocity * 0.5;
        }

        //WATER

        if (this.tileMap.layer1[rowCurrent][columnCurrent] === 3 && rowCurrent >= 0 && rowCurrent < this.mapHeight - 1) {

            updatedVelocity = this.deafultVelocity * 0.2;


            if (
                rowCurrent < this.tileMap.layer1.length &&
                columnCurrent + 1 < this.tileMap.layer1[0].length &&
                this.tileMap.layer1[rowCurrent + 1][columnCurrent] === 3
            ) {
                this.y += ((this.tileSize * this.velocity * 0.5) / this.tileSize);
            }

            if (this.tileMap.layer1[rowCurrent][columnCurrent + 1] === 3) {
                this.x += (this.tileSize * this.velocity * 0.5) / this.tileSize;
            }

            if (this.tileMap.layer1[rowCurrent][columnCurrent - 1] === 3) {
                this.x -= (this.tileSize * this.velocity * 0.5) / this.tileSize;
            }

            if (this.tileMap.layer1[rowCurrent][columnCurrent + 1] === 3 && this.tileMap.layer1[rowCurrent][Math.round(this.x / this.tileSize) - 1] === 3) {
                this.x += (this.tileSize * this.velocity * 0.5) / this.tileSize;
            }
        }
        this.velocity = updatedVelocity;
    }

    //UNCOVERING TILES

    uncoverTile() {
        const rowCurrent = Math.round(this.y / this.tileSize);
        const columnCurrent = Math.round(this.x / this.tileSize);

        const tilesToUpdate = [
            [rowCurrent, columnCurrent],
            [rowCurrent + 1, columnCurrent + 1],
            [rowCurrent - 1, columnCurrent - 1],
            [rowCurrent + 1, columnCurrent],
            [rowCurrent, columnCurrent + 1],
            [rowCurrent - 1, columnCurrent],
            [rowCurrent, columnCurrent - 1],
            [rowCurrent - 1, columnCurrent + 1],
            [rowCurrent + 1, columnCurrent - 1]
        ];

        for (const [row, column] of tilesToUpdate) {
            if (
                row >= 0 &&
                row < this.tileMap.coverLayer.length &&
                column >= 0 &&
                column < this.tileMap.coverLayer[row].length
            ) {
                this.tileMap.coverLayer[row][column] = 0;
            }
        }
    }

}

