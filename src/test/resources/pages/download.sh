#!/usr/bin/env bash

USER_AGENT='Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:68.0) Gecko/20100101 Firefox/68.0'

# See https://en.wikipedia.org/wiki/List_of_most_popular_websites.
WEB_PAGES=(
	'google.com'
	'youtube.com'
	'facebook.com'
	'baidu.com'
	'wikipedia.org'
	'qq.com'
	'taobao.com'
	'tmall.com'
	'yahoo.com'
	'amazon.com'
	'twitter.com'
	'sohu.com'
	'jd.com'
	'live.com'
	'instagram.com'
	'vk.com'
	'weibo.com'
	'reddit.com'
	'sina.com.cn'
	'yandex.ru'
	'360.cn'
	'netflix.com'
	'blogspot.com'
	'twitch.tv'
	'linkedin.com'
	'mail.ru'
	'csdn.net'
	'aliexpress.com'
	'alipay.com'
	'microsoft.com'
	'ebay.com'
	'bing.com'
	'office.com'
	'imdb.com'
	'naver.com'
	'github.com'
	'msn.com'
	'stackoverflow.com'
	'whatsapp.com'
	'ok.ru'
	'pinterest.com'
	'quora.com'
	'sogou.com'
	'samsung.com'
	'accuweather.com'
	'ampproject.org'
	'bitly.com'
	'sm.cn'
	'xinhuanet.com'
	'tribunnews.com'
)

function download_web_page() {
	web_page=$1
	wget --header='Accept: text/html' \
		--header='Accept-Language: en-US' \
		--adjust-extension \
		--backup-converted \
		--convert-links \
		--page-requisites \
		--span-hosts \
		--user-agent="$USER_AGENT" \
		"$web_page"
}

for web_page in "${WEB_PAGES[@]}"; do
	download_web_page $web_page
done
