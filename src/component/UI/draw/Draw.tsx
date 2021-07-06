import * as React from 'react';
import { useSelector } from 'react-redux';
import { counterSelector } from 'app/store';

export const Draw = () => {

    const counter = useSelector(counterSelector);

    return <h1>{counter}</h1>
}