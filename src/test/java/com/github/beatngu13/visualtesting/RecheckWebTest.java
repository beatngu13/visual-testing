package com.github.beatngu13.visualtesting;

import java.util.function.Supplier;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.openqa.selenium.WebDriver;

import com.github.beatngu13.visualtesting.util.DriverFactory;
import com.github.beatngu13.visualtesting.util.PageFactory;
import com.github.beatngu13.visualtesting.util.TestUtil;
import com.github.beatngu13.visualtesting.util.TimingExtension;

import de.retest.recheck.Recheck;
import de.retest.recheck.RecheckImpl;

/**
 * Tests with recheck-web.
 */
@ExtendWith(TimingExtension.class)
class RecheckWebTest {

	WebDriver driver;
	Recheck re;

	@BeforeEach
	void setUp() {
		re = new RecheckImpl();
	}

	@ParameterizedTest
	@MethodSource("com.github.beatngu13.visualtesting.util.TestUtil#getArgs")
	void testTop25(final WebDriver driver, final String url) throws Exception {
		this.driver = driver;
		re.startTest(TestUtil.getName(driver, url));
		driver.get(url);
		Thread.sleep(TestUtil.PAGE_LOAD_WAIT_IN_MILLISECONDS);
		re.check(driver, "initial");
		re.capTest();
	}

	@ParameterizedTest
	@MethodSource("com.github.beatngu13.visualtesting.util.DriverFactory#getAll")
	void testApplitoolsDemo(final Supplier<WebDriver> driverSupplier) throws Exception {
		this.driver = driverSupplier.get();
		re.startTest("applitools-demo-" + DriverFactory.getName(driver));
		driver.get(PageFactory.getApplitoolsDemo());
		Thread.sleep(TestUtil.PAGE_LOAD_WAIT_IN_MILLISECONDS);
		re.check(driver, "test");
		re.capTest();
	}

	@AfterEach
	void tearDown() {
		driver.quit();
		re.cap();
	}

}
