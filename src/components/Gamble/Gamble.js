import React from 'react';

import classes from './Gamble.css';

const Gamble = (props) => {
    return (
        <div className={classes.Gamble}>
        <div className={classes.GambleTitle}>
            {props.title}
        </div>
        <div className={classes.GambleItem}>
            {props.select}
        </div>
        </div>
    );
};

export default Gamble;