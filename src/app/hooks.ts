import axios, { AxiosResponse,AxiosRequestConfig,CancelTokenSource } from "axios";
import React, {useEffect, useState} from "react";

  
  const defaultData : productProps[] = [];


    export interface productProps{
        id : string,
        name : string,
        description : string,
        price : number
    }
  
  export const UseFetch = (header : {}) => {
  
  
    const [data,setData]= React.useState(defaultData);
    const [loading,setLoading] = React.useState<boolean>(true);
    const [error,setError] = React.useState<string>('');
    const cancelToken = axios.CancelToken;
    const [cancelTokenSource,setCancelTokenSource] = React.useState<CancelTokenSource>(cancelToken.source());
  
    const handleCancelClick = () => {
      if (cancelTokenSource) {
        cancelTokenSource.cancel('User cancelled operation');
      }
    }  
  
    React.useEffect(() => {
      axios(header)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((err) => {
          let error = axios.isCancel(err)
            ? 'Request Cancelled'
            : err.code === 'ECONNABORTED'
            ? 'A timeout has occurred'
            : err.response.status === 404
            ? 'Resource Not Found'
            : 'An unexpected error has occurred';
          setError(error);
          setLoading(false);
        });
    },[]);
  
    return {data,loading,error}
  
  }
    
  