package stepDefinitions;

import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {
	LoginPage loginPage;
	@Given ("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		initDriver();
		driver.get("https://techfios.com/billing/?ng=dashboard/");
	}
	
	@When ("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String userName) {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterUserName(userName);
	}
	@When("User enters password as {string}")
	public void user_enters_password_as(String password) {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterPassword(password);
	    
	}

	@When("User clicks on sign in button")
	public void user_clicks_on_sign_in_button() {
		loginPage.clickSignInButton();
	   takeScreenshot(driver);
	}

	@Then("User should land on dashboard page")
	public void user_should_land_on_dashboard_page() {
	    // Write code here that turns the phrase above into concrete actions
		String expectedTitle ="Dashboard_ibiling";
		String actualTitle = loginPage.getPageTitle();
		//Assert.assertEquals(expectedTitle, actualTitle, null);
	    
	}
	@And("User should be able to click BankandCash page")
    public void User_should_be_able_to_click_BankandCash_page() {
	loginPage.clickBankandCash();
}
	@And("User should be able to click NewAccount page")
	public void User_should_be_able_to_click_NewAccount_page() {
		loginPage.clickNewAccount();
	}
	@And("User enters AccountTitle as {string}")
			public void User_enters_AccountTitle_as_(String Accounttitle) {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterAccounttitle(Accounttitle);
		
	}
	@And("User enters Description as {string}")		
	public void User_enters_Description_as_(String Description) {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterdescription(Description);	
	}
	@And("User enters InitialBalance as {string}")	
	public void User_enters__asInitialBalance_(String Initialbalance) {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.InitialBalance(Initialbalance);	

}
	@And("User enters AccountNumber as {string}")	
	public void User_enters__as_AccountNumber_(String accountnumber) {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.AccountNumber(accountnumber);	
	
	
	}
	@And("User enters ContactPerson as {string}")	
	public void User_enters__as_ContactPerson_(String contactperson) {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.ContactPerson(contactperson);	
	}
	@And("User enters Phone as {string}")	
	public void User_enters__as_Phone_(String phone) {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.Phone(phone);	
	}
	@And("User enters URL as {string}")	
	public void User_enters__as_URL_(String url) {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.URL(url);	
	}
	
	@And("User clicks SubmitButton page")
    public void User_should_be_able_to_click_SubmitButton_page() {
	loginPage.clickSubmitButton();
	}
	@Then("User should be able to validate account created succesfully")
	public void User_should_be_able_to_validate_account_created_succesfully() {
	    // Write code here that turns the phrase above into concrete actions
		String expectedTitle ="Accounts- iBilling";
		String actualTitle = loginPage.getPageTitle1();
		Assert.assertEquals(expectedTitle, actualTitle);
	}
}