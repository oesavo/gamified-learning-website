import React from 'react';
import { use, useState, useEffect } from 'react'

import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from "@mui/material"
import MenuIcon from "./material-icons/menu_32dp_D9D9D9_FILL0_wght400_GRAD0_opsz40.svg"
import HelpIcon from './material-icons/help_32dp_D9D9D9_FILL0_wght400_GRAD0_opsz40.svg'

const TopBar = ({handleDialogOpen}) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchorEl(null)
    }

    return(
        <AppBar position='static' sx={{backgroundColor: 'rgb(63, 63, 83)', borderRadius: 2, marginBottom: 1}}>
                <Toolbar>
                  <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}>JavaScript Gamified!</Typography>
                  <IconButton edge="end" onClick={handleDialogOpen}>
                      <img src={HelpIcon}></img>
                  </IconButton>
                  <IconButton id="menu-button" edge="end" onClick={handleOpenMenu}>
                      <img src={MenuIcon}></img>
                  </IconButton>
                  <Menu
                    id="positioned-menu"
                    aria-labelledby="menu-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleCloseMenu}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}>
                    <MenuItem>Menu item</MenuItem>
                    <MenuItem>Menu item</MenuItem>
                    <MenuItem>Menu item</MenuItem>
                  </Menu>
                </Toolbar>
              </AppBar>
    )
}

export default TopBar