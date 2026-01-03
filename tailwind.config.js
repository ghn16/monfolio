/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-primary': '#0B0D12',
        'bg-secondary': '#121622',
        'bg-surface': '#0F1320',
        
        // Textes
        'text-primary': '#F5F7FA',
        'text-secondary': '#9CA3AF',
        'text-disabled': '#6B7280',
        
        // Accent & Actions
        'accent': '#6366F1',
        'success': '#22C55E',
        'error': '#EF4444',
        
        // Bordures
        'border-subtle': '#1F2937',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Satoshi', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-accent': '0 0 40px rgba(99, 102, 241, 0.15)',
        'glow-accent-strong': '0 0 60px rgba(99, 102, 241, 0.25)',
        'glow-success': '0 0 40px rgba(34, 197, 94, 0.15)',
      },
    },
  },
  plugins: [],
}