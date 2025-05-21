import { Snackbar, Alert, Button } from "@mui/material"

const BlocklyAlert = ({handleReset, snackOpen, closeSnack, warningState, closeWarning}) => {
    const vertical = "center"
    const horizontal = "top"

    return(
        <>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={snackOpen}
                    onClose={closeSnack}
                    autoHideDuration={2000}>
                    <Alert variant="filled" severity="error">
                        Try again!
                    </Alert>
                </Snackbar>
                <Snackbar anchorOrigin={{ vertical, horizontal }} onClose={closeWarning} open={warningState}>
                    <Button variant="contained" color="warning" size="large" onClick={handleReset}>
                        Reset blocks?
                    </Button>
            </Snackbar>
        </>
    )
}

export default BlocklyAlert