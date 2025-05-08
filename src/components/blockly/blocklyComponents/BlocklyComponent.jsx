import React from 'react';
import './BlocklyComponent.css';
import modelAnswers from '../../exercises/modelAnswers.json' with {type: 'json'}
import currentAnswers from '../../exercises/currentAnswers.json' with {type: 'json'}

import {useEffect, useRef, use, useState} from 'react';
import { Alert, Button, Dialog, DialogTitle, Snackbar} from '@mui/material';

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

  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false)
  const [warningState, setWarningState] = useState(false)
  const [passCondition, setPassCondition] = useState(false)
  const appReference = props.appReference

  const vertical = "center"
  const horizontal = "top"

  const handleClear = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleReset = () => {
    primaryWorkspace.current.clear()
    closeWarning()
  }
  const handleDispose = () => {
    handleClose()
    document.getElementById("output").value = "Program output: \n\n"
    primaryWorkspace.current.dispose()
    appReference()
  }
  const openWarning = () => {
    setWarningState(true)
  }
  const closeWarning = () => {
    setWarningState(false)
  }

  const closeSnack = () => {
    setSnackOpen(false)
  }

  const checkAnswer = () => {
    function checkAnswer(answer) {
      return answer === modelAnswers.exercise1;
    }
    if (currentAnswers.answer.find(checkAnswer) === modelAnswers.exercise1) {
      setPassCondition(true)
    }
  }
  
  const generateCode = () => {
    currentAnswers.answer = []
    var code = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
    let outputArea = document.getElementById("output")
    outputArea.value = "Program output: \n\n" + code
    try {
      //console.log(code)
      eval(code)
    } catch(error) {
      console.log(error)
    }
    checkAnswer()
  }

  const checkPassCondition = () => {
    if (passCondition) {
      handleClear()
    } else {
      setSnackOpen(true)
    }
  }

  useEffect(() => {
    const {initialXml, children, ...rest} = props;
    primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current, 
      maxBlocks: 10,
      trashcan: true, 
      zoom: {controls: true, wheel: true, maxScale: 1.5, minScale: 0.5}, 
      sounds: true,
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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={snackOpen}
        onClose={closeSnack}
        autoHideDuration={2000}>
        <Alert variant="filled" severity="error">
          Try again!
        </Alert>
      </Snackbar>
      <Snackbar anchorOrigin={{ vertical, horizontal }} onClose={closeWarning} open={warningState}>
        <Button variant="contained" color="warning" size="large" onClick={handleReset}>
          Reset blocks?
        </Button>
      </Snackbar>
      <Dialog open={open}>
        <DialogTitle>You solved the problem!</DialogTitle>
        <Button onClick={handleDispose}>Move to next exercise</Button>
      </Dialog>
      <div ref={blocklyDiv} id="blocklyDiv" />
      <div ref={toolbox}>
        {props.children}
      </div>
      <button onClick={generateCode}>Generate code</button>
      <button id="red-button" onClick={openWarning}>Reset blocks</button>
      <br></br>
      <button id="evaluate-button" onClick={checkPassCondition}>Evaluate answer</button>
    </React.Fragment>
  );
}

export default BlocklyComponent;