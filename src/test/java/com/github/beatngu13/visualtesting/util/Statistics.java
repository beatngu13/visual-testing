package com.github.beatngu13.visualtesting.util;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import de.retest.web.selenium.By;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Statistics {

	public void extract( WebDriver driver ) {
		log.info( "Current page contains {} WebElements.", getWebElementCount( driver ) );
	}

	public int getWebElementCount( WebDriver driver ) {
		List<WebElement> allElements = driver.findElements( By.xpath( "//*" ) );
		return allElements.size();
	}
}
