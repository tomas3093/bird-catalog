// Memory optimizations: https://www.bigbinary.com/blog/how-we-fixed-the-cypress-out-of-memory-error-in-chromium-browsers

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (['chrome', 'edge'].includes(browser.name)) {
          // if (browser.isHeadless) {
          //   launchOptions.args.push('--no-sandbox');
          //   launchOptions.args.push('--disable-gl-drawing-for-tests');
          //   launchOptions.args.push('--disable-gpu');
          // }
          launchOptions.args.push('--js-flags=--max-old-space-size=4500');
        }
        return launchOptions;
      });
    },
  },
});
