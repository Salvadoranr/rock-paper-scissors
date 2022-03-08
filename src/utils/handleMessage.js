

const handleMessage = (firstP, SecondP, options, counter, cb) => {
    const messages = { winner: 'You win!', loser: 'You lose!', tie: "It's a tie" }

    if (determineCondition(options[firstP].win , SecondP)) {
        cb(counter + 1)
        return messages.winner;
    }
    if (determineCondition(options[firstP].lose , SecondP)) {
        return messages.loser;
    }
    return messages.tie
}
const determineCondition = (param1, param2)=>{
    if(Array.isArray(param1)){
        return param1.includes(param2)
    }
    return param1 === param2
}
export default handleMessage
