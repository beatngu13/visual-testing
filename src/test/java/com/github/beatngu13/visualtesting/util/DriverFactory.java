package com.github.beatngu13.visualtesting.util;

import java.util.Arrays;
import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class DriverFactory {

	public enum Driver {
		CHROME
	}

	public static WebDriver driver(final Driver driver) {
		switch (driver) {
		case CHROME: {
			return new ChromeDriver(new ChromeOptions().addArguments(getCommonArguments()));
		}
		default:
			throw new IllegalArgumentException("No driver '" + driver + "\" driver available.");
		}
	}

	private static List<String> getCommonArguments() {
		return Arrays.asList("--headless", "--window-size=1200,800");
	}

}
