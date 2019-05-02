package com.github.beatngu13.visualtesting;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;

import com.github.beatngu13.visualtesting.util.DriverFactory;
import com.github.beatngu13.visualtesting.util.DriverFactory.Driver;
import com.github.beatngu13.visualtesting.util.PageFactory;
import com.github.beatngu13.visualtesting.util.PageFactory.Page;

import de.retest.recheck.Recheck;
import de.retest.recheck.RecheckImpl;

class RecheckWebTest {

	WebDriver driver;
	Recheck re;

	@BeforeEach
	void setUp() {
		driver = DriverFactory.get(Driver.CHROME);
		re = new RecheckImpl();
	}

	@Test
	void testLogin() throws Exception {
		re.startTest();
		driver.get(PageFactory.get(Page.LOGIN_V1));
		re.check(driver, "login");
		re.capTest();
	}

	@Test
	void testApp() throws Exception {
		re.startTest();
		driver.get(PageFactory.get(Page.APP_V1));
		re.check(driver, "app");
		re.capTest();
	}

	@AfterEach
	void tearDown() {
		driver.quit();
		re.cap();
	}

}
