'use server';

import { createClient as createServerClient } from '@supabase/supabase-js';

export function supabaseAdmin(){
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.SUPABASE_SERVICE_ROLE!;
  return createServerClient(url, key, { auth: { autoRefreshToken: false, persistSession: false }});
}
