import React, * as Reac from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
import { productProps, UseFetch } from 'app/hooks';

  const CustomDiv = styled.div`
    width: 100%;
    height: 40px;
    font-size: 25px;
    text-align: left;
    font-style: inherit;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  `;
  interface prodProps{
      data : productProps[]
  }

  export const AllProduct = (props : prodProps) => {
      const match = useRouteMatch();
      console.log(match);
      return(
          <React.Fragment>
              {
                  props.data.map(x => <CustomDiv key={x.id}>
                      <NavLink to={`${match.path}/${x.id}/code/${x.name}`} style={{marginLeft: 70}}>{x.name}</NavLink>
                  </CustomDiv>)
              }
          </React.Fragment>
      )
  }