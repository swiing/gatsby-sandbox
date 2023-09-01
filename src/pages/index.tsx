import * as React from "react"

import {Box, Button, ButtonGroup, Heading, TabNav, Text, Details, useDetails, Octicon, IconButton} from '@primer/react'

import Layout from '../components/layout'

import Nav from "../components/nav"
import DemoSpec from "../components/demo-spec"
import { PencilIcon } from "@primer/styled-octicons"

export default () => {
  const { getDetailsProps } = useDetails({
    closeOnOutsideClick: true,
  })

  return(
  <Layout>

    <Nav></Nav>

    {/* <PencilIcon /> */}
    <IconButton icon={PencilIcon} aria-label="Edit" onClick={()=>alert('edit')}/>

{/* Use BorderBox if ever available in React */}
    <Box m={4} sx={{
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'border.default',
  p: 3
}}>

      {/* <Heading as="h2" sx={{mb: 2}}>
        Hello, world!
      </Heading> */}

      {/* may prefer TabPanel when it is available*/}
      {/* <TabNav aria-label="Main">
        <TabNav.Link href="#" selected>Home</TabNav.Link>
        <TabNav.Link href="#" selected>Documentation</TabNav.Link>
        <TabNav.Link href="#" selected>Support</TabNav.Link>
      </TabNav> */}

      {/* <p>This will get Primer text styles.</p> */}

      {/* <ButtonGroup>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup> */}

      {/* <Text sx={{color: "red"}} > Some text2 <span>data</span></Text> */}

      <DemoSpec />

      {/* <Details {...getDetailsProps()}>
      <Text as="summary">See Details</Text>
      <XCircleFillIcon></XCircleFillIcon>
      This is some content
      </Details> */}

    </Box>
  </Layout>
)}