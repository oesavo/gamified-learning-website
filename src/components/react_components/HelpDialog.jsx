
import { Dialog, DialogContent, DialogTitle, IconButton, Divider, Typography } from '@mui/material';
import CloseIcon from './material-icons/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'

const HelpDialog = ({handleDialogClose, openDialog, helpDialogText}) => {

    return(
        <Dialog id="dialog" onClose={handleDialogClose} open={openDialog}
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
        <DialogTitle sx={{ p: 2 }}>Welcome to JavaScript with Blockly</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleDialogClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}>
          <img src={CloseIcon}></img>
        </IconButton>
        <Divider></Divider>
        <DialogContent>
          <Typography sx={{padding: 2}}>{helpDialogText}</Typography>
        </DialogContent>
      </Dialog>
    )
}

export default HelpDialog