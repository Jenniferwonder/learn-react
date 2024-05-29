// uno.config.ts
import { defineConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons/browser'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetIcons({ /* options */
      prefix: 'i-',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      // ...
      },
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        logos: () => import('@iconify-json/logos/icons.json').then(i => i.default),
      },
    }),
  ],
})
