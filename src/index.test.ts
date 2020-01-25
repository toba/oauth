import { AuthClient } from './index'

test('imports oauth library', () => {
   expect(AuthClient).toBeDefined()
   expect(typeof AuthClient).toBe('function')
})
