
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pghxrhhhciippppzdian.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnaHhyaGhoY2lpcHBwcHpkaWFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3MzY1NDAsImV4cCI6MjAzNTMxMjU0MH0.X0ZMCftPZQFd-WY9PHHhmJVSBoX3S75nJACwnlW7Sho"
export const supabase = createClient(supabaseUrl, supabaseKey)