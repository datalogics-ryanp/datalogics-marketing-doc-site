import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        green: {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82',
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16'
        },
        midnight: {
          50: '#ecf8ff',
          100: '#d5edff',
          200: '#b4e2ff',
          300: '#81d1ff',
          400: '#45b5ff',
          500: '#1b92ff',
          600: '#0370ff',
          700: '#0059f8',
          800: '#0547c8',
          900: '#0b409d',
          950: '#051026',
        },
        primary: '#0C70F2',
        'primary-focus': '#063573',
        secondary: '#F224AC',
        accent: '#F2A20C',
        grey: '#636363',
        neutral: '#063573',
        'base-100': '#051026',
        'base-content': '#021733',
        info: '#FFFFFF',
        success: '#36D399',
        warning: '#F2D424',
        error: '#F23924',
        'primary-text-content': '#636363',
        'primary-focus': '#063573',
        'base-content': '#021733',
        'primary-content': '#A8CDFB',
      }
    }
  }
}
