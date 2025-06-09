import BlocklyComponent, {Block, Value, Field, Shadow, Category} from '../blockly/blocklyComponents/index.js'
import '../blockly/blocks/customblocks.js';
import '../blockly/generator/generator';

const Exercise3 = ({appReference, updatePoints, points, badgeStates, setBadgeStates, rewardBlocks, setRewardBlock}) => {
    let unlockableBlock = <Block type="text"></Block>
    if (rewardBlocks.get("rewardBlock") === true) {
      unlockableBlock = <Block type="win_block"></Block>
    }
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
            maxBlocks={10}
            move={{
              scrollbars: true,
              drag: true,
              wheel: true,
          }}
          initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" x="0" y="0"></block></xml>`}>
          {unlockableBlock}
          <Block type="win_block"></Block>
          <Block type="text_append"></Block>
          <Block type="text_join"></Block>
          <Block type="text_length"></Block>
          <Block type="text_isEmpty"></Block>
          <Block type="text_indexOf"></Block>
          <Block type="text_charAt"></Block>
          <Block type="text_getSubstring"></Block>
          <Block type="text_changeCase"></Block>
          <Block type="text_trim"></Block>
          <Block type="text_count"></Block>
          <Block type="text_replace"></Block>
          <Block type="text_reverse"></Block>
          <Block type="text_print"></Block>
          <Block type="text_prompt_ext"></Block>
          <Block type="print_block"></Block>
          <Block type="variables_set"></Block>
          <Block type="variables_get"></Block>
          <Block type="text"/>
          <Block type="math_number">
            <Field name="NUM" NUM={10}></Field>
          </Block>
          <Block type="test_react_field"></Block>
          <Block type="controls_ifelse" />
          <Block type="logic_compare" />
          <Block type="logic_operation" />
          <Block type="controls_repeat_ext">
            <Value name="TIMES">
              <Shadow type="math_number">
                <Field name="NUM"></Field>
              </Shadow>
            </Value>
          </Block>
          <Block type="logic_operation" />
          <Block type="logic_negate" />
          <Block type="logic_boolean" />
          <Block type="logic_null" disabled="true" />
          <Block type="logic_ternary" />
          <Block type="text_charAt">
            <Value name="VALUE">
              <Block type="variables_get">
                <Field name="VAR"></Field>
              </Block>
            </Value>
          </Block>
        </BlocklyComponent>
        </>
    )
}

export default Exercise3