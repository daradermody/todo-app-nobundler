# A todo app without a bundler!

How is this possible, you ask? With [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), the browser can dynamically fetch JS imports with relative (`./myfile.js`) or absolute (`https://esm.sh/react`) paths! This prototype shows how JS module syntax and support is getting better all the time, requiring less and less complexity from your build infrastructure.

### However

A bundler is definitely better. Because the browser can only fetch each module when they are explicitly imported, this results in a cascade of imports that are more sequential than parallel. This app takes 3+ seconds to load! So we're not quite there yet.

![unbundled_todo_app.gif](unbundled_todo_app.gif)
