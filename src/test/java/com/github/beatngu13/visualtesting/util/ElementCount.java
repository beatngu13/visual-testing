package com.github.beatngu13.visualtesting.util;

import org.openqa.selenium.WebDriver;

import de.retest.web.selenium.By;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ElementCount {

	public ElementCount() {}

	public void extract( WebDriver driver ) {
		log.info( "Html file contains {} elements.", driver.findElements( By.xpath( "//*" ) ).size() );
	}
}
