// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    
    let errObject = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };

    if (currency > 10000){
        return errObject;
    }

    let resultObject = {}
    
    if (currency <= 0){
        return resultObject;
    }
    
    function makeEx (coin, propName, RemDiv) {
        let resH = Math.floor(RemDiv / coin);
        if (resH != 0){
            resultObject[propName] = resH;
        }

    }
   
    makeEx (50, 'H', currency);
    makeEx (25, 'Q', currency%50);
    makeEx (10, 'D', currency%50%25);
    makeEx (5, 'N', currency%50%25%10);
    makeEx (1, 'P', currency%50%25%10%5);

   /* let resH = Math.floor(currency / 50);
    if (resH != 0){
        resultObject.H = resH;
    }
        resH= resH%50;
    */

    return resultObject;
}
