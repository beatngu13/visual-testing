package com.github.beatngu13.visualtesting;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.openqa.selenium.WebDriver;

import com.applitools.eyes.BatchInfo;
import com.applitools.eyes.selenium.Eyes;
import com.github.beatngu13.visualtesting.util.DriverFactory;
import com.github.beatngu13.visualtesting.util.PageFactory;

class ApplitoolsTest {

	static BatchInfo batchInfo = new BatchInfo("top50");

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
	void testTop50(final WebDriver driver, final String url) throws Exception {
		this.driver = driver;
		eyes.open(driver, PageFactory.getName(url), DriverFactory.getName(driver));
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
