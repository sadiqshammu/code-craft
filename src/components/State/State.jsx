import * as React from 'react'

const AppContext = React.createContext({});
const AppProvider = AppContext.Provider;
const AppConsumer = AppContext.Consumer;

function useCommonState() {
  const [level, setLevel] = React.useState(0)
  return { level, setLevel }
}

export {
  AppProvider,
  AppConsumer,
  useCommonState
}

export default AppContext