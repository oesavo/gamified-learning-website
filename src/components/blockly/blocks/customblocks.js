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

