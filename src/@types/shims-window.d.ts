declare global {
  interface Window {
    hideWin: () => void
    openLink: (v: string) => void
    winPenetrateTrue: () => void
    winPenetrateFalse: () => void
  }
}

export {}
