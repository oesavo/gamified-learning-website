import {javascriptGenerator} from 'blockly/javascript';
import answers from '../../exercises/currentAnswers.json' with {type: 'json'}

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

javascriptGenerator.forBlock['variable_apple'] = function(block) {
  const numberOFApples = answers.apple
  const code = `${numberOFApples};\n`
  return code
}

javascriptGenerator.forBlock['add_variable_apple'] = function(block) {
  const code = `apple++;\n`
  return code
}

javascriptGenerator.forBlock['remove_variable_apple'] = function(block) {
  const code = `apple--;\n`
  return code
}

javascriptGenerator.forBlock['sound_block'] = function(block) {
  const value = "'" + block.getFieldValue('SOUND') + "'";
  const code = 'playSound(' + value + ');\n';
  return code
}