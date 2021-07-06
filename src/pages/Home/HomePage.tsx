import * as React from 'react';
import { CustomButton } from 'component/UI/item/CustomButton';
import { CustomHeader } from 'component/redux-cart/Header';
import { ModalOverlay } from 'component/card/Card';
import { CustomItem } from 'component/redux-cart/Item';
import { dataFetchSelector } from 'app/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataList } from 'features/API/fetchSlice';




export const HomePage = () => {


    const dataFromAPI = useSelector(dataFetchSelector);
    const dispatch = useDispatch();

    React.useEffect(() => {
        const fetch = async () => {
            await dispatch(fetchDataList());
          }
          fetch();
    },[])

   console.log(Object.values(dataFromAPI)[Object.keys(dataFromAPI).indexOf('data')]);

    const [cartShow,setCartShow] = React.useState(false);

    const changeCart = () => {
        setCartShow(!cartShow);
      }
    

    return (
       <React.Fragment>
            <CustomHeader><CustomButton onClick={changeCart}>Cart</CustomButton></CustomHeader>
            {cartShow && <ModalOverlay zIndex={0}>alo</ModalOverlay>}
       </React.Fragment>)
}