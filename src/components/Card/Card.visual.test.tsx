import { test, expect } from '@playwright/test';
import { gotoStory } from '../../visual-testing/storybook-utils';

test.describe('Card', () => {
  test('default', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-card--default');
    await expect(component).toHaveScreenshot();
  });

  test('with title', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-card--with-title');
    await expect(component).toHaveScreenshot();
  });

  test('with footer', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-card--with-footer');
    await expect(component).toHaveScreenshot();
  });

  test('outlined', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-card--outlined');
    await expect(component).toHaveScreenshot();
  });

  test('elevated', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-card--elevated');
    await expect(component).toHaveScreenshot();
  });

  test('full example', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-card--full-example');
    await expect(component).toHaveScreenshot();
  });
});
