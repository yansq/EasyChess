import { defineConfig } from 'unocss'
import { presetUno, presetAttributify } from 'unocss'
import transformetAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer !outline-none hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  ],
  presets: [
    presetUno(),
    presetAttributify()
  ],
  transformers: [
    transformetAttributifyJsx()
  ],
  theme: {
    colors: {
      'board': {
        'primary': '#B58862',
        'secondary': '#F0D9B5'
      }
    }
  }
})
