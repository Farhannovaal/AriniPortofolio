import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/supabase'

// Create Supabase client
export const supabase = createClient<Database>(
  'https://xyrcjvuxxvdpghcvsjzf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5cmNqdnV4eHZkcGdoY3ZzanpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMDAyNzMsImV4cCI6MjA1NDY3NjI3M30.r1hFGtfJXMvx2r09MxjQQYSg30njFXdHzwAo80HeiNc'
)