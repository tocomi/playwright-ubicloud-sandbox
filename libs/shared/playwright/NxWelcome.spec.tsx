import { expect, test } from '@playwright/experimental-ct-react'
import { NxWelcome } from '../src'

test('should work', async ({ mount }) => {
  const component = await mount(<NxWelcome title="playwright ct" />)
  await expect(component).toContainText('playwright ct')
})
