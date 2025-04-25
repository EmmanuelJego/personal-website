/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './pages/**/*.vue',
    './app.vue',
    '../../packages/ui/runtime/components/**/*.{js,vue,ts}'
  ],
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/forms')
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e293b',
          hover: '#334155'
        }
      }
    }
  }
}
