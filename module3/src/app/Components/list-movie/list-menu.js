import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

export const ListMenuComponent = ({ listMenu }) => {
    const listItemMenu = listMenu.map(item => <BottomNavigationAction className="item-menu" key={item.value} label={item.label} />);

    const [menu, setMenu] = useState(0);
    return (
        <>
            <BottomNavigation className="menu"
                showLabels
                value={menu}
                onChange={(event, newValue) => {
                    setMenu(newValue);
                }}
            >
                {listItemMenu}
            </BottomNavigation>
        </>
    );
}