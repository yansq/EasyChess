import { defineConfig } from 'unocss'
import { presetUno, presetAttributify } from 'unocss'
import transformetAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify()
  ],
  transformers: [
    transformetAttributifyJsx()
  ],
  rules: [
    ['red', { color: 'red' }]
  ],
})
