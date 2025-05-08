import BlocklyComponent, {Block, Value, Field, Shadow, Category} from '../blockly/blocklyComponents/index.js'
import '../blockly/blocks/customblocks.js';
import '../blockly/generator/generator';

const Exercise2 = (props) => {
    return (
        <BlocklyComponent 
        appReference={props.appReference}
        readOnly={false}
        trashcan={true}
        
        move={{
          scrollbars: true,
          drag: true,
          wheel: true,
      }}
      initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" x="0" y="0"></block></xml>`}>
      <Block type="print_block"></Block>
      <Block type="win_block"/>
    </BlocklyComponent>
    )
}

export default Exercise2