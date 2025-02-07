import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const API_URL = import.meta.env.VITE_API_URL;
export const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  persistSession: true,
  autoRefreshToken: true,
});
