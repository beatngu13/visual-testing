package com.github.beatngu13.visualtesting.util;

import java.util.function.Supplier;
import java.util.stream.Stream;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WrapsDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;

/**
 * Provides ready-to-use {@code WebDriver}s and various related utilities.
 */
public class DriverFactory {

	/**
	 * @return All {@code WebDriver}s to test with.
	 */
	public static Stream<Supplier<WebDriver>> getAll() {
		final Supplier<WebDriver> chrome = () -> wrap(
				new ChromeDriver(new ChromeOptions().addArguments("--window-size=1920,1080")));
		final Supplier<WebDriver> firefox = () -> wrap(
				new FirefoxDriver(new FirefoxOptions().addArguments("--width=1920", "--height=1080")));
		return Stream.of(chrome, firefox);
	}

	private static WebDriver wrap(final WebDriver driver) {
		final EventFiringWebDriver wrapper = new EventFiringWebDriver(driver);
		wrapper.register(new StatisticsListener());
		return wrapper;
	}

	/**
	 * @param driver The used {@code WebDriver}.
	 * @return (Pretty) name for the given {@code WebDriver}.
	 */
	public static String getName(final WebDriver driver) {
		final var wrapped = ((WrapsDriver) driver).getWrappedDriver();
		final var capabilities = ((RemoteWebDriver) wrapped).getCapabilities();
		return capabilities.getBrowserName().toLowerCase();
	}

}
