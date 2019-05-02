package com.github.beatngu13.visualtesting.util;

import java.net.MalformedURLException;
import java.nio.file.Paths;

public class PageFactory {

	public enum Page {
		LOGIN_V1,
		LOGIN_V2,
		APP_V1,
		APP_V2
	}

	private static final String BASE_PATH = "src/test/resources/";

	public static String get(Page page) {
		switch (page) {
		case LOGIN_V1:
            return getUrlString("pages/acme-login-v1.html");
		case LOGIN_V2:
            return getUrlString("pages/acme-login-v2.html");
		case APP_V1:
            return getUrlString("pages/acme-app-v1.html");
		case APP_V2:
            return getUrlString("pages/acme-app-v2.html");
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
