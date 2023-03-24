# HOW TO RUN 

Please make sure you:

1. Installed node.js on your machine
2. Download the zip code
3. Go to the terminal of the file directory 

Alternative 1:
If you have the tailwind.config.js and postcss.config.js, you can:
4. Install dependencies via `npm i` and run it with `npm run start` or `npm start` (either one)

Alternative 2:
But if you don't, on the file directory terminal:
4. Install dependencies via `npm i`
5. Install react-toastify via `npm i react-toastify`
6. Install tailwindcss via `npm install -D tailwindcss`
7. Run `npx tailwindcss init`on the file directory terminal
8. A file named tailwind.config.js will automatically be uploaded into the file directory
9. Insert this into the tailwind.config.js file  (inside the `content[]` array)
      "./src/*/.{js,jsx,ts,tsx}"
      
10. Inside the index.css file(if not already there), add
      @tailwind base;      
      @tailwind components;    
      @tailwind utilities;

11. And, run it `npm run start`

Alternative 3:
If it still doesn't work, here is the repository of our project (https://github.com/vivinia7/GUI-Project) and follow from steps 1 to 3 and Alternative 1. 

RESOURCES:
- Installation of Tailwind CSS (ONLY Step 1-3): https://tailwindcss.com/docs/installation
