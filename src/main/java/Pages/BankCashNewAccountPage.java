package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

	public class BankCashNewAccountPage{
	
	WebDriver driver;
	
	public  BankCashNewAccountPage(WebDriver driver)
	{
		this.driver=driver;
	}
	
	//ELEMENT LIBRARY
	@FindBy(how = How.XPATH, using = "//input[@id='account']")WebElement ACCOUNTTITLE_ELEMENT;
	@FindBy(how =How.XPATH, using = "//input[@id='description']")WebElement DESCRIPTION_ELEMENT;
	@FindBy(how = How.XPATH , using ="//input[@id='balance']")WebElement INITIAL_BALANCE_ELEMENT;
	@FindBy(how = How.XPATH , using ="//input[@id='account_number']")WebElement ACCOUNT_NUMBER_ELEMENT;
	@FindBy(how = How.XPATH , using ="//input[@id='contact_person']")WebElement CONTACT_PERSON_ELEMENT;
	@FindBy(how = How.XPATH , using ="//input[@id='contact_phone']")WebElement PHONE_ELEMENT;
	@FindBy(how = How.XPATH , using ="//input[@id='ib_url']")WebElement INTERNET_BANKING_URL_ELEMENT;
	@FindBy(how = How.XPATH , using ="//button[@class='btn btn-primary']")WebElement SUBMIT_ELEMENT;
	
	//CORRESPONDING METHODS
	public void enterAccountTitle(String account_title)
	{
		ACCOUNTTITLE_ELEMENT.sendKeys(account_title);
		try
		{
			Thread.sleep(3000);
		}
		catch(InterruptedException e)
		{
			e.printStackTrace();
		}
	}
	
	public void enterDescription(String description)
	{
		DESCRIPTION_ELEMENT.sendKeys(description);
		try
		{
			Thread.sleep(3000);
		}
		catch(InterruptedException e)
		{
			e.printStackTrace();
		}
	}
	
	public void enterInitialBalance(String initial_balance)
	{
		INITIAL_BALANCE_ELEMENT.sendKeys(initial_balance);
		try
		{
			Thread.sleep(3000);
		}
		catch(InterruptedException e)
		{
			e.printStackTrace();
		}
	}
	
	public void enterAccountnumber(String account_number)
	{
		ACCOUNT_NUMBER_ELEMENT.sendKeys(account_number);
		try
		{
			Thread.sleep(3000);
		}
		catch(InterruptedException e)
		{
			e.printStackTrace();
		}
	}
	
	
	public void enterContactPerson(String contact_person)
	{
		CONTACT_PERSON_ELEMENT.sendKeys(contact_person);
		try
		{
			Thread.sleep(3000);
		}
		catch(InterruptedException e)
		{
			e.printStackTrace();
		}
	}
	
	
	public void enterPhone(String phone)
	{
		PHONE_ELEMENT.sendKeys(phone);
		try
		{
			Thread.sleep(3000);
		}
		catch(InterruptedException e)
		{
			e.printStackTrace();
		}
	}
	
	public void enterBankinUrl(String banking_url)
	{
		INTERNET_BANKING_URL_ELEMENT.sendKeys(banking_url);
		try
		{
			Thread.sleep(3000);
		}
		catch(InterruptedException e)
		{
			e.printStackTrace();
		}
	}
	
	
	public void clickSubmitButton()
	{
		SUBMIT_ELEMENT.click();
		try
		{
			Thread.sleep(3000);
		}
		catch(InterruptedException e)
		{
			e.printStackTrace();
		}
	}
	
}
 
