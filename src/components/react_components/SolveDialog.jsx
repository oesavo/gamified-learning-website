import { Dialog, DialogTitle, Divider, DialogActions, Button } from "@mui/material"

const SolveDialog = ({open, handleDispose}) => {
  return(
    <Dialog open={open}>
        <DialogTitle>You solved the exercise!</DialogTitle>
        <Divider></Divider>
        <DialogActions>
          <Button onClick={handleDispose}>Next exercise</Button>
        </DialogActions>
    </Dialog>
  )
}

export default SolveDialog