import React from 'react'
import classes from './card.module.css';

export default ({name, clickHandler,children, img}) => {
    return (
        <div className={classes.root} onClick={clickHandler}>
            <div height="120px" className={classes.thumbs}>
                <img alt="" src={img}></img>
            </div>
            <div className={classes.variantName}>
                {/* { children ? children : null} */}
                <span className={classes.text}>{name}</span>
            </div>
        </div>
    )
}

 
 
