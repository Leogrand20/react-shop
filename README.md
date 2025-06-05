# 🛒 React Shop

Небольшое учебное приложение для отображения списка товаров и управления корзиной. Построено на React + Vite с использованием Feature-Sliced Design. Подключен собственный API с авторизацией по ключу.

---

## 📦 Стек технологий

- ⚛️ **React** — библиотека для UI
- ⚡ **Vite** — быстрый сборщик проекта
- 🎯 **TypeScript** — типизация всего проекта
- 🎨 **Tailwind CSS / CSS Modules** — стилизация
- 🧠 **React Context (useShop)** — глобальное состояние
- 📁 **Feature-Sliced Design (FSD)** — модульная архитектура

---

## 📂 Структура проекта

```
src/
├── app/              # Инициализация, layout, стили
│   ├── App.tsx
│   ├── App.css
│   ├── layout/       # Header, Main, Footer
│   ├── providers/    # ShopProvider и контексты
│   └── styles/       # Глобальные стили
│
├── shared/           # Переиспользуемое
│   ├── api/          # config.ts (API_URL, API_KEY)
│   ├── hooks/        # useShop
│   ├── lib/          # Общие утилиты
│   ├── types/        # Типы для товаров и корзины
│   └── ui/           # Alert и т.п.
│
├── entities/         # Бизнес-сущности
│   ├── cart/         # UI: BasketItem, BasketList
│   └── product/      # UI: GoodsItem, GoodsList
│       ├── api/      # getAllItems()
│       └── lib/      # createGoods
│
├── features/         # Бизнес-фичи (Cart)
│   └── cart/         # Cart.tsx
```

---

## ⚙️ Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в dev-режиме
npm run dev

# Сборка
npm run build
```

---

## 🔐 Работа с API

### Используется `.env.local`

Создай файл `.env.local` в корне проекта:

```
VITE_API_KEY=your-api-key-here
```

### Шаблон:
```dotenv
# .env.example
VITE_API_KEY=
```

API вызывается из `src/entities/product/api/api.ts` с подстановкой ключа:

```ts
const { data } = await axios(API_URL, {
  headers: { Authorization: API_KEY }
})
```

---

## 📌 Основной функционал

- Получение товаров с удалённого API
- Отображение карточек товаров
- Добавление в корзину
- Увеличение / уменьшение количества
- Подсчёт общей суммы
- Очистка корзины

---

## 🧠 Глобальное состояние

Используется React Context API:

```ts
const { order, toggleBasketVisible, clearBasket } = useShop()
```

### Включает:

- `order: IGood[]`
- Методы управления: `addItem`, `removeItem`, `increaseQuantity`, `clearBasket`

---

## 🎯 Архитектура (Feature-Sliced Design)

Слои:

- **app/** — корень приложения
- **shared/** — всё переиспользуемое
- **entities/** — бизнес-сущности (товар, корзина)
- **features/** — бизнес-операции (добавление в корзину)
- **widgets/** — (не используются, можно добавить)
- **pages/** — (можно добавить для роутинга в будущем)

---

## 🧪 TODO / Улучшения

- ✅ Перевести контекст на Zustand
- ✅ Добавить роутинг (React Router)
- ✅ Поддержка избранного
- 🌐 Локализация через i18next
- 🔍 Поиск и фильтрация
- 📦 Хранение корзины в localStorage

---

## 📃 Лицензия

Проект создан в учебных целях. Свободен для доработки и распространения.
