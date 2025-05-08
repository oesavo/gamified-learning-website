import React from 'react';
import { use, useState, useEffect } from 'react'

import { Box, colors, Container, Dialog, DialogTitle, TextField, Paper, Button, Typography } from '@mui/material'

import Footer from './components/footer'

import instructions from './components/exercises/instructions.json' with { type: 'json' };
import Exercise1 from './components/exercises/Exercise1.jsx';
import Exercise2 from './components/exercises/Exercise2.jsx';


const App = () => {

  const switchToExercise1 = () => {
    setExercise(<Exercise1 appReference={switchToExercise2}></Exercise1>)
  }
  const switchToExercise2 = () => {
    setInstructionsText(instructions.exercise2)
    setExercise(<Exercise2 appReference={switchToExercise1}></Exercise2>)
  }

  const [exercise, setExercise] = useState(<Exercise1 appReference={switchToExercise2}></Exercise1>)
  const [openDialog, setOpenDialog] = useState(true)
  const [instructionsText, setInstructionsText] = useState(instructions.exercise1)

  const handleDialogClose = () => {
    setOpenDialog(false)
  }

  return(
    <>
      <Dialog id="dialog" onClose={handleDialogClose} open={openDialog}>
        <DialogTitle sx={{ m: 0, p: 2 }}>Welcome to JavaScript with Blockly</DialogTitle>
        <Typography sx={{padding: 2}}>This is where the instructions for how to use the application go to. Please close this dialog by clicking anywhere and start moving the blocks according to the instructions on the screen.</Typography>
      </Dialog>
      <title>JavaScript Gamified!</title>
      <Box component={"section"} sx={{ p: 0}}>
        <h1 id='header' >JavaScript Gamified!</h1>
        <Typography sx={{margin: 2}}>{instructionsText}</Typography>
      </Box>
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
