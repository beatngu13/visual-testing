package com.github.beatngu13.visualtesting.util;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Slf4j
public class Statistics {

	private final WebDriver driver;

	public void logPageStatistics() {
		final var pageUrl = driver.getCurrentUrl();
		final var driverName = DriverFactory.getName(driver);
		final var elementCount = getWebElementCount();
		log.info("Page '{}' in '{}' contains {} WebElements.", pageUrl, driverName, elementCount);
	}

	public int getWebElementCount() {
		final List<WebElement> allElements = driver.findElements(org.openqa.selenium.By.xpath("//*"));
		return allElements.size();
	}
}
