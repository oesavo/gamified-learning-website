import React from 'react';
import { use, useState, useEffect } from 'react'

import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, MenuList, ListItemIcon, ListItemText, Dialog, DialogContent, DialogActions, Button } from "@mui/material"
import instructions from '../exercises/instructions.json' with { type: 'json' };

//Icons
import MenuIcon from "./material-icons/menu_32dp_D9D9D9_FILL0_wght400_GRAD0_opsz40.svg"
import HelpIcon from './material-icons/help_32dp_D9D9D9_FILL0_wght400_GRAD0_opsz40.svg'
import EmptyStar from './material-icons/star_100dp_EAC452_FILL0_wght400_GRAD0_opsz48.svg'
import Star from './material-icons/star_100dp_EAC452_FILL1_wght400_GRAD0_opsz48.svg'

const TopBar = ({handleDialogOpen, helpTextSetter, points, activeLevel, switchExercise1, switchExercise2, switchExercise3, switchExercise4}) => {
    const showDescription = () => {
      helpTextSetter([
        instructions.dialogTexts.help.title,
        instructions.dialogTexts.help.text]
      )
      handleDialogOpen()
    }
  
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchorEl(null)
    }
    

    const LevelItem = ({level, levelName, switchExercise}) => {
      let disableButton = false
      if(activeLevel===levelName){disableButton=true}
      switch (points.get(level)) {
          case -1:
            return(<MenuItem disabled={true}>
                    <ListItemText>Level {level}</ListItemText>
                    <ListItemIcon><img src={EmptyStar}/><img src={EmptyStar}/><img src={EmptyStar}/></ListItemIcon>
                  </MenuItem>)
          case 0:
            return(<MenuItem onClick={switchExercise} disabled={disableButton}>
                    <ListItemText>Level {level}</ListItemText>
                    <ListItemIcon><img src={EmptyStar}/><img src={EmptyStar}/><img src={EmptyStar}/></ListItemIcon>
                  </MenuItem>)
          case 1:
            return(<MenuItem onClick={switchExercise} disabled={disableButton}>
                    <ListItemText>Level {level}</ListItemText>
                    <ListItemIcon><img src={Star}/><img src={EmptyStar}/><img src={EmptyStar}/></ListItemIcon>
                  </MenuItem>)
          case 2:
            return(<MenuItem onClick={switchExercise} disabled={disableButton}>
                    <ListItemText>Level {level}</ListItemText>
                    <ListItemIcon><img src={Star}/><img src={Star}/><img src={EmptyStar}/></ListItemIcon>
                  </MenuItem>)
          case 3:
            return(<MenuItem onClick={switchExercise} disabled={disableButton}>
                    <ListItemText>Level {level}</ListItemText>
                    <ListItemIcon><img src={Star}/><img src={Star}/><img src={Star}/></ListItemIcon>
                  </MenuItem>)
        }
    }

    return(
        <AppBar position='static' sx={{backgroundColor: 'rgb(63, 63, 83)', borderRadius: 2, marginBottom: 1}}>
                <Toolbar>
                  <Typography variant='h4' component="div" sx={{ flexGrow: 1 }}>JavaScript Gamified!</Typography>
                  <IconButton edge="end" onClick={showDescription}>
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
                    <MenuList>
                      <LevelItem level={"1"} levelName={"Exercise 1"} switchExercise={switchExercise1}></LevelItem>
                      <LevelItem level={"2"} levelName={"Exercise 2"} switchExercise={switchExercise2}></LevelItem>
                      <LevelItem level={"3"} levelName={"Exercise 3"} switchExercise={switchExercise3}></LevelItem>
                      <LevelItem level={"4"} levelName={"Exercise 4"} switchExercise={switchExercise4}></LevelItem>
                    </MenuList>
                  </Menu>
                </Toolbar>
              </AppBar>
    )
}

export default TopBar