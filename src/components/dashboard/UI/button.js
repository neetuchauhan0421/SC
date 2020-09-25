import React from 'react'

export const button = ({handler, styles, children}) => {
    return (
        <button onClick={handler} className={styles}>
            {children}
        </button>
    )
}

export default button;