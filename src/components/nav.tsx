import * as React from "react"

// Or UnderlinePanel?
import {UnderlineNav} from '@primer/react/drafts'
import { CodeIcon, GearIcon, GraphIcon, HashIcon, RocketIcon } from "@primer/styled-octicons"

export default () => (
<UnderlineNav aria-label="Repository">
  <UnderlineNav.Item aria-current="page" icon={CodeIcon}>
    Code
  </UnderlineNav.Item>
  <UnderlineNav.Item icon={GraphIcon} >
    Chart
  </UnderlineNav.Item>
  <UnderlineNav.Item icon={GearIcon} >
    Settings
  </UnderlineNav.Item>
  <UnderlineNav.Item icon={HashIcon} >
    Stats
  </UnderlineNav.Item>
  <UnderlineNav.Item icon={RocketIcon} >
    Optimizer
  </UnderlineNav.Item>
</UnderlineNav> 
)     
