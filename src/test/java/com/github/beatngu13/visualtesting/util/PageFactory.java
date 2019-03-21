package com.github.beatngu13.visualtesting.util;

import java.net.MalformedURLException;
import java.nio.file.Paths;

public class PageFactory {

	public enum Page {
		WIKIPEDIA
	}

	private static final String BASE_PATH = "src/test/resources/";

	public static String get(Page page) {
		switch (page) {
		case WIKIPEDIA:
			return getUrlString("wikipedia/characterization-test.html");
		default:
			throw new IllegalArgumentException("No page '" + page + "' available.");
		}
	}

	private static String getUrlString(final String relativePath) {
		try {
			return Paths.get(BASE_PATH, relativePath).toUri().toURL().toString();
		} catch (final MalformedURLException e) {
			throw new RuntimeException(e);
		}
	}

}
