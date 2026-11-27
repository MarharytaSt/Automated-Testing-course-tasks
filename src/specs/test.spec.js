
describe('WebDriver University', () => {
    it('should open the Contact Us page', async () => {
        await browser.url('/Contact-Us/contactus.html');

        const title = await browser.getTitle();

        console.log('Page title:', title);

        expect(title).toContain('Contact Us');
    });

    it('should display the contact form', async () => {
        await browser.url('/Contact-Us/contactus.html');

        const firstName = await $('[name="first_name"]');

        await expect(firstName).toBeDisplayed();
    });

    it('should display the email field', async () => {
        await browser.url('/Contact-Us/contactus.html');

        const email = await $('//*[@name="email"]');

        await expect(email).toExist();
    });

    it('should display the login form', async () => {
        await browser.url('/Login-Portal/index.html');

        const username = await $('//*[@placeholder="Username"]');

        await expect(username).toBeDisplayed();
    });

    it('should display the first button', async () => {
        await browser.url('/Click-Buttons/index.html');

        const button = await $('#button1');

        await expect(button).toHaveAttribute('id', 'button1');
    });
});



