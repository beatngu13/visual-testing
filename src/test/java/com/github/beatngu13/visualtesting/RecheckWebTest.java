package com.github.beatngu13.visualtesting;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.openqa.selenium.WebDriver;

import com.github.beatngu13.visualtesting.util.TestUtil;

import de.retest.recheck.Recheck;
import de.retest.recheck.RecheckImpl;

class RecheckWebTest {

	WebDriver driver;
	Recheck re;

	@BeforeEach
	void setUp() {
		re = new RecheckImpl();
	}

	@ParameterizedTest
	@MethodSource("com.github.beatngu13.visualtesting.util.DriverFactory#getAll")
	void testApp(final WebDriver driver) throws Exception {
		this.driver = driver;
		re.startTest("app-" + TestUtil.getName(driver));
//		driver.get(PageFactory.get(Page.APP_V1));
		re.check(driver, "initial");
		re.capTest();
	}

	@AfterEach
	void tearDown() {
		driver.quit();
		re.cap();
	}

}
