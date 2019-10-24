package com.github.beatngu13.visualtesting.util;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Logs various statistics.
 */
@RequiredArgsConstructor
@Slf4j
class Statistics {

	private final WebDriver driver;

	/**
	 * Logs statistics for the current page URL.
	 */
	public void logPageStatistics() {
		final var pageName = PageFactory.getName(driver.getCurrentUrl());
		final var driverName = DriverFactory.getName(driver);
		final var elementCount = getWebElementCount();
		log.info("Page '{}' in '{}' contains {} WebElements.", pageName, driverName, elementCount);
	}

	private int getWebElementCount() {
		final List<WebElement> allElements = driver.findElements(org.openqa.selenium.By.xpath("//*"));
		return allElements.size();
	}
}
