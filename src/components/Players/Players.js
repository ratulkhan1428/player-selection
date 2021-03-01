import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/data.json';
import Player from '../Player/Player';
import './Players.css';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers'

const Players = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(fakeData)
    }, [])
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleAddPlayer = (player) => {
        const newSelectedPlayers = [...selectedPlayers, player];
        setSelectedPlayers(newSelectedPlayers)
    }

    return (
        <div className="players-zone d-flex">
            <div className="players-card row col-md-9">
                
                {
                    players.map(player => <Player
                        handleAddPlayer = {handleAddPlayer}
                        player={player} key={player.id}
                        ></Player>)
                }
                
            </div>
            <div className="player-selected col-md-3">
                <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>
            </div>
        </div>
    );
};

export default Players;