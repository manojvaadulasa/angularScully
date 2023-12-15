import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'demo',
  distFolder: './dist/dummy-scully', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
};
