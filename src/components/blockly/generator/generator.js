import {javascriptGenerator} from 'blockly/javascript';
import answers from '../../exercises/currentAnswers.json' with {type: 'json'}

javascriptGenerator.forBlock['test_react_field'] = function (block) {
  let value = '\'' + block.getFieldValue('VALUE') + '\''
  return 'console.log(' + value + ');\n';
};

javascriptGenerator.forBlock['win_block'] = function () {
  console.log('voitit pelin')
  return 'setPassCondition(true)'
}

javascriptGenerator.forBlock['print_block'] = function(block) {
  const value_printableobject = javascriptGenerator.valueToCode(block, 'PRINTVALUE', 1)
  answers.answer = answers.answer.concat(value_printableobject)
  const code = 'console.log('+ value_printableobject + ');\n'
  return code;
}

javascriptGenerator.forBlock['variable_block'] = function(block) {
  const blockValue = javascriptGenerator.valueToCode(block, 'number_value', 1)  
  const code = 'console.log('+ blockValue +');\n'
  return code
}

javascriptGenerator.forBlock['add_one_block'] = function(block) {
  const blockValue = javascriptGenerator.valueToCode(block, 'NAME', 1)
  const code = `apple++;\n`
  return code
}

javascriptGenerator.forBlock['variable_apple'] = function(block) {
  const code = `apple`
  return code
}