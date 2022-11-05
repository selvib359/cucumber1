package steps;

import org.openqa.selenium.support.PageFactory;

import Pages.BankCashNewAccountPage;
import Pages.DashBoardpageHW;
import Pages.ListAccountPages;
import Pages.LoginPageHW;
import Pages.TestBaseHomeWork;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinitionHW extends TestBaseHomeWork {

	LoginPageHW loginpage;
	DashBoardpageHW dashboardpage;
	BankCashNewAccountPage bankcashpage;
	ListAccountPages listaccountpage;
	
	@Before
	public void setup() {
		initDriver();
		loginpage=PageFactory.initElements(driver,LoginPageHW.class);
		dashboardpage=PageFactory.initElements(driver,DashBoardpageHW.class);
		bankcashpage=PageFactory.initElements(driver,BankCashNewAccountPage.class);
		listaccountpage=PageFactory.initElements(driver,ListAccountPages.class);
	}
	@Given("^User is on TechFios Login Page$")
	public void user_is_on_TechFios_Login_Page() {
		
		driver.get("https://techfios.com/billing/?ng=login/");
	}
	
	@When("^User enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String username){
		
	    loginpage.insertUserName(username);
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String password){
		
		loginpage.insertPassWord(password);
	    
	}

	@When("^User Clicks on singin$")
	public void user_Clicks_on_singin(){
		loginpage.clickSignInButton();
	    
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page(){
	    String expectedTitle="Dashboard- iBilling";
	    String actualTitle=loginpage.getPageTitle();
	    Assert.assertEquals("Page not found",expectedTitle,actualTitle);
	}

	@Then("^User Clicks on bankCash$")
	public void user_Clicks_on_bankCash(){
		dashboardpage.clickBankCash();   
	}

	@Then("^User clicks on NewAccount$")
	public void user_clicks_on_NewAccount(){
		dashboardpage.clickNewAccount();	
	    
	}

	@Then("^User enters accountTitle as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountTitle_as_in_accounts_page(String accountTitle){
		
		bankcashpage.enterAccountTitle(accountTitle+generateRandom(999));
	}

	@Then("^User enters description as \"([^\"]*)\" in accounts page$")
	public void user_enters_description_as_in_accounts_page(String description){
		bankcashpage.enterDescription(description);
	}

	@Then("^User enters initialBalance as \"([^\"]*)\" in accounts page$")
	public void user_enters_initialBalance_as_in_accounts_page(String initialbalance){
		bankcashpage.enterInitialBalance(initialbalance);
	}

	@Then("^User enters accountNumber as \"([^\"]*)\" in account page$")
	public void user_enters_accountNumber_as_in_account_page(String accountnumber){
		bankcashpage.enterAccountnumber(accountnumber+generateRandom(99999));
			}

	@Then("^User enters contactPerson as \"([^\"]*)\" in account page$")
	public void user_enters_contactPerson_as_in_account_page(String contactperson){
		
		bankcashpage.enterContactPerson(contactperson);
	}

	@Then("^User enters phone as \"([^\"]*)\" in accounts page$")
	public void user_enters_phone_as_in_accounts_page(String phone){
		bankcashpage.enterPhone(phone+generateRandom(9999));;
	    
	}

	@Then("^User enters \"([^\"]*)\" in account page$")
	public void user_enters_in_account_page(String bankingURL){
		bankcashpage.enterBankinUrl(bankingURL);
	   
	}

	@And("^User clicks on SubmitButton$")
	public void user_clicks_on_SubmitButton(){
		bankcashpage.clickSubmitButton();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully(){
		listaccountpage.getAccountHeader();
	}
@After
public void tearDown()
{
	driver.close();
	driver.quit();
}


}
