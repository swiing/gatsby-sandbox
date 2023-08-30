import * as React from "react"

import {Box, Button, ButtonGroup, Heading, TabNav, Text} from '@primer/react'

import Layout from '../components/layout'

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

      <Text sx={{color: "red"}} contenteditable="true"> Some text2 <span>data</span></Text>

    </Box>
  </Layout>
)