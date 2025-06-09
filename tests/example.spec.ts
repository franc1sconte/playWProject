import { test, expect } from '@playwright/test';



test.describe('Grupo de pruebas - Heroku', () => {

  test('QA-1 - A/B Testing', async ({ page }) => {
    const linkTitle = 'A/B Testing';
    const testTitle = 'A/B Test Control';
    const url_homepage = 'https://the-internet.herokuapp.com/'
    const url_test = 'https://the-internet.herokuapp.com/abtest'

    // --> Función para obtener el link por nombre
    function obtenerLinkPorNombre(nombreLink: string) {
      return page.locator(`[id=content] ul li:has-text("${nombreLink}") a`);
    }

    await test.step("Ingresamos a heroku", async () => {
      const heading = page.locator('h1[class="heading"]');
      
      await page.goto(url_homepage);
      await expect(page).toHaveURL(url_homepage);
      await expect(heading).toBeVisible();
      await expect(heading).toHaveText('Welcome to the-internet');
    })

    await test.step("Clickeamos en la primer seccion [A/B Testing]", async () => {
      const divPadre = page.locator('[class="example"]');
      const titulo = divPadre.locator('h3');
      
      await obtenerLinkPorNombre(linkTitle).click();
      await expect(page).toHaveURL(url_test);
      await expect(titulo).toHaveText(testTitle)
    })

  })
  


});