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