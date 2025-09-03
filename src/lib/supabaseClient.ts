import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project URL and anon key
const supabaseUrl = 'https://eqjjfegtcwedcsgugcay.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxampmZWd0Y3dlZGNzZ3VnY2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4OTA0MTcsImV4cCI6MjA3MjQ2NjQxN30.M5x9qJuye47VpV_QxuNdlRQ5pt9LLB32Qu3WAUFLnU8';

export const supabase = createClient(supabaseUrl, supabaseKey);
