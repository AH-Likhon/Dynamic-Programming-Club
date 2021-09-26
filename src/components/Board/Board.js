import React from 'react';
import './Board.css'

const Board = (props) => {
    // console.log(props.board);
    let totalSalary = 0;
    for (const programmer of props.board) {
        // console.log(programmer);
        totalSalary = totalSalary + programmer.salary;
    }

    return (
        <div>
            <div className="board-container">
                <h4>Addded Programmers: {props.board.length} </h4>
                <h4>Total Salary: ${totalSalary}</h4>
            </div>
            <div>
                {
                    props.board.map(displayName => <div key={displayName.id} className="display-prgrammers-name">
                        <img src={displayName.img} alt="" />
                        <h4>{displayName.name}</h4>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Board;