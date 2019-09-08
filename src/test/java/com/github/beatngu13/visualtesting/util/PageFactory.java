package com.github.beatngu13.visualtesting.util;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class PageFactory {

	private static final String BASE_PATH = "src/test/resources/pages/";
	private static final String PAGES_FILENAME = "pages.txt";
	private static final String INDEX_FILENAME = "index.html";

	public static Stream<String> getAll() {
		try {
			final Path pages = Paths.get(BASE_PATH, PAGES_FILENAME);
			return Files.lines(pages).map(PageFactory::getUrlString);
		} catch (final IOException e) {
			throw new UncheckedIOException(e);
		}
	}

	private static String getUrlString(final String relativePath) {
		try {
			return Paths.get(BASE_PATH, relativePath, INDEX_FILENAME).toUri().toURL().toString();
		} catch (final MalformedURLException e) {
			throw new RuntimeException(e);
		}
	}

	public static String getName(final String url) {
		final var withoutIndexSuffix = url.replace("/" + INDEX_FILENAME, ""); //
		return withoutIndexSuffix.substring(withoutIndexSuffix.lastIndexOf("/") + 1);
	}

}
