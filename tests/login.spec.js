import {test, expect} from '@playwright/test';

test( "Login test on Demo Site", async({page}) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123x');
    await page.click('#submit');

    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

});
