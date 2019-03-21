package com.github.beatngu13.visualtesting;

import org.approvaltests.Approvals;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.github.beatngu13.visualtesting.PageUtil.Page;

class ApprovalTestsTest {

	WebDriver driver;

	@BeforeEach
	void setUp() {
		driver = new ChromeDriver();
	}

	@Test
	void test() throws Exception {
		driver.get(PageUtil.get(Page.WIKIPEDIA));
		Approvals.verifyHtml(driver.getPageSource());
	}

	@AfterEach
	void tearDown() {
		driver.quit();
	}

}
