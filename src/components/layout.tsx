import * as React from "react"

import {BaseStyles, ThemeProvider} from '@primer/react'
import Header from "./header"

export default ({children}) => (
  // colorMode="dark" dayScheme="dark_dimmed" nightScheme="dark_dimmed"
    <ThemeProvider >
    <BaseStyles>
      <Header></Header>
      {children}
    </BaseStyles>
    </ThemeProvider>
  )