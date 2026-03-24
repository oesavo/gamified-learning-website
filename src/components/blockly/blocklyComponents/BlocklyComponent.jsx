//Imports
import React from 'react';
import './BlocklyComponent.css';
import modelAnswers from '../../exercises/modelAnswers.json' with {type: 'json'}
import currentAnswers from '../../exercises/currentAnswers.json' with {type: 'json'}

import {useEffect, useRef, use, useState} from 'react';
import { Alert, Button, Dialog, DialogActions, DialogTitle, Divider, Snackbar, Stack} from '@mui/material';

//Used react components that the BlocklyComponent is in charge of
import BlocklyAlert from '../../react_components/BlocklyAlert';
import GamifiedSolveDialog from '../../react_components/GamifiedSolveDialog';

//Music player and sounds
import MusicMaker from './music_maker';
import c4 from './sounds/c4.m4a'
import d4 from './sounds/d4.m4a'
import e4 from './sounds/e4.m4a'
import f4 from './sounds/f4.m4a'
import g4 from './sounds/g4.m4a'
import MusicQueue from './music_maker_queue.json' with {type: 'json'}

//Imports Blockly
import * as Blockly from 'blockly/core';
//Imports JS Generator
import {javascriptGenerator} from 'blockly/javascript';
//Imports a message file
import * as locale from 'blockly/msg/en';
//Imports default blocks
import 'blockly/blocks';


//import { blocks } from 'blockly/blocks';

Blockly.setLocale(locale);

