# visual-testing

Open-source benchmark suite for visual testing of web-based GUIs, used for the evaluation of our _abstract GUI state (AGS)_ framework implementation [recheck](https://github.com/retest/recheck/) and [recheck-web](https://github.com/retest/recheck-web).

## Benchmark

The benchmark suite consists of offline versions of the 50 [most popular websites](https://en.wikipedia.org/wiki/List_of_most_popular_websites) (exclusive adult and duplicate content), including a script to update the downloaded versions. Each page was modified to simulate real-world scenarios that can be used to evaluate visual testing tools. The currently available pages are (extracted on September 30, 2019):

1. google.com
1. youtube.com
1. facebook.com
1. baidu.com
1. wikipedia.org
1. qq.com
1. taobao.com
1. tmall.com
1. yahoo.com
1. amazon.com
1. twitter.com
1. sohu.com
1. jd.com
1. live.com
1. instagram.com
1. vk.com	
1. weibo.com
1. reddit.com
1. sina.com.cn
1. yandex.ru
1. 360.cn
1. netflix.com
1. blogspot.com
1. twitch.tv
1. linkedin.com
1. mail.ru
1. csdn.net
1. aliexpress.com
1. alipay.com
1. microsoft.com
1. ebay.com
1. bing.com
1. office.com
1. imdb.com
1. naver.com
1. github.com
1. msn.com
1. stackoverflow.com
1. whatsapp.com
1. ok.ru
1. paypal.com
1. pinterest.com
1. quora.com
1. sogou.com
1. samsung.com
1. ampproject.org
1. bitly.com
1. sm.cn
1. xinhuanet.com
1. tribunnews.com

**TODO: Describe usage.**

## Evaluation Setup

We have executed the experiments on an Apple MacBook Pro (Retina 15", 2018) with the following specifications:

* OS: macOS Mojave (10.14.6)
* CPU: 2.2 GHz Intel Core i7-8750H
* GPU: Radeon Pro 555X, Intel UHD Graphics 630
* RAM: 32 GB

The software we have used is:

* Google Chrome: 77.0.3865.90 (resolution for desktop: 1080p, 1920 x 1080 px)
* ChromeDriver: 77.0.3865.40
* Mozilla Firefox: 69.0.1 (resolution for notebook: 720p, 1366 x 768 px)
* GeckoDriver: 0.24.0
* Java: OpenJDK HotSpot 11.0.4+11
* Maven: 3.6.2

Library versions etc. are declared within the `pom.xml`.

In the case of Applitools, we used the default "Strict" compare mode, which is said to only report perceptible differences.

## Reproduce Experiments

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
