import { Accordion, AccordionSummary, AccordionDetails, Typography, Divider } from "@mui/material"

const ExerciseInfo = ({exerciseNo, instructionsText, challengeText, achievements}) => {
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
                <AccordionSummary sx={(theme) => ({borderRadius: 2, height: 0})}>
                  <Typography variant='overline'>{exerciseNo}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body2' sx={{marginBottom: 1}}>Task: {instructionsText}</Typography>
                  <Divider sx={{bgcolor: 'lightslategray'}}/>
                  <Typography variant='body3' sx={{fontWeight: "bold"}}>{challengeText}</Typography>
                  {achievements}
                </AccordionDetails>
              </Accordion>
    )
}

export default ExerciseInfo