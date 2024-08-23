import { Page, expect } from '@playwright/test';

export class Registro {
  constructor(private page: Page) {}

  async registro(nombre: string, segundoNombre: string,  apellido: string, correo: string,) {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');
    await this.page.waitForTimeout(2000);  // Espera 5000 milisegundos, es decir, 5 segundos

    await this.page.getByRole('button', { name: 'Add' }).click();

    await this.page.waitForTimeout(4000);


    /*********Nombre*********/
    
    //await this.page.getByRole('textbox', { name: 'firstName' }).fill(username);
    
    await this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/div[1]/div[2]/input').fill(nombre);
    
    /*********Segundo Nombre*********/

    await this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/div[2]/div[2]/input').fill(segundoNombre);

    /*********Apellido*********/

    await this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/div[3]/div[2]/input').fill(apellido);


    /*********Correo*********/
    await this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/div/div[1]/div/div[2]/input').fill(correo);


    /******select ***/
    // Localiza y haz clic en el div
    await this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div/div/div[2]/div/div').click();

    // Despliegue el listbox y selecciona la opción con el nombre "Test"
    await this.page.locator('[role="listbox"] >> text="test"').click();


    await this.page.waitForTimeout(3000); 

    await this.page.getByRole('button', { name: 'Save' }).click();


    // Localizar el mensaje flotante por su atributo aria-live
const successMessageLocator = this.page.locator('[aria-live="assertive"]');

try {
  // Esperar a que el mensaje sea visible (timeout de 5 segundos)
  await successMessageLocator.waitFor({ state: 'visible', timeout: 5000 });
  
  // Obtener el contenido del mensaje
  const successMessageText = await successMessageLocator.textContent();
  
  // Verificar que el mensaje contenga el texto "Success"
  expect(successMessageText).toContain('Success');
} catch (error) {
  // Si el mensaje de éxito no aparece, lanzar un error
  throw new Error('El mensaje de éxito no apareció como se esperaba.');
}
   
  }
}
