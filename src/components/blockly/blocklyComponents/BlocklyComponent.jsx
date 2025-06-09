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

  //Prop references from the main app class used for communication between components
  const switchToNextExercise = props.appReference
  const exerciseNumber = props.exerciseNumber
  const updatePoints = props.updatePoints
  const points = props.points
  const badgeStates = props.badgeStates
  const setBadgeStates = props.setBadgeStates
  const rewardBlocks = props.rewardBlocks
  const setRewardBlocks = props.setRewardBlocks


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

  const checkAnswer = () => {
    let correctAnswer = null
    function checkAnswer(answer) {
      if (exerciseNumber === "1") {
        correctAnswer = modelAnswers.exercise1
        return answer === modelAnswers.exercise1
      }
      if (exerciseNumber === "2") {
        correctAnswer = modelAnswers.exercise2
        return answer === modelAnswers.exercise2
      }
    }
    if (currentAnswers.answer.find(checkAnswer) === correctAnswer) {
      setPassCondition(true)
      setCurrentExercisePoints(3)
    }
    if (currentAnswers.apple === 10) {
      setPassCondition(true)
      if (primaryWorkspace.current.getAllBlocks().length <= 4) {
        setCurrentExercisePoints(3)
        setRewardBlocks(rewardBlocks.set("rewardBlock", true))
      } else if (primaryWorkspace.current.getAllBlocks().length === 5) {
        setCurrentExercisePoints(2)
      } else {
        setCurrentExercisePoints(1)
      }
    }

  }
  
  const generateCode = () => {
    currentAnswers.answer = []
    let apple=5
    var code = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
    let outputArea = document.getElementById("output")
    outputArea.value = "Program output: \n\n" + code
    try {
      //console.log(code)
      eval(code)
    } catch(error) {
      console.log(error)
    }
    currentAnswers.apple=apple
    checkAnswer()
  }

  const checkPassCondition = () => {
    
    if (passCondition) {
      if (exerciseNumber === "3" && primaryWorkspace.current.getAllBlocks().length <= 3) {
        setBadgeStates(badgeStates.set("Exercise3Efficiency",true))
        setBadgeUnlocked(true)
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
      <GamifiedSolveDialog open={solveDialogOpen} handleDispose={handleDispose} points={currentExercisePoints} badgeUnlocked={badgeUnlocked}></GamifiedSolveDialog>
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