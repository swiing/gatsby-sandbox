import * as React from "react"

import {Header, ActionMenu, ActionList, IconButton} from '@primer/react'
import {KebabHorizontalIcon} from '@primer/styled-octicons'

export default () => (
    <Header>
    
    <Header.Item>
        <Header.Link href="#" sx={{fontSize:2}}>
            <span>Stockastix</span>
        </Header.Link>
    </Header.Item>

    <Header.Item full>Menu</Header.Item>

    <Header.Item>
      <ActionMenu>
        <ActionMenu.Button>New</ActionMenu.Button>
        <IconButton icon={KebabHorizontalIcon} variant="invisible" aria-label="Open column options" />

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

    </Header>
  )