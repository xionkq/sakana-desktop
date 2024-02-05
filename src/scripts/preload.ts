const { contextBridge, ipcRenderer, shell } = require('electron')

contextBridge.exposeInMainWorld('hideWin', () => {
  ipcRenderer.send('hide-win')
})

contextBridge.exposeInMainWorld('openLink', (link: string) => {
  ipcRenderer.send('open-link', link)
})
