import React from 'react'
import Styles from './listitem.module.css';

const ListItem = ({name, handler, isClassActive}) => <li className={isClassActive ? Styles.active : ''}
    onClick={handler}>{name}</li>

export default ListItem;