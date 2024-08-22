import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wcbpdqysjkunetgnyads.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjYnBkcXlzamt1bmV0Z255YWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNjA0NzAsImV4cCI6MjAzOTgzNjQ3MH0.2c2A08KUOLNBtlXkfHwKJ9jIdu3Ueti8hoqvDjnMZEU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
