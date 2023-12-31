/** @satisfies {import('@webcontainer/api').FileSystemTree} */

export const files = {
  'index.html': {
    file: {
      contents: `
        <html>
          <head>
            <title>Webcontainer brownbag</title>
            <link rel="stylesheet" type="text/css" href="styles.css" />
          </head>
          <body>
            Such a cool tool, this runs locally!
          </body>
        </html>
      `,
    },
  },
  'package.json': {
    file: {
      contents: `
        {
          "name": "example-app",
          "type": "module",
          "dependencies": {
            "vite": "latest"
          },
          "scripts": {
            "start": "vite"
          }
        }`,
    },
  },
};
