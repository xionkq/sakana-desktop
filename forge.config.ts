import type { ForgeConfig } from '@electron-forge/shared-types'
import { MakerSquirrel } from '@electron-forge/maker-squirrel'
import { MakerZIP } from '@electron-forge/maker-zip'
import { MakerDeb } from '@electron-forge/maker-deb'
import { MakerRpm } from '@electron-forge/maker-rpm'
import { VitePlugin } from '@electron-forge/plugin-vite'

const config: ForgeConfig = {
  packagerConfig: {
    icon: './public/favicon',
    ignore: [
      new RegExp('/.idea'),
      // new RegExp('/.vite'),
      new RegExp('/node_modules'),
      new RegExp('/src'),
      new RegExp('/.editorconfig'),
      new RegExp('/.gitignore'),
      new RegExp('/.npmrc'),
      new RegExp('/.prettierignore'),
      new RegExp('/.prettierrc'),
      new RegExp('/forge.config.ts'),
      new RegExp('/README.md'),
      new RegExp('/tsconfig.json'),
      new RegExp('/vite.main.config.ts'),
      new RegExp('/vite.preload.config.ts'),
      new RegExp('/vite.renderer.config.ts'),
    ],
  },
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'xionkq',
          name: 'sakana-desktop'
        },
        prerelease: false,
        draft: true,
      }
    }
  ],
  makers: [
    // new MakerSquirrel({}),
    new MakerZIP({}, ['win32']),
    new MakerRpm({}),
    new MakerDeb({}),
  ],
  plugins: [
    new VitePlugin({
      // `build` can specify multiple entry builds, which can be Main process, Preload scripts, Worker process, etc.
      // If you are familiar with Vite configuration, it will look really familiar.
      build: [
        {
          // `entry` is just an alias for `build.lib.entry` in the corresponding file of `config`.
          entry: 'src/main.ts',
          config: 'vite.main.config.ts',
        },
        {
          entry: 'src/scripts/preload.ts',
          config: 'vite.preload.config.ts',
        },
      ],
      renderer: [
        {
          name: 'main_window',
          config: 'vite.renderer.config.ts',
        },
      ],
    }),
  ],
}

export default config
