/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    let W = Math.floor(Math.sqrt(area))
    while (area % W !== 0) {
        W--;
    }
    let L = area / W
    return [L, W]
};