/* eslint-disable no-undef */
class HomePage {
  get sidebarHome() {
    return $('[data-testid="container-aside-members"]');
  }

  get loginButton() {
    return $('[data-testid="container-aside-members"] a[href="/auth/login"]');
  }
  get signUpButton() {
    return $('[data-testid="container-aside-members"] a[href="/signUp"]');
  }

  get homeButton() {
    return $('[data-testid="container-aside-members"] a[href="/"]');
  }

  get activitiesButton() {
    return $('[data-testid="container-aside-members"] a[href="/activities"]');
  }

  get scheduleButton() {
    return $('[data-testid="container-aside-members"] a[href="/schedule"]');
  }

  get membershipsButton() {
    return $('[data-testid="container-aside-members"] a[href="/membership"]');
  }

  get contact() {
    return $('[data-testid="container-aside-members"] a[href="/contact"]');
  }

  get contactUs() {
    return $('[data-testid="container-aside-members"] h3');
  }

  get contactUsEmail() {
    return $('[data-testid="container-aside-members"] div:nth-child(2) li:nth-child(1)');
  }

  get contactUsPhone() {
    return $('[data-testid="container-aside-members"] div:nth-child(2) li:nth-child(2)');
  }

  get contactUsAdress() {
    return $('[data-testid="container-aside-members"] div:nth-child(2) li:nth-child(3)');
  }

  get sectionOneTitle() {
    return $('[data-testid="home-page"] h1');
  }

  get sectionOneSubTitle() {
    return $('[data-testid="home-page"] section:nth-child(1) article p:nth-child(2)');
  }

  get sectionOnePharaf() {
    return $('[data-testid="home-page"] section:nth-child(1) article p:nth-child(3)');
  }

  get sectionOneImage() {
    return $('[data-testid="home-page"] section:nth-child(1) img');
  }

  get sectitonTwoTitle() {
    return $('[data-testid="home-page"] section:nth-child(2) h2');
  }

  get shiftReservations() {
    return $('[data-testid="home-page"] section:nth-child(2) article:nth-child(1) h3');
  }

  get shiftReservationsDesc() {
    return $('[data-testid="home-page"] section:nth-child(2) article:nth-child(1) p');
  }

  get scheduling() {
    return $('[data-testid="home-page"] section:nth-child(2) article:nth-child(2) h3');
  }

  get schedulingDesc() {
    return $('[data-testid="home-page"] section:nth-child(2) article:nth-child(2) p');
  }

  get membershipManag() {
    return $('[data-testid="home-page"] section:nth-child(2) article:nth-child(3) h3');
  }

  get membershipManagDesc() {
    return $('[data-testid="home-page"] section:nth-child(2) article:nth-child(3) p');
  }

  get contactSuggestions() {
    return $('[data-testid="home-page"] section:nth-child(2) article:nth-child(4) h3');
  }

  get contactSuggestionsDesc() {
    return $('[data-testid="home-page"] section:nth-child(2) article:nth-child(4) p');
  }

  get sectionThreeTitle() {
    return $('[data-testid="home-page"] section:nth-child(3) h2');
  }

  get aboutFirstImg() {
    return $('[data-testid="home-page"] section:nth-child(3) article:nth-child(1) img');
  }

  get aboutFirstDesc() {
    return $('[data-testid="home-page"] section:nth-child(3) article:nth-child(1) p');
  }

  get aboutSecondImg() {
    return $('[data-testid="home-page"] section:nth-child(3) article:nth-child(2) img');
  }

  get aboutSecondDesc() {
    return $('[data-testid="home-page"] section:nth-child(3) article:nth-child(2) p');
  }

  get sectionFourTitle() {
    return $('[data-testid="home-page"] section:nth-child(4) h2');
  }

  get listActivities() {
    return $$('[data-testid="home-page"] section:nth-child(4) li');
  }

  get sectionFourImg() {
    return $('[data-testid="home-page"] section:nth-child(4) img');
  }

  get sectionFiveTitle() {
    return $('[data-testid="home-page"] section:nth-child(5) h2');
  }

  get sectionFiveTable() {
    return $('[data-testid="home-page"] section:nth-child(5) table');
  }

  get onlyClassesTable() {
    return $('[data-testid="home-page"] section:nth-child(5) table th:nth-child(2)');
  }

  get classicTable() {
    return $('[data-testid="home-page"] section:nth-child(5) table th:nth-child(3)');
  }

  get blackTable() {
    return $('[data-testid="home-page"] section:nth-child(5) table th:nth-child(4)');
  }

  get cancelButtonLogin() {
    return $('[data-testid="container-login"] button:nth-child(1)');
  }

  get cancelButonSignUp() {
    return $('[data-testid="sign-up-form"]  button:nth-child(1)');
  }
  open() {
    return browser.url('https://joaco-megarocket-app.vercel.app/');
  }

  get managementAdmin(){
    return $('a:nth-child(1) li a');
  }
  async managementClick(){
    await this.managementAdmin.click();
  }
  async loginClick() {
    await this.loginButton.click();
  }
}

module.exports = new HomePage();
