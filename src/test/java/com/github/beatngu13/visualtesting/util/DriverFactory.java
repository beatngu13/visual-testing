package com.github.beatngu13.visualtesting.util;

import java.util.Arrays;
import java.util.stream.Stream;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

public class DriverFactory {

	// Taken from https://rapidtables.com/web/dev/screen-resolution-statistics.html.
	private static final String DESKTOP_WINDOW_SIZE = "--window-size=1920,1080";
	private static final String NOTEBOOK_WINDOW_SIZE = "--window-size=1366,768";

	public enum Driver {
		CHROME, FIREFOX
	}

	public static WebDriver get(final Driver driver) {
		switch (driver) {
		case CHROME: {
			return new ChromeDriver(new ChromeOptions().addArguments(DESKTOP_WINDOW_SIZE));
		}
		case FIREFOX: {
			return new FirefoxDriver(new FirefoxOptions().addArguments(NOTEBOOK_WINDOW_SIZE));
		}
		default:
			throw new IllegalArgumentException("No driver '" + driver + "' driver available.");
		}
	}

	public static Stream<WebDriver> getAll() {
		return Arrays.stream(Driver.values()).map(DriverFactory::get);
	}

}
