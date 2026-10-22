import { test } from '../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../src/constants';

test('Check Cappuccino removed from Cart after clicking remove', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.cappuccino);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickRemoveAllCoffeeButton(COFFEE_NAMES.cappuccino);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
