function diceGameSimulation(numSimulations) {
    let results = [];
    for(let i =0; i < numSimulations; i++){
        let dice1 = Math.floor(Math.random()*6) +1;
        let dice2 = Math.floor(Math.random()*6) +1;
        let sum = dice1 + dice2;
        if(sum === 7 || sum ==11){
            results.push({'dice1':dice1, 'dice2':dice2, 'sum':sum, 'result':'win'})
        } else if (sum === 3 || sum === 2 || sum ===12){
            results.push({'dice1':dice1, 'dice2':dice2, 'sum':sum, 'result':'lose'})
        } else {
            results.push({'dice1':dice1, 'dice2':dice2, 'sum':sum, 'result':'roll again'})
        }
    }

    return results;
}

module.exports = diceGameSimulation;
