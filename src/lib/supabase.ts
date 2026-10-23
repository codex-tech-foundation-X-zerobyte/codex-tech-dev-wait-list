import { createClient } from '@supabase/supabase-js'
import { config } from '../config'
import type { FormValues } from './validate'

export type JoinResult = { ok: true } | { ok: false; message: string }

const client =
  config.supabaseUrl && config.supabaseAnonKey
    ? createClient(config.supabaseUrl, config.supabaseAnonKey, { auth: { persistSession: false } })
    : null

const MESSAGES: Record<string, string> = {
  invalid_email: 'Enter a valid email address.',
  consent_required: 'Please agree so we can contact you.',
  busy: 'We are getting a lot of signups right now. Please try again in a minute.',
  rate_limited: 'Too many attempts. Please wait a while and try again.',
}

export async function joinWaitlist(v: FormValues, website: string): Promise<JoinResult> {
  if (!client) return { ok: false, message: 'The waitlist is not set up yet. Please try again later.' }
  const { data, error } = await client.rpc('join_waitlist', {
    p_email: v.email.trim(),
    p_language: v.language,
    p_provider: v.provider,
    p_note: v.note.trim() || null,
    p_consent: v.consent,
    p_website: website || null,
  })
  if (error) return { ok: false, message: 'Something went wrong. Please try again.' }
  const res = data as { ok: boolean; error?: string }
  if (res.ok) return { ok: true }
  return { ok: false, message: MESSAGES[res.error ?? ''] ?? 'Please check your details and try again.' }
}
