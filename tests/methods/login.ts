import { Page } from '@playwright/test';

export class Login {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await this.page.getByRole('textbox', { name: 'username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
    try {
        // Espera a que la página de dashboard esté visible
        await this.page.waitForSelector('a[href="/web/index.php/dashboard/index"]', { timeout: 1000 });
      } catch (error) {
        // Si el elemento no está disponible, asumimos que el login ha fallado
        console.error('No se logró logear.');
      }
  }
}
