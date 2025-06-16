import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { Link1Page } from '../pages/Secciones/link1Page';



test.describe('Grupo de pruebas - Heroku', () => {

  test('QA-1 - A/B Testing', async ({ page }) => {
    const homePage = new HomePage(page);
    const link1Page = new Link1Page(page);
    const linkTitle = 'A/B Testing';
    const testTitle = 'A/B Test Control';
    const url_homepage = 'https://the-internet.herokuapp.com/'
    const url_test = 'https://the-internet.herokuapp.com/abtest'

    await test.step("Ingresamos a heroku", async () => {
      const heading = homePage.getHeading();

      await page.goto(url_homepage);
      await expect(page).toHaveURL(url_homepage);
      await expect(heading).toBeVisible();
      await expect(heading).toHaveText('Welcome to the-internet');
    })

    await test.step("Clickeamos en la primer seccion [A/B Testing]", async () => {
      await homePage.goToLink(linkTitle);
    })

    await test.step("Expects finales", async () => {
      const titulo = link1Page.getTitulo();
      await expect(page).toHaveURL(url_test);
      await expect(titulo).toHaveText(testTitle);
    })

  })
  


});