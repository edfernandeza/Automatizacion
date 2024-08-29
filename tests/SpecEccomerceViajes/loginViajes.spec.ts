import { test, expect } from '@playwright/test';
import { LoginViajes } from '../methods/EccomerceViajes/loginViajes'; // ruta

test.describe('Login Tests', () => {
  let loginViajes: LoginViajes;

  test.beforeEach(async ({ page }) => {
    loginViajes = new LoginViajes(page);
  });

  test('Login Viajes Produccion', async ({ page }) => {
    await loginViajes.login();
    await page.waitForTimeout(2000);
  });

  
});