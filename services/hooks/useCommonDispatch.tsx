import React from 'react'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/reduxStore';

const useCommonDispatch =() => {
   const dispatch:AppDispatch = useDispatch();
   return dispatch;
}

export default useCommonDispatch;
