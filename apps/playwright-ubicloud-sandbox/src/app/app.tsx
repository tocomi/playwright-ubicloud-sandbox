import { NxWelcome } from '@playwright-ubicloud-sandbox/shared'
import styled from 'styled-components'

const StyledApp = styled.div`
  // Your style here
`

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="playwright" />
    </StyledApp>
  )
}

export default App
