package com.github.beatngu13.visualtesting.util;

import java.io.IOException;
import java.io.UncheckedIOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

/**
 * Provides ready-to-use page URLs and various related utilities.
 */
public class PageFactory {

	private static final String BASE_PATH = "src/test/resources/pages/";
	private static final String PAGES_FILENAME = "pages.txt";
	private static final String INDEX_FILENAME = "index.html";

	/**
	 * @return All URLs to test with.
	 */
	public static Stream<String> getAll() {
		try {
			final Path pages = Paths.get(BASE_PATH, PAGES_FILENAME);
			return Files.lines(pages).map(PageFactory::getUrlString);
		} catch (final IOException e) {
			throw new UncheckedIOException(e);
		}
	}

	/**
	 * @return Applitools demo URL.
	 */
	public static String getApplitoolsDemo() {
		try {
			// Switch to 'actual.html' for differences.
			return Paths.get("src/test/resources/applitools-demo-page/expected.html").toUri().toURL().toString();
		} catch (final MalformedURLException e) {
			throw new RuntimeException(e);
		}
	}

	private static String getUrlString(final String relativePath) {
		try {
			return Paths.get(BASE_PATH, relativePath, INDEX_FILENAME).toUri().toURL().toString();
		} catch (final MalformedURLException e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * @param url The used URL.
	 * @return (Pretty) name for the given URL.
	 */
	public static String getName(final String url) {
		final var withoutIndexSuffix = url.replace("/" + INDEX_FILENAME, ""); //
		final var withoutPathPrefix = withoutIndexSuffix.substring(withoutIndexSuffix.lastIndexOf("/") + 1);
		return withoutPathPrefix;
	}

}
