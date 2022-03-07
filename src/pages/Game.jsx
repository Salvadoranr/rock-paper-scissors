import React, {Fragment, useState} from "react";
import Header from "../components/Header";
import IconButton from "../components/IconButton";
import generateSelection from '../utils/generateSelection'
import handleMessage from '../utils/handleMessage'

const options ={
    rock:{
        name:'rock',
        win:'scissors',
        lose:'paper',
        icon:'faHandRock'
    },
    paper:{
        name:'paper',
        win:'rock',
        lose:'scissors',
        icon:'faHandPaper'

    },
    scissors:{
        name:'scissors',
        win:'paper',
        lose:'rock',
        icon:'faHandScissors'
    }
}

const Game = ({userName}) => {
    const [firstSelection, setFirstSelection]= useState('');
    const [secondSelection, setSecondSelection]= useState('');
    const [message, setMessage ]= useState('');
    const [winning, setWin] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const optionsList = Object.keys(options).map(el => options[el])
    
    function handleSelection(ev){
        const {name} = ev.currentTarget
        setFirstSelection(name)
        setSecondSelection('...')
        setDisabled(true)
        triggerBotSelection(name)
    }

    function triggerBotSelection(playerSelection){
        setTimeout(() => {
            const botSelection = generateSelection(options)
            setSecondSelection(botSelection)
            setMessage(handleMessage(playerSelection, botSelection, options, winning, setWin))
            setDisabled(false)
        }, 1000);
    }

    return (
        <Fragment>
            <Header name={userName}/>

            <div className="container u-mt-2">
            <h3 className="text u-mt-1-5">
                Score: <span>{winning}</span>
            </h3>
            <div className="game_options u-mt-1-5">
                {optionsList.map(el => 
                    <IconButton name={el.name} key={el.name} handleClick={handleSelection} disabled ={disabled} icon={el.icon} />
                )}
            </div>
            <p className="text u-mt-1-5">
                You: <span> {firstSelection}</span> -
                Bot: <span> {secondSelection}</span>
            </p>
            <p className="text u-mt-1">  {message}</p>

            </div>
        </Fragment>
    )
}
export default Game;