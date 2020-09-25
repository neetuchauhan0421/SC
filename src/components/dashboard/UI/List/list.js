
import React, {Fragment} from 'react';
import ListItem from './listitem';

const list = ({itemList, handler,children, activeItem}) => {
    return (
        <Fragment>
            <ul>
                {children}
                {itemList 
                    ? itemList.map(k => <ListItem key={k} name={k} handler={() => handler(k)} 
                        isClassActive={activeItem ? activeItem === k : false}
                    />) 
                    : null}
            </ul>
        </Fragment>
    )
}

export default list;