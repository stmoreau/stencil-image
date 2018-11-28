import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'mycomponent',
  copy: [{
    src: "**/*.jpeg",
    dest: "./images"
  }],
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
