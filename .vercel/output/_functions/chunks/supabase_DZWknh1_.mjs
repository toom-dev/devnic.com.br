import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://mpwgtmdoyrijrtchpcgr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wd2d0bWRveXJpanJ0Y2hwY2dyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NjU4MjAsImV4cCI6MjA1ODA0MTgyMH0.C3y5UoqDVLnC6R7gh3Dh0KnN1T8EMNJFmKPRQV0tQCc"
);

export { supabase as s };
