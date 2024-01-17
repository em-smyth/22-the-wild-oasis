import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ouadptjrnxkliwlwixwb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91YWRwdGpybnhrbGl3bHdpeHdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU0MzY3OTIsImV4cCI6MjAyMTAxMjc5Mn0.M6WcURcq8t5HvWG_aiV-G2ymO1ZNPVb3eto3Krb65zo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
