package pages;

import java.util.Random;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage extends TestBase {
		WebDriver driver; 
		public LoginPage(WebDriver driver) { 
		this.driver = driver; 
		} 
		// Element Library 
		@FindBy(how = How.XPATH, using = "//input[@id='username']") 
		WebElement UserName; 
		@FindBy(how = How.XPATH, using = "//input[@id='password']") 
		WebElement Password; 
		@FindBy(how = How.XPATH, using = "//button[@name='login']") 
		WebElement SignInButton; 
		@FindBy(how = How.XPATH ,using ="//*[@id=\"side-menu\"]/li[10]/a/span[1]")
		WebElement BankandCash;
		@FindBy(how = How.XPATH , using ="//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
		WebElement NewAccount;
		@FindBy(how = How.XPATH ,using ="//*[@id=\"account\"]")
		WebElement Accounttitle;
		@FindBy(how = How.XPATH , using = "//*[@id=\"description\"]")
		WebElement description;
		@FindBy(how = How.XPATH, using = "//*[@id=\"balance\"]")
		WebElement InitialBalance;
		@FindBy(how = How.XPATH , using = "//*[@id=\"account_number\"]")
		WebElement AccountNumber;
		@FindBy(how = How.XPATH , using = "//*[@id=\"contact_person\"]")
		WebElement ContactPerson;
		@FindBy(how = How.XPATH , using="//*[@id=\"contact_phone\"]") WebElement Phone;
		@FindBy(how = How.XPATH ,using = "//*[@id=\"ib_url\"]") WebElement URL;
		@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button") WebElement SubmitButton;
		// Methods to interact with the elements 
		public void enterUserName(String userName) { 
		UserName.sendKeys(userName); 
		try { 
		Thread.sleep(3000); 
		} catch (InterruptedException e) { 
		e.printStackTrace(); 
		} 
		} 
		public void enterPassword(String password) { 
		Password.sendKeys(password); 
		try { 
		Thread.sleep(3000); 
		} catch (InterruptedException e) { 
		e.printStackTrace(); 
		} 
		} 
		public void clickSignInButton() { 
		SignInButton.click(); 
		try { 
		Thread.sleep(3000); 
		} catch (InterruptedException e) { 
		e.printStackTrace(); 
		} 
		} 
		public String getPageTitle() { 
		return driver.getTitle(); 
		} 
		public void clickBankandCash() {
			BankandCash.click();
		}
		public void clickNewAccount() {
			NewAccount.click();
			try { 
				Thread.sleep(3000); 
				} catch (InterruptedException e) { 
				e.printStackTrace(); 
				} 
		}
		public void enterAccounttitle(String AccountTitle) { 
			Accounttitle.sendKeys(AccountTitle);
			try { 
			Thread.sleep(3000); 
			} catch (InterruptedException e) { 
			e.printStackTrace(); 
			} 
		
		} public void enterdescription(String Description) { 
			description.sendKeys(Description); 
			try { 
			Thread.sleep(3000); 
			} catch (InterruptedException e) { 
			e.printStackTrace(); 
			} 
		
		
		}
		public void InitialBalance(String Initialbalance) { 
			InitialBalance.sendKeys(Initialbalance); 
			try { 
			Thread.sleep(3000); 
			} catch (InterruptedException e) { 
			e.printStackTrace(); 
			} 
			} 
		public void AccountNumber(String accountnumber) { 
			AccountNumber.sendKeys(accountnumber + generateRandomNum(99999)); 
			try { 
			Thread.sleep(3000); 
			} catch (InterruptedException e) { 
			e.printStackTrace(); 
			} 
			} 
		public void ContactPerson(String contactperson) { 
			ContactPerson.sendKeys(contactperson); 
			try { 
			Thread.sleep(3000); 
			} catch (InterruptedException e) { 
			e.printStackTrace(); 
			} 
			} 
		public void Phone(String phone) { 
			Phone.sendKeys(phone+ generateRandomNum(99999)); 
			try { 
			Thread.sleep(3000); 
			} catch (InterruptedException e) { 
			e.printStackTrace(); 
			} 
			} 
		
		
		public void URL(String url) { 
			URL.sendKeys(url); 
			try { 
			Thread.sleep(3000); 
			} catch (InterruptedException e) { 
			e.printStackTrace(); 
			} 
			} 
		public void clickSubmitButton() {
			SubmitButton.click();
		
		
		}	
		public String getPageTitle1() { 
			return driver.getTitle(); 
			} 
		
}