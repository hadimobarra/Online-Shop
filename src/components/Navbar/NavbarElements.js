import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';


export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: none;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
          position: absolute;
          top: 10px;
          left: 25px;
      } 
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: .9rem;
  right: 3.9rem;
  color: #fff;
  cursor: pointer;
`;

export const Bars = styled(FaPizzaSlice)`
  position: relative;
  top: -1.2rem;
  right: -4.4rem;
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;