package com.github.beatngu13.visualtesting.util;

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

	public static Stream<WebDriver> getAll() {
		final var chrome = new ChromeDriver(new ChromeOptions().addArguments(DESKTOP_WINDOW_SIZE));
		final var firefox = new FirefoxDriver(new FirefoxOptions().addArguments(NOTEBOOK_WINDOW_SIZE));
		return Stream.of(chrome, firefox);
	}

}
