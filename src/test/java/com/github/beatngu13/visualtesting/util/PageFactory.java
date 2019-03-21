package com.github.beatngu13.visualtesting.util;

import java.net.MalformedURLException;
import java.nio.file.Paths;

public class PageFactory {

	public enum Page {
		WIKIPEDIA
	}

	private static final String BASE_PATH = "src/test/resources/";

	public static String get(Page sut) {
		switch (sut) {
		case WIKIPEDIA:
			return getUrlString("wikipedia/characterization-test.html");
		default:
			throw new IllegalArgumentException("No SUT '" + sut + "' available.");
		}
	}

	private static final String getUrlString(final String relativePath) {
		try {
			return Paths.get(BASE_PATH, relativePath).toUri().toURL().toString();
		} catch (final MalformedURLException e) {
			throw new RuntimeException(e);
		}
	}

}
