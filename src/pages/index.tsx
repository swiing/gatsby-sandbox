import * as React from "react"

import {Box, Button, ButtonGroup, Heading, TabNav, Text} from '@primer/react'
import {UnderlineNav} from '@primer/react/drafts'

import Layout from '../components/layout'
import { CodeIcon, CommentDiscussionIcon, EyeIcon, GitPullRequestIcon, IssueOpenedIcon } from "@primer/styled-octicons"

export default () => (
  <Layout>

    <Box m={4}>
    <Heading as="h2" sx={{mb: 2}}>
        Hello, world!
      </Heading>
      {/* may prefer TabPanel when it is available*/}
      <TabNav aria-label="Main">
        <TabNav.Link href="#" selected>Home</TabNav.Link>
        <TabNav.Link href="#" selected>Documentation</TabNav.Link>
        <TabNav.Link href="#" selected>Support</TabNav.Link>
      </TabNav>

      <p>This will get Primer text styles.</p>

      <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>

      <Text sx={{color: "red"}} > Some text2 <span>data</span></Text>

      <UnderlineNav aria-label="Repository">
  <UnderlineNav.Item aria-current="page" icon={CodeIcon}>
    Code
  </UnderlineNav.Item>
  <UnderlineNav.Item icon={IssueOpenedIcon} counter={30}>
    Issues
  </UnderlineNav.Item>
  <UnderlineNav.Item icon={GitPullRequestIcon} counter={3}>
    Pull Requests
  </UnderlineNav.Item>
  <UnderlineNav.Item icon={CommentDiscussionIcon}>Discussions</UnderlineNav.Item>
  <UnderlineNav.Item icon={EyeIcon} counter={9}>
    Actions
  </UnderlineNav.Item>
  <UnderlineNav.Item icon={EyeIcon} counter={7}>
    Projects
  </UnderlineNav.Item>
</UnderlineNav>      

    </Box>
  </Layout>
)