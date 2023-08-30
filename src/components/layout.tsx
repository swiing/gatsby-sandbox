import * as React from "react"

import {BaseStyles, ThemeProvider} from '@primer/react'
import Header from "./header"

export default ({children}) => (
    <ThemeProvider>
    <BaseStyles>
      <Header></Header>
      {children}
    </BaseStyles>
    </ThemeProvider>
  )