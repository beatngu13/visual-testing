package com.github.beatngu13.visualtesting.util;

import java.lang.reflect.Method;

import org.junit.jupiter.api.extension.AfterTestExecutionCallback;
import org.junit.jupiter.api.extension.BeforeTestExecutionCallback;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.api.extension.ExtensionContext.Namespace;
import org.junit.jupiter.api.extension.ExtensionContext.Store;

import lombok.extern.slf4j.Slf4j;

/**
 * Measures and logs the execution time of a test case. Automatically accounts
 * {@link TestUtil#PAGE_LOAD_WAIT_IN_MILLISECONDS}.
 */
@Slf4j
public class TimingExtension implements BeforeTestExecutionCallback, AfterTestExecutionCallback {

	private static final String START_TIME = "StartTime";

	@Override
	public void beforeTestExecution(final ExtensionContext context) throws Exception {
		getStore(context).put(START_TIME, System.currentTimeMillis());
	}

	@Override
	public void afterTestExecution(final ExtensionContext context) throws Exception {
		final Class<?> testClass = context.getRequiredTestClass();
		final Method testMethod = context.getRequiredTestMethod();
		final String displayName = context.getDisplayName();
		final long startTime = getStore(context).remove(START_TIME, long.class);
		final long duration = System.currentTimeMillis() - startTime - TestUtil.PAGE_LOAD_WAIT_IN_MILLISECONDS;
		log.info("{}#{} with parameters {} took {} ms.", testClass.getSimpleName(), testMethod.getName(), displayName,
				duration);
	}

	private Store getStore(final ExtensionContext context) {
		return context.getStore(Namespace.create(getClass(), context.getRequiredTestMethod()));
	}

}
