package stepDefination;

import org.openqa.selenium.By;

import cucumber.api.java.en.*;
import framework.SignInAccount;

public class SignInAccountSD {
	SignInAccount obj =new SignInAccount();
	
	@When("^I go to the top right corner and click on sign- in and account dropdown$")
	public void iGoToTheTopRightCornerAndClickOnSignInAndAccountDropdown() throws Throwable {
		obj.clickOnSingin(By.id("hdr-account"));
	}

	@When("^I click on the sign in link$")
	public void iClickOnTheSignInLink() throws Throwable {
		
		obj.clickOnSingin(By.id("hdr-signin"));
	}

	@When("^I enter  username text fields on home screen$")
	public void iEnterUsernameTextFieldsOnHomeScreen() throws Throwable {
		obj.entertext("Chomok");
	    
	}

	@When("^I enter \"([^\"]*)\" password text fields on home screen$")
	public void iEnterPasswordTextFieldsOnHomeScreen(String arg1) throws Throwable {
	    
	}

	@When("^I click on the sign in button$")
	public void iClickOnTheSignInButton() throws Throwable {
	    
	}


}
