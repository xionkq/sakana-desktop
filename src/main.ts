import { app, BrowserWindow, Tray, Menu, nativeImage, ipcMain, shell } from 'electron'
import path from 'node:path'

let win: BrowserWindow

const createWindow = () => {
  win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    frame: false, // 去掉右上角放大缩小按钮
    resizable: false,
    transparent: true,
  })
  win.setMenu(null)
  win.setAlwaysOnTop(true)

  // MAIN_WINDOW_VITE_DEV_SERVER_URL是vite启动的服务器，相当于项目根目录
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    win.loadURL(`${MAIN_WINDOW_VITE_DEV_SERVER_URL}/src/index.html`)
  } else {
    win.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`))
  }
  win.webContents.openDevTools()
}

const createTray = () => {
  const icon = nativeImage.createFromPath(
    // TODO: Overwrite path
    path.join(__dirname, '../../src/assets/logo.png')
  )
  const tray = new Tray(icon)
  tray.setToolTip('「Sakana! Desktop」')

  const contextMenu = Menu.buildFromTemplate([
    {
      label: '退出',
      click: () => {
        app.quit()
      },
    },
  ])
  tray.setContextMenu(contextMenu)

  win.hide()
  tray.on('click', () => {
    win.show()
  })
}

const createListener = () => {
  ipcMain.on('hide-win', () => {
    win.hide()
  })
  ipcMain.on('open-link', (event, link) => {
    shell.openExternal(link)
  })
}

app.whenReady().then(() => {
  createWindow()
  createTray()
  createListener()
})
