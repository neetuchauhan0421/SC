import React, {useState} from 'react';
import Card from './UI/card';
import Dialog from './variants/dialog';
import DataWrapper from './common/dataWrapper';
import styles from './dashboard.module.css';
import {VARIANTS_API_PATH, PROJECTS_API_PATH} from '../../utility/config';
import AppBar from './variants/appbar2.js';
const link = PROJECTS_API_PATH;
const apiPath = VARIANTS_API_PATH;


export default () => {
    const [open, setOpen] = useState(false);
    return(
        <div>
        <div className={styles.sidebar}> </div>
        <div className={styles.rightSide}>
            <AppBar/>
            <div className={styles.projects}>
                
                <DataWrapper 
                    render={(data, loading, error) => (
                        <div className={styles.cards}>
                            <div className={styles.newProjectCard} name={"New Project"} onClick={() => setOpen(true)}>
                                <div className={styles.roundDiv}>
                                    <div className={styles.innerDiv}>
                                        {/* <span> */}
                                            <svg className={styles.svg} width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 6c0-1.10457.89543-2 2-2h8c0 1.10457-.89543 2-2 2H0z"></path>
                                                <path d="M6 0v8c0 1.10457-.89543 2-2 2V2c0-1.104569.89543-2 2-2z"></path>
                                            </svg>
                                        {/* </span> */}
                                    </div>
                                </div>
                            </div>    
                            {
                            data.map(variant => 
                                <Card key={variant.id} name={variant.variantName}/>
                            )
                            }
                        </div>
                    )}
                    link={link}
                ></DataWrapper>
                {open ? <Dialog link={apiPath} handler= {setOpen} open={open}/> : null}
            </div>
        </div>
        </div>
    )
}