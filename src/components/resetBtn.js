import React from 'react';

const ResetBtn = ({stopTimer}) => {
    return (
        <div className="resetBtn">
            <button onClick={stopTimer}>Reset</button>
        </div>
    );
}

export default ResetBtn;