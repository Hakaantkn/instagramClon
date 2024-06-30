import { useEffect, useState } from 'react'
import { Container, Box} from '@mui/material';
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { InstagramWrapper } from './components/instagramWrapper';
import { supabase } from './supabase/instance';
function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (
      <>
      <Container maxWidth="lg" width="100%" sx={{height: "100%", marginTop: '1rem'}}>
        <Box sx={{flexGrow: 1}} height="100%">
          <InstagramWrapper />
        </Box>
      </Container>
      </>
    )
  }
    }
  


export default App
