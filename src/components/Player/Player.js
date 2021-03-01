import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player = (props) => {
    const {img, name, salary} = props.player;
    
    return (
        <Card className="cardStyle">
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Salary: ${salary}</Card.Text>
                <Button 
                    className="main-button" variant="primary"
                    onClick={() => props.handleAddPlayer(props.player)}
                    >
                        <FontAwesomeIcon icon={faPlusSquare} /> Select</Button>
            </Card.Body>
        </Card>
    );
};

export default Player;