const fs = require('fs-extra');
const concat = require('concat');
(async function build() {

const es5 = ['./dist/blog-list-libraryapp/runtime-es5.js','./dist/blog-list-libraryapp/polyfills-es5.js','./dist/blog-list-libraryapp/main-es5.js','./dist/blog-list-libraryapp/scripts.js',];
const es2015= ['./dist/blog-list-libraryapp/runtime-es2015.js','./dist/blog-list-libraryapp/polyfills-es2015.js','./dist/blog-list-libraryapp/main-es2015.js','./dist/blog-list-libraryapp/scripts.js',];
await fs.ensureDir('blog-list-libraryapp')
await concat(es5, 'blog-list-libraryapp/blog-list-libraryapp-es5.js');
await concat(es2015, 'blog-list-libraryapp/blog-list-libraryapp-es2015.js');

await fs.copyFile('./dist/blog-list-libraryapp/styles.css', 'elements/styles.css')
await fs.copy('./dist/blog-list-libraryapp/assets/', 'elements/assets/' )
})()