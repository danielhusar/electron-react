# electron-react

WIP

## Getting started

### Installing dependencies

```bash
bower install
npm install
```

### Bulding project

Development

```bash
grunt
```

Release

```bash
grunt dist
```

### Live Reload

You may want running this task on a separate terminal or command prompt instance:

```bash
grunt serve
```

For development purposes `index.html` already contains reference to live reload scripts. Every time React components, less stylesheets or other web-related files are changed the application will be automatically rebuilt and reloaded.

```html
<script src="http://localhost:35729/livereload.js"></script>
```

### Running with Electron

You may want running this task on a separate terminal or command prompt instance:

On Windows:

```cmd
npm run win
```

On OS X:

```bash
npm run osx
```

This command will launch a prebuilt version of Electron with the current project. During development process it is recommended running Live Reload feature prior to using Electron.

## Typical development process

- Run `bower install` and `npm install`
- Run `grunt serve` on a separate terminal tab (or command prompt) to build the project and start watching files automatically
- Run `npm run win` or `npm run osx` on a separate terminal tab (or command prompt) to run Electron with the current project
- Start changing or adding the code, it will be automatically rebuilt on background and your Electron window will reload once rebuilding is complete
