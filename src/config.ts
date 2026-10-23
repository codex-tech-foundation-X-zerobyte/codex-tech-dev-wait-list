export const config = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL as string | undefined,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined,
  whatsappUrl: (import.meta.env.VITE_WHATSAPP_CHANNEL_URL as string | undefined) || '',
  telegramUrl: (import.meta.env.VITE_TELEGRAM_CHANNEL_URL as string | undefined) || '',
}
