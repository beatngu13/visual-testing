package com.github.beatngu13.visualtesting;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.openqa.selenium.WebDriver;

import com.applitools.eyes.BatchInfo;
import com.applitools.eyes.selenium.Eyes;
import com.github.beatngu13.visualtesting.util.PageFactory;
import com.github.beatngu13.visualtesting.util.PageFactory.Page;

class ApplitoolsTest {

	static BatchInfo batchInfo = new BatchInfo("app-xbt");

	WebDriver driver;
	Eyes eyes;

	@BeforeEach
	void setUp() {
		eyes = new Eyes();
		eyes.setApiKey(System.getenv("APPLITOOLS_API_KEY"));
		eyes.setBatch(batchInfo);
		eyes.setForceFullPageScreenshot(true);
	}

	@ParameterizedTest
	@MethodSource("com.github.beatngu13.visualtesting.util.DriverFactory#getAll")
	void testApp(WebDriver driver) throws Exception {
		this.driver = driver;
		eyes.open(driver, "acme", "app");
		driver.get(PageFactory.get(Page.APP_V1));
		eyes.checkWindow();
		eyes.close();
	}

	@AfterEach
	void tearDown() {
		driver.quit();
		eyes.abortIfNotClosed();
	}

}
