# HOW TO RUN 
This is the official GUI Weather App repository.

Please make sure you:

1. Installed node.js on your machine
2. Download the zip code
3. Go to the terminal of the file directory 
4. Install dependencies via `npm i`
5. Do `npm i react-toastify`
6. `npm install -D tailwindcss`
7. `npx tailwindcss init`

8 If not alrady present in file, insert this into the tailwind.config.js file  (inside the `content[]` array)
      
      "./src/*/.{js,jsx,ts,tsx}"
      
      
9 Inside the index.css file(if not already there), add
      @tailwind base;
      
      @tailwind components;
      
      @tailwind utilities;

7. And, run it `npm run start`
