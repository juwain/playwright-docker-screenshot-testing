import { test, expect } from '@playwright/test';
import { gotoStory } from '../../visual-testing/storybook-utils';

test.describe('Badge', () => {
  test('default', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-badge--default');
    await expect(component).toHaveScreenshot();
  });

  test('success', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-badge--success');
    await expect(component).toHaveScreenshot();
  });

  test('warning', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-badge--warning');
    await expect(component).toHaveScreenshot();
  });

  test('error', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-badge--error');
    await expect(component).toHaveScreenshot();
  });

  test('info', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-badge--info');
    await expect(component).toHaveScreenshot();
  });

  test('small', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-badge--small');
    await expect(component).toHaveScreenshot();
  });

  test('all variants', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-badge--all-variants');
    await expect(component).toHaveScreenshot();
  });
});
