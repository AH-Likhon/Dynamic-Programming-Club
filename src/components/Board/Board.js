import React from 'react';
import './Board.css'

const Board = (props) => {
    // console.log(props.board);
    let totalSalary = 0;
    let displayName = "";
    for (const programmer of props.board) {
        // console.log(programmer);
        totalSalary = totalSalary + programmer.salary;
        displayName = programmer.name;
        // displayName.push(programmer.name);
    }

    return (
        <div className="board-container">
            <h4>Addded Programmers: {props.board.length} </h4>
            <h4>Total Salary: ${totalSalary}</h4>
            <h2>{displayName}</h2>
        </div>
    );
};

export default Board;