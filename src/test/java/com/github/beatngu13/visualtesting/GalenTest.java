package com.github.beatngu13.visualtesting;

import java.util.Collections;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;

import com.galenframework.api.Galen;
import com.github.beatngu13.visualtesting.util.DriverFactory;
import com.github.beatngu13.visualtesting.util.DriverFactory.Driver;
import com.github.beatngu13.visualtesting.util.PageFactory;
import com.github.beatngu13.visualtesting.util.PageFactory.Page;

class GalenTest {

	WebDriver driver;

	@BeforeEach
	void setUp() {
		driver = DriverFactory.driver(Driver.CHROME);
	}

	@Test
	void test() throws Exception {
		driver.get(PageFactory.get(Page.WIKIPEDIA));
		Galen.checkLayout(driver, "src/test/resources/galen/specs/characterization-testing.gspec",
				Collections.emptyList());
	}

	@AfterEach
	void tearDown() {
		driver.quit();
	}

}
