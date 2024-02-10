import { expect, test } from '@playwright/experimental-ct-react'
import { NxWelcome } from '../src'

const toggleTitle = async (
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

const inputValue = async (
  page: Parameters<Parameters<typeof test>[1]>[0]['page'],
) => {
  for (let i = 0; i < 10; i++) {
    await page.getByRole('textbox').fill('0123456789'.repeat(100))
    await expect(page.getByRole('textbox')).toHaveValue(
      '0123456789'.repeat(100),
    )
    await page.getByRole('textbox').fill('abcdefghij'.repeat(100))
    await expect(page.getByRole('textbox')).toHaveValue(
      'abcdefghij'.repeat(100),
    )
  }
}

test('testA 001', async ({ mount, page }) => {
  const component = await mount(<NxWelcome title="playwright ct" />)
  await expect(component).toContainText('playwright ct')

  await toggleTitle(page)
  await inputValue(page)
})

test('testA 002', async ({ mount, page }) => {
  const component = await mount(<NxWelcome title="playwright ct" />)
  await expect(component).toContainText('playwright ct')

  await toggleTitle(page)
  await inputValue(page)
})

test('testA 003', async ({ mount, page }) => {
  const component = await mount(<NxWelcome title="playwright ct" />)
  await expect(component).toContainText('playwright ct')

  await toggleTitle(page)
  await inputValue(page)
})

test('testA 004', async ({ mount, page }) => {
  const component = await mount(<NxWelcome title="playwright ct" />)
  await expect(component).toContainText('playwright ct')

  await toggleTitle(page)
  await inputValue(page)
})

test('testA 005', async ({ mount, page }) => {
  const component = await mount(<NxWelcome title="playwright ct" />)
  await expect(component).toContainText('playwright ct')

  await toggleTitle(page)
  await inputValue(page)
})
