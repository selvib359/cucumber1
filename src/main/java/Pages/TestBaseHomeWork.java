package Pages;

import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBaseHomeWork {
public static WebDriver driver;
	
	public static void initDriver()
	{
		System.setProperty("webdriver.chrome.driver", "driver\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	}
	
	public int generateRandom(int bountryNum)
	{
		Random rnd = new Random();
		int generatedNum =rnd.nextInt(bountryNum);
		return generatedNum;
	}
	
}
