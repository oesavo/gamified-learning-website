import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material"

const ExerciseInfo = ({exerciseNo, instructionsText}) => {
    return(
        <Accordion defaultExpanded sx={(theme) => ({
                  boxShadow: 1,
                  bgcolor: '#303030',
                  backgroundColor: 'rgb(35, 36, 38)',
                  color: '#fff',
                  borderRadius: 2,
                  textAlign: 'left',
                  fontSize: '0.875rem',
                  fontWeight: '700',
                  ...theme.applyStyles('dark', {
                    bgcolor: '#101010',
                    color: 'grey.300',
                  }),
                })}>
                <AccordionSummary sx={(theme) => ({borderRadius: 2})}>
                  <Typography variant='overline'>{exerciseNo}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body2'>{instructionsText}</Typography>
                </AccordionDetails>
              </Accordion>
    )
}

export default ExerciseInfo