import { Page } from '@playwright/test';

export class LoginViajes {

  constructor(private page: Page) {}

  async login() {
    await this.page.goto('https://seguro-viaje.pacifico.com.pe/');
   try {
        await this.page.waitForSelector('//*[@id="initialSection"]/div[1]/div/div/div[2]"]', { timeout: 1000 });
      } catch (error) {
        console.error('E. Viajes: No se logró exitosamente la prueba de humo.');
      }
  }
}