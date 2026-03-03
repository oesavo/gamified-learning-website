import React from 'react';
import { use, useState, useEffect } from 'react'

import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Container, Dialog, DialogContent, DialogTitle, Divider, Drawer, Icon, IconButton, MenuList, MenuItem, TextField, Toolbar, Button, Typography, Menu, Stack } from '@mui/material'

import Footer from './components/footer'

import instructions from './components/exercises/instructions.json' with { type: 'json' };
import Exercise1 from './components/exercises/Exercise1.jsx';
import Exercise2 from './components/exercises/Exercise2.jsx';
import Exercise3 from './components/exercises/Exercise3.jsx';

//Components
import HelpDialog from './components/react_components/HelpDialog.jsx';
import TopBar from './components/react_components/TopBar.jsx';
import ExerciseInfo from './components/react_components/ExerciseInfo.jsx';
import Badge from './components/react_components/badge.jsx';
import Exercise4 from './components/exercises/Exercise4.jsx';

const App = () => {

  const [instructionsText, setInstructionsText] = useState(instructions.exercise1.task)
  const [challengeText, setChallengeText] = useState(instructions.exercise1.challenge)
  const [exerciseNo, setExerciseNo] = useState(instructions.exercise1.title)

  const [badgeStates, setBadgeStates] = useState(new Map([
    ["Exercise2ForLoop", false],
    ["Exercise4Musician", false]
  ]))
  const [badgeCollected, setBadgeCollected] = useState(false)
  const [bonusCollected, setBonusCollected] = useState(false)

  const [openDialog, setOpenDialog] = useState(true)
  const [helpDialogText, setHelpDialogText] = useState([
    instructions.dialogTexts.introduction.title,
    instructions.dialogTexts.introduction.text]
  )
  const handleDialogClose = () => {
    setOpenDialog(false)
  }
  const handleDialogOpen = () => {
    setOpenDialog(true)
  }

  const [exercisePoints, setExercisePoints] = useState (new Map([
        ["1", -1],
        ["2", -1],
        ["3", -1],
        ["4", -1]
        ]))
  const badges = (new Map([
    ["Exercise 2 - Apple loop",<Stack direction="row"><Badge collectedState={badgeCollected} achievementTitle={"For looper"} achievementDescription={instructions.badges.exercise2} helpDialogSetter={handleDialogOpen} helpTextSetter={setHelpDialogText} iconImage={"Loop"}/><Badge/></Stack>],
    ["Exercise 4 - Lotto numbers",<Stack direction="row"><Badge collectedState={bonusCollected} achievementTitle={"Musician"} achievementDescription={instructions.badges.exercise4} helpDialogSetter={handleDialogOpen} helpTextSetter={setHelpDialogText} iconImage={"MusicNote"}/><Badge/></Stack>]
  ]))
  const [rewardBlocks, setRewardBlocks] = useState(new Map([
    ["rewardBlock", false]
  ]))

  const switchToExercise1 = () => {
      setExerciseNo(instructions.exercise1.title)
      setInstructionsText(instructions.exercise1.task)
      setChallengeText(instructions.exercise1.challenge)
      setExercise(<Exercise1 appReference={switchToExercise2} updatePoints={setExercisePoints} points={exercisePoints}></Exercise1>)
  }
  const switchToExercise2 = () => {
      setExerciseNo(instructions.exercise2.title)
      setInstructionsText(instructions.exercise2.task)
      setChallengeText(instructions.exercise2.challenge)
      setExercise(<Exercise2 appReference={switchToExercise3} badgeStates={badgeStates} setBadgeStates={setBadgeCollected} rewardBlocks={rewardBlocks} setRewardBlock={setRewardBlocks} updatePoints={setExercisePoints} points={exercisePoints}></Exercise2>)
  }
  const switchToExercise3 = () => {
      setExerciseNo(instructions.exercise3.title)
      setInstructionsText(instructions.exercise3.task)
      setChallengeText(instructions.exercise3.challenge)
      setExercise(<Exercise3 badgeStates={badgeStates} setBadgeStates={setBadgeCollected} appReference={switchToExercise4} rewardBlocks={rewardBlocks} setRewardBlock={setRewardBlocks} updatePoints={setExercisePoints} points={exercisePoints}></Exercise3>)
  }
  const switchToExercise4 = () => {
      setExerciseNo(instructions.exercise4.title)
      setInstructionsText(instructions.exercise4.task)
      setChallengeText(undefined)
      setExercise(<Exercise4 setHelpDialogText={setHelpDialogText} setOpenDialog={setOpenDialog} badgeStates={badgeStates} setBadgeStates={setBonusCollected} appReference={switchToExercise1} rewardBlocks={rewardBlocks} setRewardBlock={setRewardBlocks} updatePoints={setExercisePoints} points={exercisePoints}></Exercise4>)
  }

  const [exercise, setExercise] = useState(<Exercise1 appReference={switchToExercise2} updatePoints={setExercisePoints} points={exercisePoints}></Exercise1>)

  return(
    <div id='mainDiv'>
      <HelpDialog handleDialogClose={handleDialogClose} openDialog={openDialog} helpDialogText={helpDialogText[1]} dialogTitle={helpDialogText[0]}></HelpDialog>
      <title>JavaScript Gamified!</title>
      <TopBar handleDialogOpen={handleDialogOpen} helpTextSetter={setHelpDialogText} points={exercisePoints} activeLevel={exerciseNo}
      switchExercise1={switchToExercise1} 
      switchExercise2={switchToExercise2}
      switchExercise3={switchToExercise3}
      switchExercise4={switchToExercise4}>
      </TopBar>
      <ExerciseInfo exerciseNo={exerciseNo} instructionsText={instructionsText} challengeText={challengeText} achievements={badges.get(exerciseNo)}></ExerciseInfo>
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
    </div>
  )
}

export default App
