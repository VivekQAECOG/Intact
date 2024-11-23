
const { defineConfig, chromium} = require('@playwright/test');

require('dotenv').config();

module.exports = defineConfig({

  testDir: './tests',

  timeout: 30 * 1000,

  expect:{
    timeout: 5000
  },

  fullyParallel: true,

  reporter: 'html',
 
  use: {
    browserName:'chromium',
    baseURL: process.env.BStackDemoURL,
    headless:false,
    screenshot:'on',
    trace:'on'
  },

});

