import { Avatar, Card, CardContent, CardMedia, CardHeader, Typography, Divider, Stack, CardActionArea } from "@mui/material"
import Efficiency from "./material-icons/energy_program_saving_60dp_48752C_FILL1_wght400_GRAD0_opsz48.svg"
import Lock from "./material-icons/lock_60dp_CCCCCC_FILL1_wght400_GRAD0_opsz48.svg"

const Badge = ({collectedState, iconImage, achievementTitle, achievementDescription, helpDialogSetter, helpTextSetter}) => {
  const showDescription = () => {
    helpTextSetter(["Badge info",achievementDescription])
    helpDialogSetter()
  }
    if(collectedState === false){
        return(
            <Card variant="outlined" sx={{
            p: 1,
            m: 1,
            borderRadius: 10,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: '700',
            backgroundColor: "gray",
            borderColor: "lightgray",
            maxWidth: 180, 
            maxHeight: 50 }}>
            <CardActionArea
            onClick={showDescription}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <Stack direction="row" >
                <Avatar src={Lock} sx={{marginTop: 1}}></Avatar>
                <Typography variant="caption" sx={{color: "white", fontSize: 12, marginTop: 2}}>Badge locked</Typography>    
            </Stack>
          </CardActionArea>
        </Card>
        )
    } else if(collectedState) {
      return(
          <Card variant="outlined" sx={{
              p: 1,
              m: 1,
              borderRadius: 10,
              textAlign: 'center',
              fontSize: '0.875rem',
              fontWeight: '700',
              backgroundColor: "darkslategray", 
              borderColor: 'gold',
              maxWidth: 250, 
              maxHeight: 50 }}>
              
              <CardActionArea
                onClick={showDescription}
                sx={{
                  height: '100%',
                  '&[data-active]': {
                    backgroundColor: 'action.selected',
                    '&:hover': {
                      backgroundColor: 'action.selectedHover',
                    },
                  },
                }}
              >
                <Stack direction="row" >
                    <Avatar src={Efficiency} sx={{marginTop: 1}}></Avatar>
                    <Typography variant="caption" sx={{color: "gold", fontSize: 12, marginTop: 2, marginLeft: 1}}>{achievementTitle}</Typography>    
                </Stack>
              </CardActionArea>
          </Card>
      )
  }
}

export default Badge