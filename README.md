# visual-testing

Open-source benchmark suite for visual testing of web-based GUIs, used for the evaluation of our _abstract GUI state (AGS)_ framework implementation [recheck](https://github.com/retest/recheck/) and [recheck-web](https://github.com/retest/recheck-web).

## Benchmark

The benchmark suite consists of offline versions from 25 of the [most popular websites](https://en.wikipedia.org/wiki/List_of_most_popular_websites), including a script to update the downloaded versions. Each page was modified to simulate real-world scenarios that can be used to evaluate visual testing tools. The currently available pages are (extracted between October 15 and 23, 2019):

1. 360.cn
1. aliexpress.com
1. alipay.com
1. amazon.com
1. apple.com
1. baidu.com
1. bbc.com
1. blogspot.com
1. csdn.net
1. facebook.com
1. github.com
1. google.com
1. imdb.com
1. jd.com
1. live.com
1. netflix.com
1. qq.com
1. quora.com
1. soso.com
1. stackoverflow.com
1. tmall.com
1. twitter.com
1. vk.com
1. wikipedia.org
1. youtube.com

**TODO: Describe usage.**

## Evaluation Setup

**TODO: Update setup.**

We have executed the experiments on [Travis CI](https://travis-ci.com/) using the [Trusty build environment](https://docs.travis-ci.com/user/reference/trusty/) (i.e. Ubuntu 14.04.5 LTS). The software we have used is:

* Google Chrome: 78.0.3904.70-1 (resolution for desktop: 1080p, 1920 x 1080 px)
* ChromeDriver: 65.0.3325.181-0
* Mozilla Firefox: 69.0.1 (resolution for notebook: 720p, 1366 x 768 px)
* GeckoDriver: 0.24.0
* Java: OpenJDK HotSpot 11.0.2+9
* Maven: 3.5.2

Library versions etc. are declared within the `pom.xml`.

Please note:

* While it possible to [declare a specific Firefox version](https://docs.travis-ci.com/user/firefox#selecting-a-firefox-version/) on Travis CI, one cannot [select a Chrome version](https://docs.travis-ci.com/user/chrome/). Therefore, we were working with a fixed Firefox version, but the latest (stable) Chrome at that time. This also means that reproducing the experiments might lead to different results if the Travis CI environment changes.
* Per default, we do _not_ execute the actual evaluation on Travis CI. In order to do so, you can activate the corresponding Maven profile via `--activate-profiles eval`. If you want to do this permanently, adapt `ci/script.sh` accordingly.  

In the case of Applitools, we used the default "Strict" compare mode, which is said to only report perceptible differences.

## Reproduce Experiments

**TODO: Stock recheck/recheck-web?**

First, follow the [Applitools Selenium/Java tutorial](https://applitools.com/tutorials/selenium-java.html) to set up your environment. In addition, make sure to install [Firefox](https://mozilla.org/en/firefox/) and [GeckoDriver](https://firefox-source-docs.mozilla.org/testing/geckodriver/).

Afterwards, clone the forked repositories of [recheck](https://github.com/beatngu13/recheck/) and [recheck-web](https://github.com/beatngu13/recheck-web/). In both projects, switch to the branch `visual-testing` and build from source:

```
mvn install
```

To review local test results from recheck/recheck-web, you need either the [recheck.cli](https://github.com/retest/recheck.cli/) or [review GUI](https://retest.de/review/).

For Applitools, you have to create an account at https://applitools.com/ and set the environment variable `APPLITOOLS_API_KEY` to your personal API key.

Then, clone this repo and run the tests:

```
mvn test
```

## Empirical Results & Interpretation

**TODO: Add results.**
