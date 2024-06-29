import { useState } from 'react'
import { Container, Box} from '@mui/material';
import { InstagramWrapper } from './components/instagramWrapper';
function App() {

  return (
    <>
    <Container maxWidth="lg" width="100%" sx={{height: "100%"}}>
      <Box sx={{flexGrow: 1}}>
        <InstagramWrapper />
      </Box>
    </Container>
    </>
  )
}

export default App
