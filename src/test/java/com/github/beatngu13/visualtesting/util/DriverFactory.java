package com.github.beatngu13.visualtesting.util;

import java.util.stream.Stream;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WrapsDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

public class DriverFactory {

	// Taken from https://rapidtables.com/web/dev/screen-resolution-statistics.html.
	private static final String DESKTOP_WINDOW_SIZE = "--window-size=1920,1080";
	private static final String NOTEBOOK_WINDOW_SIZE = "--window-size=1366,768";

	public static Stream<WebDriver> getAll() {
		final var chrome = new ChromeDriver(new ChromeOptions().addArguments(DESKTOP_WINDOW_SIZE));
		final var firefox = new FirefoxDriver(new FirefoxOptions().addArguments(NOTEBOOK_WINDOW_SIZE));
		return Stream.of(chrome, firefox).map(DriverFactory::wrap);
	}

	private static WebDriver wrap(final WebDriver driver) {
		final EventFiringWebDriver wrapper = new EventFiringWebDriver(driver);
		wrapper.register(new StatisticsListener());
		return wrapper;
	}

	public static String getName(final WebDriver driver) {
		final var wrapped = ((WrapsDriver) driver).getWrappedDriver();
		final var capabilities = ((RemoteWebDriver) wrapped).getCapabilities();
		return capabilities.getBrowserName().toLowerCase();
	}

}
