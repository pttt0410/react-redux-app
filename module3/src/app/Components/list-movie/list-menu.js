import React from "react";
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

export const ListMenuComponent = ({ listMenu }) => {
    const listItemMenu = listMenu.map(item => <BottomNavigationAction className="item-menu" key={item.value} label={item.label} />
    )
    return (
        <>
            <BottomNavigation className="menu"
                showLabels
            // value={value}
            // onChange={(event, newValue) => {
            //     setValue(newValue);
            // }}
            >
                {listItemMenu}
            </BottomNavigation>
        </>
    );
}