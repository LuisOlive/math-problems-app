const esbuild = require('esbuild')

/** @type {esbuild.BuildOptions} */
const config = {
  entryPoints: ['src/app.ts'],
  bundle: true,
  external: ['./node_modules/*'],
  outfile: 'app.js',
  platform: 'node',
  watch: true
}

esbuild
  .build(config)
  .then(() => console.log('watching file changes...'))
  .catch(() => process.exit(1))
