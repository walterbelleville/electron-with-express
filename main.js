const electron = require("electron"),
  app = electron.app,
  BrowserWindow = electron.BrowserWindow;

let mainWindow;

// FOR DEBUGGING ELECTON
const isDebug = false;

// Get Main Screen Dimensions
//let screenElectron = electron.screen;
//let mainScreen = screenElectron.getPrimaryDisplay();
//let dimensions = mainScreen.size;

function createWindow() {
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    width: 1024,
    height: 840
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  
  if (isDebug)
    mainWindow.webContents.openDevTools();

  mainWindow.on("close", () => {
    mainWindow.webContents.send("stop-server");
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);
app.on("browser-window-created", function(e, window) {
  window.setMenu(null);
});

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});
