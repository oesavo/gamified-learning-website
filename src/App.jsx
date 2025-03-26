import { use, useState } from 'react'

import { Box, Container, TextField } from '@mui/material'

import Footer from './components/footer'
import Timer from './components/timer'

const App = () => {

  const [timer, setTimer] = useState(0)
  
  const handleTimerChange = (event) => {
    setTimer(event)
  }

  return(
    <Box component={"section"} sx={{p:20}}>
      <Container>
        <h1>This is a demo website</h1>
        <p>Time passed: </p>
        <Timer time={timer} setter={handleTimerChange}></Timer>
        <TextField id="outlined-basic" label="Text box" variant="outlined" />
        <button>Reset timer</button>
        <Footer/>
      </Container>
    </Box>
  )
}

export default App
