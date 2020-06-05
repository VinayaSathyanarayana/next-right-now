import fetchJSON from './fetchJSON';

describe(`utils/api/fetchJSON.ts`, () => {
  describe(`fetchJSON`, () => {
    test(`should have a globally available "fetch" object (polyfilled from "./jest.setup.js")`, async () => {
      // @ts-expect-error
      expect(global.fetch).toBeDefined();
    });
  });
});