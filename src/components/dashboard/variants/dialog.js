import React, {useState, Fragment} from 'react';
import {Button, Dialog} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import DataWrapper from '../common/dataWrapper';
import Card from '../UI/card';
import CrossSVG from '../UI/crossSvg';
import ButtonUI from '../UI/button';
import Sidebar from './sidebar';
import styles from './dialog.module.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default ({link, handler, open}) => {
  //const [open, setOpen] = useState(false);

  const [categoryId, setCategoryId] = useState("sel");

  let func = (x) => x.categoryName === categoryId;
  if(categoryId === "all" || categoryId === "sel")
    func = (x) => true;
  


  return (
    <div className={styles.dialog}>
      <Dialog fullScreen open={open} onClose={() => handler(false)} TransitionComponent={Transition}>
        <DataWrapper 
                render={(data) => (
                  <Fragment>
                    <div className={styles.sidebar}>
                      <Sidebar data={data} handler={(x) => setCategoryId(x)} activeItem={categoryId}/>
                    </div>
                    <div className={styles.variants}>
                        <div className={styles.category}> <span>Recommended for you</span> </div>
                              <div className={styles.cards}>
                                  {
                                  data
                                    .filter(func)
                                    .map(
                                      variant => <Card 
                                                    key={variant.id} 
                                                    name={variant.variantName}
                                                    img={variant.thumbs}
                                                  />
                                    )
                                  }
                              </div>
                    </div>
                  </Fragment>
                )}
                link={link}
            > 
            </DataWrapper>
        <div className={styles.cross}>
            <ButtonUI handler={() => handler(false)}>
                <CrossSVG height={14} width={14} />           
             </ButtonUI>
        </div>
      </Dialog>
    </div>
  );
}