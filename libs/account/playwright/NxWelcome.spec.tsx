import { expect, test } from '@playwright/experimental-ct-react'
import { NxWelcome } from '../src'

const routine = async (
  page: Parameters<Parameters<typeof test>[1]>[0]['page'],
) => {
  await page.getByRole('button', { name: 'toggle title' }).click()
  await expect(
    page.getByRole('heading', { name: 'Welcome playwright ct 👋' }),
  ).toBeHidden()

  await page.getByRole('button', { name: 'toggle title' }).click()
  await expect(
    page.getByRole('heading', { name: 'Welcome playwright ct 👋' }),
  ).toBeVisible()
}

test('testB 001', async ({ mount, page }) => {
  const component = await mount(<NxWelcome title="playwright ct" />)
  await expect(component).toContainText('playwright ct')

  await routine(page)
})

test('testB 002', async ({ mount, page }) => {
  const component = await mount(<NxWelcome title="playwright ct" />)
  await expect(component).toContainText('playwright ct')

  await routine(page)
})

test('testB 003', async ({ mount, page }) => {
  const component = await mount(<NxWelcome title="playwright ct" />)
  await expect(component).toContainText('playwright ct')

  await routine(page)
})

test('testB 004', async ({ mount, page }) => {
  const component = await mount(<NxWelcome title="playwright ct" />)
  await expect(component).toContainText('playwright ct')

  await routine(page)
})

test('testB 005', async ({ mount, page }) => {
  const component = await mount(<NxWelcome title="playwright ct" />)
  await expect(component).toContainText('playwright ct')

  await routine(page)
})
