import React ,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchData} from '../../../store/actions/fetch';


const DataWrapper = ({render, link}) => {
    useFetching(link);
    const data = useSelector(state => state.fetch.data);
    const error = useSelector(state => state.fetch.error);
    const loading = useSelector(state => state.fetch.loading);
    return (
        render(data, loading, error)    
    )
}

const useFetching = (link) => {
    
    const dispatch = useDispatch();
    useEffect(() => {
    
      dispatch(fetchData(link));
    },[])
  }

export default DataWrapper;



