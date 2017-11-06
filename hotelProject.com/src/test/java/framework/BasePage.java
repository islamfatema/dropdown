package framework;


import org.openqa.selenium.By;


import stepDefination.SharedSD;

public class BasePage {
	
	
	public void clickOn (By locator) {
		SharedSD.getDriver().findElement(locator).click();
	}
	
	public void enteremail(String email){
		for (String windowName : SharedSD.getDriver().getWindowHandles()) {
			SharedSD.getDriver().switchTo().window(windowName);
			System.out.println("hhhh");
			SharedSD.getDriver().findElement(By.xpath("//h2[text()='Sign in']")).click();
		}
	}

}
