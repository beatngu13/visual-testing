package com.github.beatngu13.visualtesting.util;

import org.openqa.selenium.Capabilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

public class DriverUtil {

	private DriverUtil() {
	}

	public static String getName(final WebDriver driver) {
		final Capabilities cap = ((RemoteWebDriver) driver).getCapabilities();
		return cap.getBrowserName().toLowerCase();
	}

}
