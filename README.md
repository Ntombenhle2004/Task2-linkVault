<img src="https://socialify.git.ci/Ntombenhle2004/Task2-linkVault/image?language=1&owner=1&name=1&stargazers=1&theme=Light" alt="Task2-linkVault" width="640" height="320" />

# Task 2 - LinksVault

**LinksVault** is a React + Vite application for saving, managing, editing, searching, and deleting links. It stores data locally in the browser using **LocalStorage** and includes validation to prevent duplicates and invalid URLs. The project is built with **React 19**, **TypeScript**, and **Vite**.

---

## Project Structure

```
src/
│── App.tsx
│── App.css
│
├── components/
│   ├── footer.tsx
│   ├── heading.tsx
│   ├── outputs.tsx
│   ├── paragraphs.tsx
│   ├── searchbar.tsx
│   └── utils/
│       ├── localStorageFunction.ts
│       └── linkverify.ts
│
├── main.tsx
```

---

## Figma link

```
https://www.figma.com/design/LKJ5R13QhuhNRPDvSlaZOr/React-ts-task2?node-id=0-1&p=f&t=PsrlCDFAQaosaTeA-0
```
---

## Features

- **Add new links** with title, description, and tags.  
- **Update existing links** (with validation to prevent unchanged updates).  
- **Delete links** with confirmation prompt.  
- **Search functionality** (search by title, link, description, or tags).  
- **LocalStorage integration** for persistent data storage.  
- **Input validation**:
  - Ensures all fields are filled.  
  - Ensures URLs are valid.  
  - Prevents duplicate links.  

---

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ntombenhle2004/Task2-linkVault.git
   cd task2-linksvault
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   The app will be available at: [http://localhost:5173](http://localhost:5173)

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## Dependencies

```json
"dependencies": {
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-icons": "^5.5.0"
},
"devDependencies": {
  "@eslint/js": "^9.33.0",
  "@types/react": "^19.1.10",
  "@types/react-dom": "^19.1.7",
  "@vitejs/plugin-react": "^5.0.0",
  "eslint": "^9.33.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.20",
  "globals": "^16.3.0",
  "typescript": "~5.8.3",
  "typescript-eslint": "^8.39.1",
  "vite": "^7.1.2"
}
```

---

## Usage

1. **Add a link** by filling out all inputs (Link, Title, Description, Tag) and clicking **Save**.  
2. **Edit a link** by clicking the edit button (pencil icon) → modify → click **Update**.  
3. **Delete a link** by clicking the delete button (trash icon) → confirm.  
4. **Search links** using the search bar (filters across title, link, description, and tags).  

---

## Utility Functions

- **`getLinks()`** → retrieves all saved links from LocalStorage.  
- **`addLink(link: Link)`** → saves a new link.  
- **`updateLink(link: Link)`** → updates an existing link.  
- **`deleteLink(id: string)`** → removes a link.  
- **`isValidURL(url: string)`** → validates URL format.  

---

## License

This project is for **educational purposes**. You may use, modify, and distribute it freely.  

---
