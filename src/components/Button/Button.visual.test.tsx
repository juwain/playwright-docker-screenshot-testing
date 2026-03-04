import { test, expect } from '@playwright/test';
import { gotoStory } from '../../visual-testing/storybook-utils';

test.describe('Button', () => {
  test('primary', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-button--primary');
    await expect(component).toHaveScreenshot();
  });

  test('secondary', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-button--secondary');
    await expect(component).toHaveScreenshot();
  });

  test('danger', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-button--danger');
    await expect(component).toHaveScreenshot();
  });

  test('disabled', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-button--disabled');
    await expect(component).toHaveScreenshot();
  });

  test('hover', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-button--primary');
    // Use first button element inside storybook-root, avoiding Storybook UI buttons
    const button = component.locator('button.button').first();
    await button.hover();
    await expect(component).toHaveScreenshot();
  });

  test('small', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-button--small');
    await expect(component).toHaveScreenshot();
  });

  test('large', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-button--large');
    await expect(component).toHaveScreenshot();
  });
});
