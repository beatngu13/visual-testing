package com.github.beatngu13.visualtesting;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.openqa.selenium.WebDriver;

import com.applitools.eyes.BatchInfo;
import com.applitools.eyes.selenium.Eyes;

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
	@MethodSource("com.github.beatngu13.visualtesting.util.TestUtil#getArgs")
	void testApp(final WebDriver driver, final String url) throws Exception {
		this.driver = driver;
		eyes.open(driver, "acme", "app");
		driver.get(url);
		eyes.checkWindow();
		eyes.close();
	}

	@AfterEach
	void tearDown() {
		driver.quit();
		eyes.abortIfNotClosed();
	}

}
