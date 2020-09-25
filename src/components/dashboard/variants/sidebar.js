import React, {useEffect, useState} from 'react'
import styles from './sidebar.module.css';
import List from '../UI/List/list';
import ListItem from '../UI/List/listitem';


const Sidebar = ({data, handler, activeItem}) => {
    
    //const [categoryId, setCategoryId] = useState("");
    const [itemList, setItemList] = useState(null);

    useEffect(() => {
            let map = new Map();
            data.map(({categoryID, categoryName}) => map.set(categoryID, categoryName));
            setItemList(Array.from(map.values()));
            return () => {
                map = null;
            }
        },[]);

    return (
        <div className={styles.root}>
            <div className={styles.textSection}></div>
            {/* <div className={styles.navList}>
                <div className={styles.list}> */}
                    <List itemList={itemList} handler={handler} activeItem={activeItem}>
                        <ListItem 
                            name={"Recommended for you"} 
                            handler={() => handler("sel")} 
                            isClassActive={activeItem ? activeItem === "sel" : false}
                        />
                        <ListItem name={"All"} handler={() => handler("all")}
                        isClassActive={activeItem ? activeItem === "all" : false}
                        /> 
                     </List>
                {/* </div>
            </div> */}
        </div>
    )
}

export default Sidebar;