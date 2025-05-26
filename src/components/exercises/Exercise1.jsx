import BlocklyComponent, {Block, Value, Field, Shadow, Category} from '../blockly/blocklyComponents/index.js'
import '../blockly/blocks/customblocks.js';
import '../blockly/generator/generator';

const Exercise1 = ({appReference, updatePoints,points}) => {

    return (
      <>
        <BlocklyComponent
            appReference={appReference}
            exerciseNumber={"1"}
            updatePoints={updatePoints}
            points={points}
            sounds={false}
            readOnly={false}
            trashcan={true}
            maxBlocks={4}
            move={{
              scrollbars: true,
              drag: true,
              wheel: true,
          }}
          initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"></xml>`}>
          <Block type="print_block"></Block>
          <Block type="text"/>
        </BlocklyComponent>
        </>
    )
}

export default Exercise1