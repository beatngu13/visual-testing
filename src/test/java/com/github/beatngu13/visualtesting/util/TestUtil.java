package com.github.beatngu13.visualtesting.util;

import java.util.stream.Stream;

import org.junit.jupiter.params.provider.Arguments;
import org.openqa.selenium.WebDriver;

/**
 * Various test utilities.
 */
public class TestUtil {

	/**
	 * Fixed wait time for a page to be loaded.
	 */
	public static final long PAGE_LOAD_WAIT_IN_MILLISECONDS = 1000L;

	private TestUtil() {
	}

	/**
	 * @return The Cartesian product of {@link DriverFactory#getAll()} and
	 *         {@link PageFactory#getAll()}, i.e., the arguments for testing all
	 *         {@code WebDriver}s with all pages.
	 */
	public static Stream<Arguments> getArgs() {
		return DriverFactory.getAll() //
				.flatMap(driverSupplier -> PageFactory.getAll() //
						.map(url -> Arguments.of(driverSupplier.get(), url)));
	}

	/**
	 * @param driver The used {@code WebDriver}.
	 * @param url    The used URL.
	 * @return (Pretty) test name for the given parameters.
	 */
	public static String getName(final WebDriver driver, final String url) {
		return DriverFactory.getName(driver) + "-" + PageFactory.getName(url);
	}

}
