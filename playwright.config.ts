import { defineConfig } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  testDir: './src',
  testMatch: '**/*.visual.test.tsx',

  // Module resolution for tests
  moduleDirectories: ['node_modules', path.resolve(__dirname, 'src')],

  // Centralized screenshot storage
  snapshotPathTemplate: '__screenshots__/{testFileDir}/{testFileName}-{arg}{ext}',

  // HTML report for visual diff
  reporter: [
    ['html', { outputFolder: 'html-report', open: 'never' }],
    ['list'],
  ],

  // Screenshot comparison settings
  expect: {
    toHaveScreenshot: {
      maxDiffPixels: 100,
      animations: 'disabled',
      caret: 'hide',
    },
    timeout: 10000,
  },

  // Global test settings
  timeout: 30000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  projects: [
    {
      name: 'visual',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
        screenshotMode: 'only-on-failure',
        trace: 'retain-on-failure',
        baseURL: 'http://localhost:6006',
      },
    },
  ],

  // Storybook dev server (started in docker-compose command)
  webServer: {
    command: 'npm run storybook -- --host 0.0.0.0',
    url: 'http://localhost:6006',
    reuseExistingServer: true,
    timeout: 120000,
  },
});
