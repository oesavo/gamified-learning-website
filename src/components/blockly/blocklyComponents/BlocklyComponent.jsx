import React from 'react';
import './BlocklyComponent.css';
import modelAnswers from '../../exercises/modelAnswers.json' with {type: 'json'}
import currentAnswers from '../../exercises/currentAnswers.json' with {type: 'json'}

import {useEffect, useRef, use, useState} from 'react';
import { Alert, Button, Dialog, DialogActions, DialogTitle, Divider, Snackbar, Stack} from '@mui/material';

import BlocklyAlert from '../../react_components/BlocklyAlert';
import SolveDialog from '../../react_components/SolveDialog';

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
  const blocklyDiv = useRef();
  const toolbox = useRef();
  let primaryWorkspace = useRef();

  const [solveDialogOpen, setSolveDialogOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false)
  const [warningOpen, setWarningOpen] = useState(false)
  const [passCondition, setPassCondition] = useState(false)
  const appReference = props.appReference
  const exerciseNumber = props.exerciseNumber
  const updatePoints = props.updatePoints
  const points = props.points

  let apple = 5

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
    updatePoints(points.set(exerciseNumber,3))
    appReference()
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
    }
    if (currentAnswers.apple === 10) {
      setPassCondition(true)
    }
  }
  
  const generateCode = () => {
    currentAnswers.answer = []
    apple=5
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
      handleClear()
    } else {
      setErrorOpen(true)
    }
  }

  useEffect(() => {
    if(points.get(exerciseNumber)<0){points.set(exerciseNumber,0)}
    const {initialXml, children, ...rest} = props;
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current, 
      maxBlocks: 10,
      trashcan: true, 
      zoom: {controls: true, wheel: true, maxScale: 1.5, minScale: 0.5}, 
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
      <SolveDialog open={solveDialogOpen} handleDispose={handleDispose}></SolveDialog>
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