import { test, expect } from '@playwright/test';
import { gotoStory } from '../../visual-testing/storybook-utils';

test.describe('Input', () => {
  test('default', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-input--default');
    await expect(component).toHaveScreenshot();
  });

  test('with label', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-input--with-label');
    await expect(component).toHaveScreenshot();
  });

  test('error', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-input--error');
    await expect(component).toHaveScreenshot();
  });

  test('disabled', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-input--disabled');
    await expect(component).toHaveScreenshot();
  });

  test('with value', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-input--with-value');
    await expect(component).toHaveScreenshot();
  });

  test('focused', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-input--with-label');
    await component.locator('input').focus();
    await expect(component).toHaveScreenshot();
  });
});
