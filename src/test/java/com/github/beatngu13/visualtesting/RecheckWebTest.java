package com.github.beatngu13.visualtesting;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.github.beatngu13.visualtesting.util.PageFactory;
import com.github.beatngu13.visualtesting.util.PageFactory.Page;

import de.retest.recheck.Recheck;
import de.retest.recheck.RecheckImpl;

class RecheckWebTest {

	WebDriver driver;
	Recheck re;

	@BeforeEach
	void setUp() {
		driver = new ChromeDriver();
		re = new RecheckImpl();
	}

	@Test
	void test() throws Exception {
		re.startTest();
		driver.get(PageFactory.get(Page.WIKIPEDIA));
		re.check(driver, "characterization-testing");
		re.capTest();
	}

	@AfterEach
	void tearDown() {
		driver.quit();
		re.cap();
	}

}
