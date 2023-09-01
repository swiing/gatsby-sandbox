import * as React from "react"

import {Header, ActionMenu, ActionList, IconButton, Avatar, Octicon} from '@primer/react'
import {PlusIcon} from '@primer/styled-octicons'

export default () => (
    <Header>
    
    <Header.Item>
        <Header.Link href="#" sx={{fontSize:2}}>
            <span>Sitename</span>
        </Header.Link>
    </Header.Item>

    <Header.Item full></Header.Item>

    <Header.Item>
      <ActionMenu>

        <ActionMenu.Button >
          <Octicon icon={PlusIcon} aria-label="Open column options" />
          {/* <IconButton icon={PlusIcon} variant="invisible" aria-label="Open column options" /> */}
        </ActionMenu.Button>

        <ActionMenu.Overlay>
            <ActionList>
            <ActionList.Item onSelect={event => console.log('New chart')}>Chart</ActionList.Item>
            <ActionList.Item>Backtest</ActionList.Item>
            <ActionList.Item>Optimisation</ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item variant="danger">Delete file</ActionList.Item>
            </ActionList>
        </ActionMenu.Overlay>

      </ActionMenu>
    </Header.Item>

    <Header.Item><Avatar src="https://avatars.githubusercontent.com/primer" /></Header.Item>
    
    </Header>
  )