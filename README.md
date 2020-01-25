# visual-testing

Open-source benchmark suite for visual testing of web-based GUIs, used for the evaluation of our _abstract GUI state (AGS)_ framework implementations [recheck](https://github.com/retest/recheck/) and [recheck-web](https://github.com/retest/recheck-web).

## Benchmark

The benchmark suite consists of offline versions from 20 of the [most popular websites](https://en.wikipedia.org/wiki/List_of_most_popular_websites). The currently available pages are (extracted on January 21, 2020):

1. 360.cn
1. alipay.com
1. apple.com
1. baidu.com
1. bbc.com
1. blogspot.com
1. csdn.net
1. ebay.com
1. facebook.com
1. github.com
1. google.com
1. jd.com
1. live.com
1. linkedin.com
1. soso.com
1. stackoverflow.com
1. twitter.com
1. vk.com
1. wikipedia.org
1. youtube.com

 Based on the GUI changes taxonomy introduced by [Moran et al.](https://arxiv.org/abs/1807.09440), each page was modified to simulate real-world scenarios. The _expected_ (original state) and _actual_ (modified state) versions can be used to evaluate visual testing tools. In order to do so, set the system property `de.retest.visualtesting.pagesState` to `expected` or `actual`.

## Reproduce Experiments

You can reproduce the experiments with the provided `.travis.yml` build configuration. If you want to execute the experiments locally, first follow the [Applitools Selenium/Java tutorial](https://applitools.com/tutorials/selenium-java.html) to set up your environment. In addition, make sure to install [Firefox](https://mozilla.org/en/firefox/) and [GeckoDriver](https://firefox-source-docs.mozilla.org/testing/geckodriver/).

Please note that we used customized (and meanwhile possibly outdated) versions of [recheck](https://github.com/beatngu13/recheck/), [recheck-web](https://github.com/beatngu13/recheck-web/) and [recheck.cli](https://github.com/beatngu13/recheck.cli/). In all projects, you will find a branch named `visual-testing` that you can build from source:

```
mvn install
```

If you want to use our GUI, please go to https://retest.de/review/ and contact us for an evaluation license.

For Applitools, you have to create an account at https://applitools.com/ and set the environment variable `APPLITOOLS_API_KEY` to your personal API key.

Then, clone this repo and run the tests:

```
mvn test
```

Please note:

* While it possible to [declare a specific Firefox version](https://docs.travis-ci.com/user/firefox#selecting-a-firefox-version/) on Travis CI, one cannot [select a Chrome version](https://docs.travis-ci.com/user/chrome/). This means that reproducing the experiments might lead to different results if the Travis CI environment changes.
* Also if you are executing the experiments locally, the results may vary from the ones in the paper due platform, browser or other environment differences.
* While we downloaded the aforementioned web pages to minimize external influences, some pages still obtain assets via the Internet. This might also be a reason for different results.
* Per default, we do _not_ execute the actual evaluation on Travis CI. In order to do so, you can activate the corresponding Maven profile via `--activate-profiles eval`. If you want to do this permanently, adapt `ci/script.sh` accordingly.  

## Empirical Results & Discussion

Please refer to our paper for an overview of the results and discussion. Further details such as screenshots and test reports can be found in the `eval` folder.
