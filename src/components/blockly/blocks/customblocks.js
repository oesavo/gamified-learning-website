import * as Blockly from 'blockly/core';

const testReactField = {
  type: 'test_react_field',
  message0: 'Valitse numero %1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'VALUE',
      //text: 'Click me',
      options: [["1","1"],["2","2"]]
    },
  ],
  previousStatement: null,
  nextStatement: null,
};

Blockly.Blocks['test_react_field'] = {
  init: function () {
    this.jsonInit(testReactField);
    this.setStyle('loop_blocks');
  },
};

const theWinBlock = {
  type: 'win_block',
  message0: 'Valitse tämä voittaaksesi',
  previousStatement: null,
  nextStatement: null,
}

Blockly.Blocks['win_block'] = {
  init: function () {
    this.jsonInit(theWinBlock);
    this.setStyle('loop_blocks');
    this.setTooltip('This block lets you win instantly.');
    this.setColour(0);
    //this.setDisabledReason(true, "locked")
  },
}

const printBlock = {
  type: 'print_block',
}

Blockly.Blocks['print_block'] = {
  init: function() {
    this.jsonInit(printBlock)
      this.appendValueInput('PRINTVALUE')
      .appendField('Console.log');
      this.setInputsInline(true)
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('Print JavaScript objects in console.');
      this.setHelpUrl('');
      this.setColour(225);
  }
}

const assignVarBlock = {
  type: 'variable_block',
}

Blockly.Blocks['variable_block'] = {
  init: function() {
    this.appendValueInput('number_value')
    .appendField('let')
    .setAlign(Blockly.inputs.Align.RIGHT)
    .setCheck('Number')
      .appendField(new Blockly.FieldDropdown([
          ['apple', 'APPLENUM'],
          ['pear', 'PEARNUM'],
          ['fruits', 'FRUITSNUM']
        ]), 'variables');
    this.setInputsInline(true)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Assign a numeric value to a variable.');
    this.setColour(135);
  }
}

const addOneBlock = {
  type: 'add_one_block',
}

Blockly.Blocks['add_one_block'] = {
  init: function() {
    this.appendValueInput('VALUE')
    .setCheck('Number')
    .appendField('apple +');
    this.setInputsInline(true)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Add one to the variable apple');
    this.setColour(195);
  }
}

const variable_apple = {
  type: 'variable_apple',
}

Blockly.Blocks['variable_apple'] = {
  init: function() {
    this.appendDummyInput('NAME')
      .appendField('apple');
    this.setInputsInline(true)
    //this.setOutput(true, null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Apple variable that stores the number of apples');
    this.setColour(15);
  }
}

const sound_block = {
  type: 'sound_block',
  message0: 'Play %1',
  args0: [
      {
        type: 'field_dropdown',
        name: 'SOUND',
        options: [
          ['C4', 'c4'],
          ['D4', 'd4'],
          ['E4', 'e4'],
          ['F4', 'f4'],
          ['G4', 'g4'],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
  }


Blockly.Blocks['sound_block'] = {
  init: function() {
    this.jsonInit(sound_block)
    this.setTooltip('Select notes to play. Acquired as a reward for completing a challenge.')
  }
}

const locked_sound_block = {
  type: 'locked_sound_block',
  message0: 'Play %1',
  args0: [
      {
        type: 'field_dropdown',
        name: 'SOUND',
        options: [
          ['C4', 'sounds/c4.m4a'],
          ['D4', 'sounds/d4.m4a'],
          ['E4', 'sounds/e4.m4a'],
          ['F4', 'sounds/f4.m4a'],
          ['G4', 'sounds/g4.m4a'],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 270,
  }


Blockly.Blocks['locked_sound_block'] = {
  init: function() {
    this.jsonInit(locked_sound_block)
    this.setTooltip('Unlock this block by completing the challenge of the previous exercise. Plays sounds.')
    this.setDisabledReason(true, "locked")
  }
}

const variableBlock = {
  type: 'variable_block',
}

Blockly.Blocks['variable_block'] = {
  init: function() {
    this.appendValueInput('VALUE')
    .appendField('const i =');
    this.setInputsInline(true)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(195);
  }
}