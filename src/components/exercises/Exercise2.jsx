import BlocklyComponent, {Block, Value, Field, Shadow, Category} from '../blockly/blocklyComponents/index.js'
import '../blockly/blocks/customblocks.js';
import '../blockly/generator/generator';

const Exercise2 = (props) => {
    return (
        <BlocklyComponent 
        appReference={props.appReference}
        exerciseNumber={2}
        sounds={false}
        readOnly={false}
        trashcan={true}
        
        move={{
          scrollbars: true,
          drag: true,
          wheel: true,
      }}
      initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"></xml>`}>
        <Block type="print_block"></Block>
        <Block type="win_block"/>
        <Block type="controls_repeat"></Block>
        <Block type='variable_block'></Block>
        <Block type="math_number">
            <Field name="NUM" NUM={10}></Field>
          </Block>
        <Block type="variables_set"></Block>
        <Block type="variables_get"></Block>
        <Block type="add_one_block"></Block>
        <Block type="variable_apple"></Block>
    </BlocklyComponent>
    )
}

export default Exercise2