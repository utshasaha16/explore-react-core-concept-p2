import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        const teamCount = team + 1;
        setTeam(teamCount)
    }

    const handleRemove = () => {
        setTeam(team - 1)
    }

    const teamStyle = {
        border: '2px solid purple',
        padding: '15px',
        margin: '15px',
        borderRadius: '15px'
    }

    return(
        <div style={teamStyle}>
            <h3>player: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}