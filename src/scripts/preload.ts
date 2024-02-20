const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('hideWin', () => {
  ipcRenderer.send('hide-win')
})

contextBridge.exposeInMainWorld('openLink', (link: string) => {
  ipcRenderer.send('open-link', link)
})

contextBridge.exposeInMainWorld('winPenetrateTrue', () => {
  ipcRenderer.invoke('win-penetrate-true')
})

contextBridge.exposeInMainWorld('winPenetrateFalse', (link: string) => {
  ipcRenderer.invoke('win-penetrate-false')
})
