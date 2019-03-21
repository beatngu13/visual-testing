package com.github.beatngu13.visualtesting;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;

import com.applitools.eyes.selenium.Eyes;
import com.github.beatngu13.visualtesting.util.DriverFactory;
import com.github.beatngu13.visualtesting.util.DriverFactory.Driver;
import com.github.beatngu13.visualtesting.util.PageFactory;
import com.github.beatngu13.visualtesting.util.PageFactory.Page;

class ApplitoolsTest {

	WebDriver driver;
	Eyes eyes;

	@BeforeEach
	void setUp() {
		driver = DriverFactory.driver(Driver.CHROME);
		eyes = new Eyes();
		eyes.setApiKey(System.getenv("APPLITOOLS_API_KEY"));
		eyes.setForceFullPageScreenshot(true);
	}

	@Test
	void test() throws Exception {
		eyes.open(driver, "wikipedia", "characterization-testing");
		driver.get(PageFactory.get(Page.WIKIPEDIA));
		eyes.checkWindow();
	}

	@AfterEach
	void tearDown() {
		eyes.close();
		driver.quit();
		eyes.abortIfNotClosed();
	}

}
