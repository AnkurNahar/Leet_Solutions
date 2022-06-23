/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}

var furthestBuilding = function(heights, bricks, ladders) {
    let dif, difs = [], maxDif = 0, sum = 0, reached = 0, maxIndex;

    for(let i = 0; i < heights.length - 1; i++){
            dif = heights[i+1] - heights[i];
            difs.push(dif)
            if(dif > maxDif){
                maxDif = dif;
            }
            if(dif > 0){
                sum += dif;
                if(sum > bricks){
                    if(ladders){
                        ladders--;
                        sum -= maxDif;
                        maxIndex = difs.indexOf(maxDif);
                        difs[maxIndex] = 0;
                        maxDif = Math.max(...difs);
                        if(sum > bricks){
                            return reached;
                        } else {
                            reached++;
                        }
                    } else {
                       return reached; 
                    }
                } else {
                    reached++;
                }
            } else {
                reached++;
            }
    }
    
    return reached;
};*/

var furthestBuilding = function(heights, bricks, ladders) {
    let dif, difs = [], maxDif = 0, sum = 0, reached = 0, maxIndex;

    for(let i = 0; i < heights.length - 1; i++){
            dif = heights[i+1] - heights[i];
            difs.push(dif)
            if(dif > maxDif){
                maxDif = dif;
            }
            if(dif > 0){
                sum += dif;
                if(sum > bricks){
                    if(ladders){
                        ladders--;
                        sum -= maxDif;
                        maxIndex = difs.indexOf(maxDif);
                        difs[maxIndex] = 0;
                        maxDif = difs.reduce((a,b) => {
                            return a > b ? a : b;
                        });
                        //maxDif = Math.max(...difs);
                        if(sum > bricks){
                            return reached;
                        } else {
                            reached++;
                        }
                    } else {
                       return reached; 
                    }
                } else {
                    reached++;
                }
            } else {
                reached++;
            }
    }
    
    return reached;
}