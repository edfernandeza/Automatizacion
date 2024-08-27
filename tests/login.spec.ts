import { test, expect } from '@playwright/test';
import { Login } from './methods/login'; // ruta

test.describe('Login Tests', () => {
  let login: Login;

  test.beforeEach(async ({ page }) => {
    login = new Login(page);
  });

  test('login correcto', async ({ page }) => {  
     await login.login('Admin', 'admin123');
    //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  });

  test('login incorrecto', async ({ page }) => {  
    await login.login('Admin', 'wrongpassword');
    await expect(page.locator('text=Invalid credentials')).toBeVisible();
  });
});
