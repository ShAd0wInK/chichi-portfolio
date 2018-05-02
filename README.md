# PARCEL-starter
>A simple Parcel starter 📦

## How to use it :

### 1. 🛠 Install :
  1. Install **parcel-bundler :**
  
      `npm install -g parce-bundler`

  2. Create a **package.json :**

      `npm init -y`

  3. Install **node-sass :**

      `npm install node-sass`

### 2. 🚀 Launch :
At the root of your project:

`npm run start`

> this command is equal to `parcel src/index.html`

### 3. 🏗 Build :

Always at the root of your project: 

`npm run build`

> this command is equal to `parcel build src/index.html --no-cache --public-url ./`

* This command will **create a folder** named `dist`. 
* This folder will contain **all your builded files :** *compiled SCSS, JS minified, HTML minified, ..*

### 4. 🛫 Export : 

⚠️ If you want to upload your website, **take care of use** `dist/ìndex.html` and **not** `src/index.html` 
