import { test } from '../_fixtures/fixtures';
import { priceFormatStr } from '../../src/common/priceFormatters';
import { COFFEE_NAMES, COFFEE_PRICES } from '../../src/constants';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  const price = priceFormatStr(COFFEE_PRICES.cappuccino);

  await menuPage.open();

  await menuPage.assertCoffeeCupCostHasValue(COFFEE_NAMES.cappuccino, price);
});
