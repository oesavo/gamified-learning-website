import BlocklyComponent, {Block, Value, Field, Shadow, Category} from '../blockly/blocklyComponents/index.js'
import '../blockly/blocks/customblocks.js';
import '../blockly/generator/generator';

const Exercise3 = ({appReference, updatePoints, points, badgeStates, setBadgeStates, rewardBlocks, setRewardBlock}) => {
    return (
      <>
        <BlocklyComponent
            appReference={appReference}
            exerciseNumber={"3"}
            updatePoints={updatePoints}
            points={points}
            rewardBlocks={rewardBlocks}
            setRewardBlock={setRewardBlock}
            badgeStates={badgeStates}
            setBadgeStates={setBadgeStates}
            sounds={false}
            readOnly={false}
            trashcan={true}
            maxBlocks={15}
            move={{
              scrollbars: true,
              drag: true,
              wheel: true,
          }}
          initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"></xml>`}>
          <Block type="text_prompt_ext"></Block>
          <Block type="print_block"></Block>
          <Block type="variables_set"></Block>
          <Block type="variables_get"></Block>
          <Block type="text"/>
          <Block type="math_number">
            <Field name="NUM" NUM={10}></Field>
          </Block>
          <Block type="controls_ifelse" />
          <Block type="logic_compare" />
          <Block type="controls_repeat_ext">
            <Value name="TIMES">
              <Shadow type="math_number">
                <Field name="NUM"></Field>
              </Shadow>
            </Value>
          </Block>
        </BlocklyComponent>
        </>
    )
}

export default Exercise3