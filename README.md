# Visual Regression Testing System

Система визуального регрессионного тестирования React компонентов с Storybook и Docker.

## Требования

- Node.js 18+
- Docker и docker-compose
- React проект с Vite и Storybook

## Быстрый старт

### Локальная разработка

```bash
# Установка зависимостей
npm install

# Установка браузеров для Playwright
npx playwright install chromium

# Запуск тестов локально (Storybook запускается автоматически)
npm run test:visual:local
```

### Docker (рекомендуется)

```bash
# Запуск тестов в Docker
npm run test:visual
```

## Workflow

### 1. Создание Stories

Создайте файл `*.stories.ts` рядом с компонентом:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};
```

### 2. Написание тестов

Создайте файл `*.visual.test.tsx` рядом с компонентом:

```tsx
import { test, expect } from '@playwright/test';
import { gotoStory } from '../../visual-testing/storybook-utils';

test('primary', async ({ page }) => {
  const component = await gotoStory(page, 'design-system-button--primary');
  await expect(component).toHaveScreenshot();
});
```

### 3. Запуск тестов

```bash
npm run test:visual
```

### 4. Просмотр diff при падении

```bash
npm run test:visual:report
```

### 5. Одобрение изменений

```bash
# Обновить только упавшие тесты
npm run test:visual:approve

# Или обновить все скриншоты
npm run test:visual:update
```

## Настройка Storybook

Глобальные декораторы и провайдеры настраиваются в `.storybook/preview.tsx`:

```tsx
import type { Preview, StoryFn } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story: StoryFn) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
```

## Структура

```
.storybook/
  main.ts           # Конфигурация Storybook
  preview.tsx       # Глобальные декораторы
  globals.css       # Базовые стили
src/
  components/
    Button/
      Button.tsx
      Button.stories.ts      # Storybook stories
      Button.visual.test.tsx # Playwright тесты
  visual-testing/
    storybook-utils.ts       # Утилиты для навигации по stories
__screenshots__/
  components/Button/
    Button-primary-1.png
html-report/                  # HTML отчёт после тестов
test-results/                 # Traces и скриншоты ошибок
```

## NPM Scripts

| Скрипт | Описание |
|--------|----------|
| `test:visual` | Запуск в Docker |
| `test:visual:local` | Запуск локально |
| `test:visual:update` | Обновить все скриншоты |
| `test:visual:approve` | Обновить упавшие |
| `test:visual:report` | Открыть HTML отчёт |
| `test:visual:clean` | Удалить все скриншоты |
| `storybook` | Запустить Storybook |

## Полезные ссылки

- [Storybook Docs](https://storybook.js.org/docs)
- [Playwright Visual Comparisons](https://playwright.dev/docs/test-snapshots)
