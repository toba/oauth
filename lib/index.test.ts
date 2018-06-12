import { Client } from './index';

test('imports oauth library', () => {
   expect(Client).toBeDefined();
   expect(typeof Client).toBe('function');
});
