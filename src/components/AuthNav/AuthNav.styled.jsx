import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const Link = styled(NavLink)`
display:flex;
text-decoration: none;
// border: 1px solid #000;
border-radius: 5px;
background-color:rgb(245, 127, 49);
color: #FFF;
justify-content: center;
width: 85px;
padding:3px;
padding-bottom:5px;
font-size:16px;
font-weight:bold;
`;

export const Container = styled.div`
    display: flex;
    gap: 5px;
    justify-content: flex-end;
`;