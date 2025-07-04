import { Page, Locator, expect } from '@playwright/test';

// [Page para link #1] 'A/B Testing'

export class Link1Page {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /// Buttons ///

  /// Inputs ///

  /// Assertions ///

  getDivPadre(): Locator {
    return this.page.locator('[class="example"]');
  }

  getTitulo(): Locator {
    return this.getDivPadre().locator('h3');
  }

  /// Methods ///

}