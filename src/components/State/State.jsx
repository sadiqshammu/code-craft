import * as React from "react"

const AppContext = React.createContext({})
const AppProvider = AppContext.Provider

function useCommonState() {
  const [level, setLevel] = React.useState(0)
  const [menuLabel, setMenuLabel] = React.useState("")
  return { level, setLevel, menuLabel, setMenuLabel }
}

export { AppProvider, useCommonState }

export default AppContext
