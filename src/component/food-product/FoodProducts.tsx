import * as React from 'react';
import { CustomItem } from 'component/redux-cart/Item';
import { useDispatch } from 'react-redux';
import {add, remove} from '../../features/food/cart'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];


export const Products = () => {
    const dispath = useDispatch();

    return(
        <React.Fragment>
            {
                DUMMY_MEALS.map(x =>
                    (
                        <div>
                    <CustomItem name={x.name} price={x.price} amount={2} onClick={() => dispath(add(x))}></CustomItem>
                    <button onClick={() => {
                        dispath(remove(x.id));
                        console.log('remove')
                    }}>remove</button>
                    </div>
                    )
                )
            }
        </React.Fragment>
    )
}