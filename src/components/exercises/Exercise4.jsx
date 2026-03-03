import BlocklyComponent, {Block, Value, Field, Shadow, Category} from '../blockly/blocklyComponents/index.js'
import '../blockly/blocks/customblocks.js';
import '../blockly/generator/generator';

const Exercise4 = ({appReference, updatePoints, points, badgeStates, setBadgeStates, rewardBlocks, setRewardBlock, setOpenDialog, setHelpDialogText}) => {
    let unlockableBlock = <Block type="locked_sound_block"></Block>
    if (rewardBlocks.get("rewardBlock") === true) {
      unlockableBlock = <Block type="sound_block"></Block>
    }
    return (
      <>
        <BlocklyComponent
            appReference={appReference}
            exerciseNumber={"4"}
            updatePoints={updatePoints}
            points={points}
            rewardBlocks={rewardBlocks}
            setRewardBlock={setRewardBlock}
            badgeStates={badgeStates}
            setBadgeStates={setBadgeStates}
            setOpenDialog={setOpenDialog}
            setHelpDialogText={setHelpDialogText}
            sounds={false}
            readOnly={false}
            trashcan={true}
            maxBlocks={50}
            move={{
              scrollbars: true,
              drag: true,
              wheel: true,
          }}
          initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"></xml>`}>
          {unlockableBlock}
          <Block type="lists_create_with"></Block>
          <Block type="lists_getIndex"></Block>
          <Block type="lists_sort"></Block>
          <Block type="print_block"></Block>
          <Block type="variables_set"></Block>
          <Block type="variables_get"></Block>
          <Block type="text"/>
          <Block type="math_number">
            <Field name="NUM" NUM={10}></Field>
          </Block>
          <Block type="math_on_list"></Block>
          <Block type="math_random_int"></Block>
          <Block type="math_arithmetic"></Block>
          <Block type="controls_for" />
          <Block type="controls_forEach" />
        </BlocklyComponent>
        </>
    )
}

export default Exercise4