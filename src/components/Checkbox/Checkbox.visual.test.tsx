import { test, expect } from '@playwright/test';
import { gotoStory } from '../../visual-testing/storybook-utils';

test.describe('Checkbox', () => {
  test('unchecked', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-checkbox--unchecked');
    await expect(component).toHaveScreenshot();
  });

  test('checked', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-checkbox--checked');
    await expect(component).toHaveScreenshot();
  });

  test('indeterminate', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-checkbox--indeterminate');
    await expect(component).toHaveScreenshot();
  });

  test('disabled', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-checkbox--disabled');
    await expect(component).toHaveScreenshot();
  });

  test('disabled checked', async ({ page }) => {
    const component = await gotoStory(page, 'design-system-checkbox--disabled-checked');
    await expect(component).toHaveScreenshot();
  });
});
