package com.github.beatngu13.visualtesting.util;

import java.util.stream.Stream;

import org.junit.jupiter.params.provider.Arguments;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class TestUtil {

	private TestUtil() {
	}

	public static Stream<Arguments> getArgs() {
		return DriverFactory.getAll().flatMap(driver -> PageFactory.getAll().map(url -> Arguments.of(driver, url)));
	}

	public static String getName(final WebDriver driver) {
		final var capabilities = ((RemoteWebDriver) driver).getCapabilities();
		return capabilities.getBrowserName().toLowerCase();
	}

}
