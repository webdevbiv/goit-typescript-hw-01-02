# GoIT TypeScript Playground

A learning sandbox for TypeScript fundamentals and generics, built with Vite.

## 📦 Project Structure

```
src/
│
├── basic/
│   ├── 1.ts   # Basic types
│   ├── 2.ts   # Tuples
│   ├── 3.ts   # Union & literal types
│   ├── 4.ts   # Functions: void, never
│   ├── 5.ts   # Enums
│   ├── 6.ts   # Interfaces with optional fields
│   └── 7.ts   # Type aliases and optional nested types
│
├── generics/
│   ├── 1.ts   # Generic fetch function
│   ├── 2.ts   # Pick with generics
│   ├── 4.ts   # Merge two objects using generics
│   ├── 5.ts   # Record with enums
│   └── 6.ts   # Omit a field from a type
│
├── style.css  # Dark theme + normalize
├── main.ts    # Imports and renders all modules
└── index.html # App entry with styled output
```

## 🚀 Features

- ✅ Type-safe examples with rendering
- ✅ Uses utility types like `Partial`, `Pick`, `Omit`, `Record`
- ✅ Async generic fetch with type inference
- ✅ Inline HTML rendering via `innerHTML`
- ✅ Fully typed TypeScript project (no `any`)

## 🛠️ Run the Project

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## 🌙 Styling

- Includes `normalize.css` and a custom dark theme.
- Syntax highlighting via custom classes (`.keyword`, `.string`, `.number`, etc).

## 📚 Educational Purpose

This project is designed to practice:

- 🔷 TypeScript fundamentals
- 🔷 Utility types
- 🔷 Generics
- 🔷 Type composition
- 🔷 Functional patterns

---

Built with ❤️ by [Your Name] as part of the GoIT TypeScript homework.
