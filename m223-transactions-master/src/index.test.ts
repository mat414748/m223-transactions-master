import { BANK_ACCOUNT_TABLE } from './database/schema';

test("Main test", () => {
    expect(BANK_ACCOUNT_TABLE).not.toBe("");
});