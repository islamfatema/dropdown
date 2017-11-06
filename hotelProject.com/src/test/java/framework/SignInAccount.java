package framework;

import org.openqa.selenium.By;

public class SignInAccount extends BasePage{
	
	public void clickOnSingin(By locator){
		clickOn (locator);
	}
	
	public void entertext(String email){
		enteremail(email);
	}

}
