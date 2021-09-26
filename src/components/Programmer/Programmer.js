import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import './Programmer.css'

const Programmer = (props) => {
    // console.log(props.programmer);
    const { name, salary, img, nationality, creator, born } = props.programmer;

    // font awesome icon
    const fontIcon = <FontAwesomeIcon icon={faPlusSquare} />

    return (
        <div className="programmer">
            <div className="details">
                <img src={img} alt="" />
                <h4>{name}</h4>
                <h4>Born: {born}</h4>
                <h4>Creator: {creator}</h4>
                <h4>Nationality: {nationality}</h4>
                <h4>Salary: ${salary}</h4>
                <button className="select-btn" onClick={() => props.addedProgrammers(props.programmer)}> {fontIcon} Add to Board</button>
            </div>
        </div>
    );
};

export default Programmer;