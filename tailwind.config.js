// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#06080C',
        textColor: '#FFFFFF',
        accent: {
          primary: "#18AEF0",
          secondary: "#06AA78",
          tertiary: "#A66CFF"
        },
      },
      fontSize: {
        xs: ['0.875rem'],
        sm: ['1rem', { lineHeight: '1.4875rem' }],  
        base: '1.125rem',
        lg: '1.75rem',
        xl: ['2.25rem', { lineHeight: '3.5rem' }],
      },    
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      fontWeight: {
        normal: '200',
        bold: '400',
      },
      boxShadow: {
        'inset-dual': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.25), inset 0 -1px 2px 0 rgba(255, 255, 255, 0.25)',
      },
    },
  },
  plugins: [],
};
