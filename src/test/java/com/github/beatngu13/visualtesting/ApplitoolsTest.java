package com.github.beatngu13.visualtesting;

import java.util.function.Supplier;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.openqa.selenium.WebDriver;

import com.applitools.eyes.BatchInfo;
import com.applitools.eyes.selenium.Eyes;
import com.github.beatngu13.visualtesting.util.DriverFactory;
import com.github.beatngu13.visualtesting.util.PageFactory;
import com.github.beatngu13.visualtesting.util.TestUtil;
import com.github.beatngu13.visualtesting.util.TimingExtension;

/**
 * Single test with Applitools.
 */
@ExtendWith(TimingExtension.class)
@Disabled
class ApplitoolsTest {

	static BatchInfo batchInfo = new BatchInfo("applitools-demo");

	WebDriver driver;
	Eyes eyes;

	@BeforeEach
	void setUp() {
		eyes = new Eyes();
		eyes.setApiKey(System.getenv("APPLITOOLS_API_KEY"));
		eyes.setBatch(batchInfo);
	}

	@ParameterizedTest
	@MethodSource("com.github.beatngu13.visualtesting.util.DriverFactory#getAll")
	void testApplitoolsDemo(final Supplier<WebDriver> driverSupplier) throws Exception {
		this.driver = driverSupplier.get();
		eyes.open(DriverFactory.unwrap(driver), "applitools-demo", "test");
		driver.get(PageFactory.getApplitoolsDemo());
		Thread.sleep(TestUtil.PAGE_LOAD_WAIT_IN_MILLISECONDS);
		eyes.checkWindow();
		eyes.close();
	}

	@AfterEach
	void tearDown() {
		driver.quit();
		eyes.abortIfNotClosed();
	}

}
