/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let x, y, trans;
    let xInitialLength = matrix[0].length;
    let yInitialLength = matrix.length;
    trans = new Array(xInitialLength);
    for(y = 0; y < trans.length; y++){
        trans[y] = new Array(yInitialLength);
    }
    
    for(y = 0; y < yInitialLength; y++){
        for(x = 0; x < xInitialLength; x++){
            trans[x][y] = matrix[y][x];
        }
    }
    return trans;
};