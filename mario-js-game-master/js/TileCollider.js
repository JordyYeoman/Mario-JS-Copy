class TileResolver {
    constructor(matrix, tileSize = 16){
        
    }
}

export default class TileCollider {
    constructor(tiles) {
        this.tiles = tiles;
    }
    
    test(entity) {
        console.log("Testing", entity);
    }
}