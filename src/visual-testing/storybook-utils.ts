import { Locator, Page } from '@playwright/test';

/**
 * Navigate to a Storybook story for visual testing.
 * Storybook exposes stories via iframe for isolated rendering.
 *
 * @param page - Playwright page object
 * @param storyId - Storybook story ID (e.g., 'design-system-button--primary')
 * @returns Locator pointing to the story root element
 *
 * @example
 * ```tsx
 * const component = await gotoStory(page, 'design-system-button--primary');
 * await expect(component).toHaveScreenshot();
 * ```
 */
export async function gotoStory(
  page: Page,
  storyId: string,
): Promise<Locator> {
  // Storybook 8 static build uses iframe.html with id and viewMode parameters
  const url = `/iframe.html?id=${storyId}&viewMode=story`;

  await page.goto(url, { waitUntil: 'networkidle' });

  // Wait for story content to render
  await page.waitForSelector('#storybook-root', { timeout: 30000 });

  // Wait for fonts and images to load for consistent screenshots
  await page.evaluate(() => {
    return Promise.all([
      document.fonts.ready,
      ...Array.from(document.images).map(
        (img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
              })
      ),
    ]);
  });

  // Additional wait for Storybook to fully render
  await page.waitForTimeout(500);

  return page.locator('#storybook-root');
}

/**
 * Navigate to a specific component within a story.
 * Useful when a story contains multiple components or a wrapper.
 *
 * @param page - Playwright page object
 * @param storyId - Storybook story ID
 * @param selector - CSS selector for the component within the story
 * @returns Locator pointing to the selected element
 */
export async function gotoStoryComponent(
  page: Page,
  storyId: string,
  selector: string,
): Promise<Locator> {
  await gotoStory(page, storyId);
  return page.locator(`#storybook-root ${selector}`);
}
