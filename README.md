# visual-testing

Evaluation of our AGS framework implementation [recheck](https://github.com/retest/recheck/) and [recheck-web](https://github.com/retest/recheck-web).

## Evaluation Setup

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

## Reproduce Experiments

First, follow the [Applitools Selenium/Java tutorial](https://applitools.com/tutorials/selenium-java.html) to set up your environment. In addition, make sure to install [Firefox](https://mozilla.org/en/firefox/) and [GeckoDriver](https://firefox-source-docs.mozilla.org/testing/geckodriver/).

Afterwards, clone the forked repositories of [recheck](https://github.com/beatngu13/recheck/) and [recheck-web](https://github.com/beatngu13/recheck-web/). In both projects, switch to the branch `visual-testing` and build from source:

```
mvn install
```

To review local test results from recheck/recheck-web, you need either the [recheck.cli](https://github.com/retest/recheck.cli/) or [review GUI](https://retest.de/review/). For Applitools, you have to create an account at https://applitools.com/ and set the environment variable `APPLITOOLS_API_KEY` to your personal API key.

Then, clone this repo and run the tests:

```
mvn test
```

## Empirical Results & Interpretation

For details, please refer to our paper. Resulting screenshots can be found in the `eval` directory.

Abbreviations: true positive (TP), false positive (FP), true negative (TN), false negative (FN).

### RQ<sub>1</sub>: Change Detection

#### SRQ<sub>1.1</sub>: Text Change

`7e46d5d`: actual change that is supposed to yield a test failure, therefore, TP. Passing test means FN, other changes means FP.

#### SRQ<sub>1.2</sub>: Layout Change

`609fc53`: actual change that is supposed to yield a test failure, therefore, TP. Passing test means FN, other changes means FP.

#### SRQ<sub>1.3</sub>: Resource Change

`a84193a`: actual change that is supposed to yield a test failure, therefore, TP. Passing test means FN, other changes means FP.

### RQ<sub>2</sub>: Error Detection

#### SRQ<sub>2.1</sub>: Overflow

`9f96c75`: actual error that is supposed to yield a test failure, therefore, TP. Passing test means FN, other changes means FP.

#### SRQ<sub>2.2</sub>: Overlap

`c2fb6de`: actual error that is supposed to yield a test failure, therefore, TP. Passing test means FN, other changes means FP.

#### SRQ<sub>2.3</sub>: Lost Alignment

`09b82a0`: actual error that is supposed to yield a test failure, therefore, TP. Passing test means FN, other changes means FP.

### RQ<sub>3</sub>: Scalability

#### SRQ<sub>3.1</sub>: Same Change

`426eb3d`: semantically single change that is supposed to be grouped, therefore, TP. Reporting the same change multiple times means FP.

#### SRQ<sub>3.2</sub>: Dynamic Data

`3ccc50a`: ignored dynamic data that is supposed to yield no test failure, therefore, TN. Failing test means FP.

#### SRQ<sub>3.3</sub>: Minor Change

`656d53c`: minor, unimportant changes that is supposed to yield no test failure, therefore, TN. Failing test means FP.
