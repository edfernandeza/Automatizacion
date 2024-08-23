import { test, expect } from '@playwright/test';
import { Registro } from './methods/registro'; // ruta
import { Login } from './methods/login'; // ruta


test.describe('Registro Tests', () => {
  let registro: Registro;
  let login: Login;

  test.beforeEach(async ({ page }) => {
    registro = new Registro(page);
    login = new Login(page);
  });

  test('Registro correcto', async ({ page }) => {  
    await login.login('Admin', 'admin123');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.waitForTimeout(2000);  // Espera 5000 milisegundos, es decir, 5 segundos

    await registro.registro('Edgardo', 'Joaquin', 'Fernandez', 'edgardofernandez128@gmail.com');
    
  });

 
});
