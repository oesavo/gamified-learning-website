import BlocklyComponent, {Block, Value, Field, Shadow, Category} from '../blockly/blocklyComponents/index.js'
import '../blockly/blocks/customblocks.js';
import '../blockly/generator/generator';

const Exercise2 = ({appReference, updatePoints, points}) => {
    return (
        <BlocklyComponent 
        appReference={appReference}
        exerciseNumber={"2"}
        updatePoints={updatePoints}
        points={points}
        sounds={false}
        readOnly={false}
        trashcan={true}
        maxBlocks={10}
        move={{
          scrollbars: true,
          drag: true,
          wheel: true,
      }}
      initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"></xml>`}>
        <Block type="controls_repeat"></Block>
        <Block type="math_number">
            <Field name="NUM" NUM={10}></Field>
        </Block>
        <Block type="add_one_block"></Block>
        <Block type="variable_apple"></Block>
    </BlocklyComponent>
    )
}

export default Exercise2