import { Dialog, DialogTitle, Divider, DialogActions, Button, DialogContent, Stack, SvgIcon, Typography } from "@mui/material"

import EmptyStar from './material-icons/star_100dp_EAC452_FILL0_wght400_GRAD0_opsz48.svg'
import FilledStar from './material-icons/star_100dp_EAC452_FILL1_wght400_GRAD0_opsz48.svg'


const GamifiedSolveDialog = ({open, handleDispose, points, badgeUnlocked}) => {
    let contentText = "Congratulations!"
    let badgeText = ""
    const iconStack = (points) => {
        switch (points) {
            case 1:
                contentText = ("There's still room for improvement!")
                return(
                    <>
                        <img src={FilledStar}></img>
                        <img src={EmptyStar}></img>
                        <img src={EmptyStar}></img>
                    </>
                )
            case 2:
                contentText = ("Nicely done!")
                return(
                    <>
                        <img src={FilledStar}></img>
                        <img src={FilledStar}></img>
                        <img src={EmptyStar}></img>
                    </>
                )
            case 3:
                contentText = ("Perfect score!!")
                return(
                    <>
                        <img src={FilledStar}></img>
                        <img src={FilledStar}></img>
                        <img src={FilledStar}></img>
                    </>
                )
            
        }
    }
    if (badgeUnlocked) {
        badgeText = "New badge unlocked! Check your badges in the exercise!"
    }

    return(
        <Dialog open={open} id="ratkaistu"
        sx={(theme) => ({
            p: 1,
            m: 1,
            borderRadius: 2,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: '700',
            ...theme.applyStyles('dark', {
              bgcolor: '#101010',
              color: 'grey.300',
            }),
          })}>
            <DialogTitle>You solved the exercise!</DialogTitle>
            <Divider></Divider>
            <DialogContent>
                <Stack direction="row" spacing={8}>
                    {iconStack(points)}
                </Stack>
                <br></br>
                <Typography>{contentText}</Typography>
                <Typography>{badgeText}</Typography>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleDispose}>Next exercise</Button>
            </DialogActions>
        </Dialog>
    )
}

export default GamifiedSolveDialog