import {Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly linkBtn: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  getLinkBtn(nombreLink: string): Locator {
    return this.page.locator(`[id=content] ul li:has-text("${nombreLink}") a`);
  }

  getHeading(): Locator {
    return this.page.locator('h1[class="heading"]');
  }

  async goToLink(nombreLink: string) {
    const linkBtn = this.getLinkBtn(nombreLink);
    await linkBtn.click();
  }

}