# visual-testing

Evaluation of our AGS framework implementation [recheck](https://github.com/retest/recheck/) and [recheck-web](https://github.com/retest/recheck-web).

Resulting screenshots can be found in the `eval` directory.

## Experimental Setup

We have executed the experiments on an Apple MacBook Pro (Retina 15", 2018) with the following specifications:

* OS: macOS Mojave (10.14.4)
* CPU: 2.2 GHz Intel Core i7-8750H
* GPU: Radeon Pro 555X, Intel UHD Graphics 630
* RAM: 32 GB

The software we have used is:

* Google Chrome: 74.0.3729.131 (resolution for desktop: 1080p, 1920 x 1080 px)
* ChromeDriver: 74.0.3729.6
* Mozilla Firefox: 66.0.3 (resolution for notebook: 720p, 1366 x 768 px)
* GeckoDriver: 0.24.0
* Java: Oracle Java SE 8u202
* Maven: 3.6.1

Library versions etc. are declared within the `pom.xml`. In the case of Applitools, we used the default "Strict" compare mode, which is said to only report perceptible differences.

## Reproduce Results

First, follow the [Applitools Selenium/Java tutorial](https://applitools.com/tutorials/selenium-java.html) to set up your environment. In addition, make sure to install Firefox and GeckoDriver.

Afterwards, clone the forked repositories of [recheck](https://github.com/beatngu13/recheck/) and [recheck-web](https://github.com/beatngu13/recheck-web/). In both projects, switch to the branch `visual-testing` and build from source:

```
mvn install
```

Then, clone this repo and run the tests:

```
mvn test
```

To review your local test results for recheck/recheck-web, you need either the [recheck.cli](https://github.com/retest/recheck.cli/) or [review GUI](https://retest.de/review/). For Applitools, you have to create an account at https://applitools.com/ and set the environment variable `APPLITOOLS_API_KEY` to your personal API key.
