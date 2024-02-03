const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('hideWin', () => {
  ipcRenderer.send('hide-win')
})
