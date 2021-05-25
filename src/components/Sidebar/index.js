import React from 'react';
import { SidebarContainer, Icon, SidebarMenu, CloseIcon, SideBtnWrap, SidebarLink, SidebarRouter } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Pizzas</SidebarLink>
                <SidebarLink to='/'>Desserts</SidebarLink>
                <SidebarLink to='/'>Full menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRouter to='/'>Order Now</SidebarRouter>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;
