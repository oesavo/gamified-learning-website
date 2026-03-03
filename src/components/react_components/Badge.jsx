import { Avatar, Card, CardContent, CardMedia, CardHeader, Typography, Divider, Stack, CardActionArea } from "@mui/material"
import Loop from "./material-icons/cycle_60dp_B89230_FILL0_wght400_GRAD0_opsz48.svg"
import MusicNote from "./material-icons/music_note_2_60dp_B89230_FILL0_wght400_GRAD0_opsz48.svg"
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
      if (iconImage === "Loop") {
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
                    <Avatar src={Loop} sx={{marginTop: 1}}></Avatar>
                    <Typography variant="caption" sx={{color: "gold", fontSize: 12, marginTop: 2, marginLeft: 1}}>{achievementTitle}</Typography>    
                </Stack>
              </CardActionArea>
          </Card>
      )
      } else if (iconImage === "MusicNote") {
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
                    <Avatar src={MusicNote} sx={{marginTop: 1}}></Avatar>
                    <Typography variant="caption" sx={{color: "gold", fontSize: 12, marginTop: 2, marginLeft: 1}}>{achievementTitle}</Typography>    
                </Stack>
              </CardActionArea>
          </Card>
      )
      }
  }
}

export default Badge