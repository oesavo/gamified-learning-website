import React from 'react';
import { use, useState, useEffect } from 'react'

import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Container, Dialog, DialogContent, DialogTitle, Divider, Drawer, Icon, IconButton, MenuList, MenuItem, TextField, Toolbar, Button, Typography, Menu } from '@mui/material'

import Footer from './components/footer'

import instructions from './components/exercises/instructions.json' with { type: 'json' };
import Exercise1 from './components/exercises/Exercise1.jsx';
import Exercise2 from './components/exercises/Exercise2.jsx';
import Exercise3 from './components/exercises/Exercise3.jsx';

//Components
import HelpDialog from './components/react_components/HelpDialog.jsx';
import TopBar from './components/react_components/TopBar.jsx';
import ExerciseInfo from './components/react_components/ExerciseInfo.jsx';

const App = () => {

  const [instructionsText, setInstructionsText] = useState(instructions.exercise3)
  const [exerciseNo, setExerciseNo] = useState("Exercise 3")
  const [openDialog, setOpenDialog] = useState(true)
  const [helpDialogText, setHelpDialogText] = useState("This is where the instructions for how to use the application go to. Please close this dialog by clicking anywhere and start moving the blocks according to the instructions on the screen.")
  const [exercisePoints, setExercisePoints] = useState (new Map([
        ["1", -1],
        ["2", -1],
        ["3", -1],
        ["4", -1]
        ]))
  const switchToExercise1 = () => {
      setExerciseNo("Exercise 1")
      setInstructionsText(instructions.exercise1)
      setExercise(<Exercise1 appReference={switchToExercise2} updatePoints={setExercisePoints} points={exercisePoints}></Exercise1>)
  }
  const switchToExercise2 = () => {
      setExerciseNo("Exercise 2")
      setInstructionsText(instructions.exercise2)
      setExercise(<Exercise2 appReference={switchToExercise3} updatePoints={setExercisePoints} points={exercisePoints}></Exercise2>)
  }
  const switchToExercise3 = () => {
      setExerciseNo("Exercise 3")
      setInstructionsText(instructions.exercise3)
      setExercise(<Exercise3 appReference={switchToExercise1} updatePoints={setExercisePoints} points={exercisePoints}></Exercise3>)
  }

  const handleDialogClose = () => {
    setOpenDialog(false)
  }
  const handleDialogOpen = () => {
    setHelpDialogText(instructions.helpText)
    setOpenDialog(true)
  }

  const [exercise, setExercise] = useState(<Exercise3 appReference={switchToExercise1} updatePoints={setExercisePoints} points={exercisePoints}></Exercise3>)

  return(
    <>
      <HelpDialog handleDialogClose={handleDialogClose} openDialog={openDialog} helpDialogText={helpDialogText}></HelpDialog>
      <title>JavaScript Gamified!</title>
      <TopBar handleDialogOpen={handleDialogOpen} points={exercisePoints} activeLevel={exerciseNo}
      switchExercise1={switchToExercise1} 
      switchExercise2={switchToExercise2}
      switchExercise3={switchToExercise3}>
      </TopBar>
      <ExerciseInfo exerciseNo={exerciseNo} instructionsText={instructionsText}></ExerciseInfo>
      <div id='exerciseDiv'>
        <div id='blocklyDiv' style={{display: 'inline-block'}}>
          <textarea 
            id='output'
            name='output'
            disabled='disabled'
            value={'Program output:'}>
          </textarea>
          {exercise}
        </div>
        <Container id={"bottom-bar"}>
          <Footer/>
        </Container>
      </div>
    </>
  )
}

export default App
