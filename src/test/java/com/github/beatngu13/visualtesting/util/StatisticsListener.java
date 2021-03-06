package com.github.beatngu13.visualtesting.util;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.events.WebDriverEventListener;

/**
 * Logs statistics on various {@code WebDriver} events via {@link Statistics}.
 */
class StatisticsListener implements WebDriverEventListener {

	@Override
	public void afterNavigateTo(final String url, final WebDriver driver) {
		final Statistics stats = new Statistics(driver);
		stats.logPageStatistics();
	}

	// not implemented

	@Override
	public void beforeAlertAccept(final WebDriver driver) {

	}

	@Override
	public void afterAlertAccept(final WebDriver driver) {

	}

	@Override
	public void afterAlertDismiss(final WebDriver driver) {

	}

	@Override
	public void beforeAlertDismiss(final WebDriver driver) {

	}

	@Override
	public void beforeNavigateTo(final String url, final WebDriver driver) {

	}

	@Override
	public void beforeNavigateBack(final WebDriver driver) {

	}

	@Override
	public void afterNavigateBack(final WebDriver driver) {

	}

	@Override
	public void beforeNavigateForward(final WebDriver driver) {

	}

	@Override
	public void afterNavigateForward(final WebDriver driver) {

	}

	@Override
	public void beforeNavigateRefresh(final WebDriver driver) {

	}

	@Override
	public void afterNavigateRefresh(final WebDriver driver) {

	}

	@Override
	public void beforeFindBy(final By by, final WebElement element, final WebDriver driver) {

	}

	@Override
	public void afterFindBy(final By by, final WebElement element, final WebDriver driver) {

	}

	@Override
	public void beforeClickOn(final WebElement element, final WebDriver driver) {

	}

	@Override
	public void afterClickOn(final WebElement element, final WebDriver driver) {

	}

	@Override
	public void beforeChangeValueOf(final WebElement element, final WebDriver driver, final CharSequence[] keysToSend) {

	}

	@Override
	public void afterChangeValueOf(final WebElement element, final WebDriver driver, final CharSequence[] keysToSend) {

	}

	@Override
	public void beforeScript(final String script, final WebDriver driver) {

	}

	@Override
	public void afterScript(final String script, final WebDriver driver) {

	}

	@Override
	public void beforeSwitchToWindow(final String windowName, final WebDriver driver) {

	}

	@Override
	public void afterSwitchToWindow(final String windowName, final WebDriver driver) {

	}

	@Override
	public void onException(final Throwable throwable, final WebDriver driver) {

	}

	@Override
	public <X> void beforeGetScreenshotAs(final OutputType<X> target) {

	}

	@Override
	public <X> void afterGetScreenshotAs(final OutputType<X> target, final X screenshot) {

	}

	@Override
	public void beforeGetText(final WebElement element, final WebDriver driver) {

	}

	@Override
	public void afterGetText(final WebElement element, final WebDriver driver, final String text) {

	}

}
