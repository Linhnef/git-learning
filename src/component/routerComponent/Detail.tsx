import * as React from 'react';
import { useParams } from 'react-router-dom'

interface detailProps{
    id : string,
    name : string
}

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

export const Detail = () => {

    const params = useParams<detailProps>();

        const detail = DUMMY_MEALS.filter(x => x.id == params.id);
    

    return <React.Fragment>
        <h1>{params.id} : {params.name}</h1>
        {
            detail.map(x => (
                <div key={x.id}>
                    <h1>{x.name}</h1>
                    <h2>{x.description}</h2>
                    <h3>{x.price}</h3>
                </div>
            )
            )
        }
    </React.Fragment>
}