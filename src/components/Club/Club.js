import React, { useEffect, useState } from 'react';
import Board from '../Board/Board';
import Programmer from '../Programmer/Programmer';
import './Club.css'

const Club = () => {
    const [programmers, setProgrammers] = useState([]);
    const [board, setBoard] = useState([]);
    // console.log(board);

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, []);

    const addedProgrammers = programmer => {
        // console.log(programmer);
        const newSelected = [...board, programmer];
        setBoard(newSelected);
    }

    return (
        <div className="club-container">
            <div className="programmers-cotainer">
                {
                    programmers.map(programmer => <Programmer
                        key={programmer.id}
                        programmer={programmer}
                        addedProgrammers={addedProgrammers}
                    ></Programmer>)
                }
            </div>
            <div className="programmers-added-cotainer">
                <Board board={board}></Board>
            </div>
        </div>
    );
};

export default Club;