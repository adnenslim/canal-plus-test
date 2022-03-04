import '@testing-library/jest-dom/extend-expect'

import { server } from './test/setupServer'

beforeAll(() => {
  console.log('before')
  server.listen({ onUnhandledRequest: "bypass" })
})

afterAll(() => {
  server.close()
})

afterEach(() => {
  server.resetHandlers()
})