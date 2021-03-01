import React from 'react';
import './SelectedPlayers.css'

const selectedPlayers = (props) => {
    const selectedPlayers = props.selectedPlayers;
    const total = selectedPlayers.reduce( (total, player) => total + player.salary, 0)
    return (
        <div>
            <h3>Team Dhaka Dynamites</h3>
            <h5>Players Selected: {selectedPlayers.length}</h5>
            <br/>
            <h5>Selected Players</h5>
            <ol>
                {
                    selectedPlayers.map(player =>
                    <li className="player-list" key={player.id}>
                        <h5>{player.name}</h5>
                        <p>Salary: ${player.salary}</p>
                    </li>)
                }
            </ol>
            <p>Total Budget: ${total}</p>
            
        </div>
    );
};

export default selectedPlayers;