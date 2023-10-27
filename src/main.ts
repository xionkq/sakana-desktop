const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    // MAIN_WINDOW_VITE_DEV_SERVER_URL是vite启动的服务器，相当于项目根目录
    win.loadURL(`${MAIN_WINDOW_VITE_DEV_SERVER_URL}/src/index.html`);
  } else {
    win.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})
