# Hugo-ing
A simple [Hugo](https://gohugo.io/) starter for building websites using Hugo Pipes for CSS and JavaScript processing.

![hugo-ing-screen](https://user-images.githubusercontent.com/22360092/116813537-24d35700-ab22-11eb-958a-1dfbcc9aaeff.png)

## Getting Started
#### Install necessary packages:
```
npm install
```  

#### Run the dev server:
```
npm start
```
Then navigate to `http://localhost:1313/` in your browser to view your dev server.

#### Build your website:
```
npm run build
```
#### Or build your website with draft content included:
```
npm run build:preview
```
**Built website files will be published to the `dist/` directory.**

## Structure
```
site/
 |-- archetypes/    // Templates for content files
 |-- assets/        // Files for processing with Hugo Pipes (CSS, JS, etc.)
 |-- content/       // Page content
 |-- data/
 |-- layouts/       // HTML template files
 |-- resources/
 |-- static/        // Static files which will be copied into the publish directory
 |-- themes/        
 |-- config.toml    // Hugo configuration file
postcss.config.js   // PostCSS configuration
```

## License
This project uses the [MIT](LICENSE) license.
