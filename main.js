var app = require('app'),
    BrowserWindow = require('browser-window'),
    runtime = require('./core/runtime');

require('crash-reporter').start();

// Load external modules
var mods = require('./core/modules');
mods.load(runtime);

var mainWindow = null;

app.on('window-all-closed', function () {
  //if (process.platform !== 'darwin') {
    app.quit();
  //}
});

app.on('ready', function () {

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // initialize runtime reference to main window
  runtime.windowId = mainWindow.id;

  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  mainWindow.focus();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});
