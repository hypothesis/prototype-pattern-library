# Icon to JSON Generator

Ever need a JSON file of icon paths to build dynamic SVGs? It’s easy with this script.

```bash
npm run build
```

- You’ll end up with a file called `icons.json` which you can easily reference in component-based build tools.
- Adjust `dirPath` inside of `index.js` if you are using a different folder name than “static” to host your static SVGs.

**Note:** this script expects that all your SVGs have a single path, which is typically best practice for these types of icon systems.