function BlocklyComponent(props) {
  //Store blockly elements
  const blocklyDiv = useRef();
  const toolbox = useRef();
  let primaryWorkspace = useRef();

  //React states
  const [solveDialogOpen, setSolveDialogOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false)
  const [warningOpen, setWarningOpen] = useState(false)
  const [passCondition, setPassCondition] = useState(false)
  const [currentExercisePoints, setCurrentExercisePoints] = useState(0)
  const [badgeUnlocked, setBadgeUnlocked] = useState(false)
  const [blockUnlocked, setBlockUnlocked] = useState(false)

  //Prop references from the main app class used for communication between components
  const switchToNextExercise = props.appReference
  const exerciseNumber = props.exerciseNumber
  const updatePoints = props.updatePoints
  const points = props.points
  const badgeStates = props.badgeStates
  const setBadgeStates = props.setBadgeStates
  const rewardBlocks = props.rewardBlocks
  const setRewardBlocks = props.setRewardBlocks
  const musicPlayer = MusicMaker

  let currentCode = ""

  const handleClear = () => {
    setSolveDialogOpen(true)
  }
  const handleClose = () => {
    setSolveDialogOpen(false)
  }
  const handleReset = () => {
    primaryWorkspace.current.clear()
    closeWarning()
  }
  const handleDispose = () => {
    handleClose()
    document.getElementById("output").value = "Program output: \n\n"
    primaryWorkspace.current.dispose()
    updatePoints(points.set(exerciseNumber,currentExercisePoints))
    switchToNextExercise()
    if (exerciseNumber === "4") {
      props.setHelpDialogText([
        "Congrats!",
        "Thank you for participating! This was the last exercise and next we can discuss what you thought of it \\(^o^)/"]
      )
      props.setOpenDialog(true)
    }
  }

  const openWarning = () => {
    setWarningOpen(true)
  }
  const closeWarning = () => {
    setWarningOpen(false)
  }
  const closeError = () => {
    setErrorOpen(false)
  }

  const playSound = (sound) => {
    switch (sound) {
      case '\'c4\'':
        MusicMaker.queueSound(c4)
        break
      case '\'d4\'':
        MusicMaker.queueSound(d4)
        break
      case '\'e4\'':
        MusicMaker.queueSound(e4)
        break
      case '\'f4\'':
        MusicMaker.queueSound(f4)
        break
      case '\'g4\'':
        MusicMaker.queueSound(g4)
        break
    }
  }

  const checkAnswer = () => {
    if (exerciseNumber === "1") {
        if (currentCode.includes(modelAnswers.exercise1)) {
          setPassCondition(true)
          setCurrentExercisePoints(3)
        } else if ((currentCode.includes("console.log('hello world!');")) || (currentCode.includes("console.log('Hello world');"))) {
          setPassCondition(true)
          setCurrentExercisePoints(2)
        } else if (currentCode.includes("console.log('hello world');")) {
          setPassCondition(true)
          setCurrentExercisePoints(1)
        }
      }
    if (exerciseNumber === "2") {
      if (currentAnswers.apple === 10) {
        setPassCondition(true)
        if (primaryWorkspace.current.getAllBlocks().length <= 6) {
          setCurrentExercisePoints(3)
        } else if ((primaryWorkspace.current.getAllBlocks().length >= 7) && (primaryWorkspace.current.getAllBlocks().length < 9)) {
          setCurrentExercisePoints(2)
        } else {
          setCurrentExercisePoints(1)
        }
      }
    }
    if (exerciseNumber === "3") {
        if (currentCode.includes(`var age;`) && (currentCode.includes(`if (age >= 15) {
  `) || currentCode.includes(`if (15 <= age) {
  `) || currentCode.includes(`if (age > 14) {
  `) || currentCode.includes(`if (14 < age) {
  `)) 
&& currentCode.includes(
  `console.log('Welcome');
} else {
  console.log('Must be at least 15 to access');`
)) {
  if (currentCode.includes(`age = window.prompt('How old are you?');`)) {
    setPassCondition(true)
    setCurrentExercisePoints(3)
    setBlockUnlocked(true)
    if (rewardBlocks.get("rewardBlock") != true) {
      setRewardBlocks(rewardBlocks.set("rewardBlock", true))
    }
  } else if (currentCode.includes(`age =`)) {
    setPassCondition(true)
    setCurrentExercisePoints(2)
  }
  }
}
    if (exerciseNumber === "4") {
      let musicUsed = false
      primaryWorkspace.current.getAllBlocks().forEach((block) => {
      if ((block.type === "sound_block")) {
        musicUsed = true
      }})
      if (musicUsed) {
        setBadgeStates(badgeStates.set("Exercise4Musician",true))
        setBadgeUnlocked(true)
      }
      if (currentCode.includes(`var lotto_numbers, i;`) && currentCode.includes(`function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}`)
&& ((currentCode.includes(`for (var i_index in lotto_numbers) {
  i = lotto_numbers[i_index];`) 
&& currentCode.includes(`  console.log(i);`)) || (currentCode.includes(`for (i = 1; i <= 7; i++) {`) 
&& currentCode.includes(`  console.log((lotto_numbers[(i - 1)]));`)))
) {
  if (currentCode.includes(`lotto_numbers = [mathRandomInt(1, 40), mathRandomInt(1, 40), mathRandomInt(1, 40), mathRandomInt(1, 40), mathRandomInt(1, 40), mathRandomInt(1, 40), mathRandomInt(1, 40)];`)) {
    setPassCondition(true)
    setCurrentExercisePoints(3)
  } else if (currentCode.includes(`lotto_numbers = [mathRandomInt(0, 40), mathRandomInt(0, 40), mathRandomInt(0, 40), mathRandomInt(0, 40), mathRandomInt(0, 40), mathRandomInt(0, 40), mathRandomInt(0, 40)];`)) {
    setPassCondition(true)
    setCurrentExercisePoints(2)
  } else if (currentCode.includes(`lotto_numbers = [mathRandomInt(0, 40), mathRandomInt(0, 40), mathRandomInt(0, 40)`) || currentCode.includes(`lotto_numbers = [mathRandomInt(1, 40), mathRandomInt(1, 40), mathRandomInt(1, 40)`)) {
    setPassCondition(true)
    setCurrentExercisePoints(1)
  }
}
      MusicMaker.play()
    }
  }
  
  const generateCode = () => {
    MusicMaker.queue_ = []
    MusicQueue.queue = []
    let apple=1
    let code = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
    let outputArea = document.getElementById("output")
    outputArea.value = "Program output: \n\n" + code
    try {
      //console.log(code)
      eval(javascriptGenerator.workspaceToCode(primaryWorkspace.current))
      currentCode = code
      MusicQueue.queue.forEach((note) => {
        playSound(note)
      })
    } catch(error) {
      console.log(error)
    }
    currentAnswers.apple=apple
    checkAnswer()
  }

  const checkPassCondition = () => {
    if (passCondition) {
      if (exerciseNumber === "2") {
        let repeatNotUsed = true
        let forUsed = false
        primaryWorkspace.current.getAllBlocks().forEach((block) => {
          if (block.type === "controls_repeat") {
            repeatNotUsed = false
          }
          if ((block.type === "controls_for")) {
            forUsed = true
          }
        })
        if (repeatNotUsed && forUsed) {
          setBadgeStates(badgeStates.set("Exercise2ForLoop",true))
          setBadgeUnlocked(true)
        }
      }
      handleClear()
    } else {
      setErrorOpen(true)
    }
  }

  const darkTheme = Blockly.Theme.defineTheme('dark', {
  name: 'dark',
  base: Blockly.Themes.Classic,
  componentStyles: {
    workspaceBackgroundColour: '#1e1e1e',
    toolboxBackgroundColour: '#333',
    toolboxForegroundColour: '#fff',
    flyoutBackgroundColour: '#252526',
    flyoutForegroundColour: '#ccc',
    flyoutOpacity: 1,
    scrollbarColour: '#797979',
    insertionMarkerColour: '#fff',
    insertionMarkerOpacity: 0.3,
    scrollbarOpacity: 0.4,
    cursorColour: '#d0d0d0',
  },
});

//Determines the initial state of the blockly component and settings
  useEffect(() => {
    if(points.get(exerciseNumber)<0){points.set(exerciseNumber,0)}
    const {initialXml, children, ...rest} = props;
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current, 
      maxBlocks: 10,
      trashcan: true, 
      zoom: {controls: true, wheel: true, maxScale: 1.5, minScale: 0.5}, 
      //theme: darkTheme,
      //sounds: true,
      toolboxPosition: "end",
      ...rest,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.utils.xml.textToDom(initialXml),
        primaryWorkspace.current,
      );
    }
  }, [primaryWorkspace, toolbox, blocklyDiv, props]);

  return (
    <React.Fragment>
      <BlocklyAlert handleReset={handleReset} snackOpen={errorOpen} closeSnack={closeError} warningState={warningOpen} closeWarning={closeWarning} ></BlocklyAlert>
      <GamifiedSolveDialog open={solveDialogOpen} handleDispose={handleDispose} points={currentExercisePoints} badgeUnlocked={badgeUnlocked} blockUnlocked={blockUnlocked}></GamifiedSolveDialog>
      <div ref={blocklyDiv} id="blocklyDiv" />
      <div ref={toolbox}>
        {props.children}
      </div>
      <Stack direction="row">
        <button onClick={generateCode}>Generate code</button>
        <button id="red-button" onClick={openWarning}>Reset blocks</button>
        <button id="evaluate-button" onClick={checkPassCondition}>Evaluate</button>
      </Stack>
    </React.Fragment>
  );
}

export default BlocklyComponent;