const handleMessage= (firstP, SecondP , options, counter, cb ) => { 
    const messages = {winner:'You win!', loser:'You lose!', tie: "It's a tie"}
    if(options[firstP].win === SecondP ){
        cb(counter + 1)
        return messages.winner;
    }
    if(options[firstP].lose === SecondP ){
        return messages.loser;
    }
    return messages.tie
}
export default handleMessage
