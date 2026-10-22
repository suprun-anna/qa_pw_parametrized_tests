import { test } from '../_fixtures/fixtures';
import { COFFEE_NAMES } from '../../src/constants';

test('Check Espresso removed from Cart after clicking remove', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCoffeeCup(COFFEE_NAMES.espresso);

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickRemoveAllCoffeeButton(COFFEE_NAMES.espresso);
  await cartPage.assertNoCoffeeMessageIsVisible();
});
