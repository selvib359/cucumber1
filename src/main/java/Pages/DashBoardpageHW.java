package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class DashBoardpageHW {
	
			WebDriver driver;
		
		public DashBoardpageHW(WebDriver driver)
		{
			this.driver=driver;
		}
		
		
		//FIND ELEMENTS
		@FindBy(how = How.XPATH, using = "//span[contains(text(),'Bank & Cash')]")WebElement BANKCASH_ELEMENT;
		@FindBy(how = How.XPATH, using = "//a[contains(text(),'New Account')]")WebElement NEWACCOUNT_ELEMENT;
		
		
		
		///CORRESPONDING METHODS
		public void clickBankCash()
		{
			BANKCASH_ELEMENT.click();
			try
			{
				Thread.sleep(3000);
			}
			catch(InterruptedException e)
			{
				e.printStackTrace();
			}
		}
		
		public void clickNewAccount()
		{
			NEWACCOUNT_ELEMENT.click();
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
		
		
		
		
		
		
		
		
		
		
		


