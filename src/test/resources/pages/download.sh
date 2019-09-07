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
	'login.tmall.com'
	'netflix.com'
	'blogspot.com'
	'pornhub.com'
	'twitch.tv'
	'linkedin.com'
	'google.com.hk'
	'yahoo.co.jp'
	'mail.ru'
	'csdn.net'
	'google.co.jp'
	'google.co.uk'
	'google.co.in'
	'aliexpress.com'
	'alipay.com'
	't.co'
	'microsoft.com'
	'google.com.br'
	'ebay.com'
	'bing.com'
	'porn555.com'
	'livejasmin.com'
	'google.de'
	'amazon.co.jp'
	'office.com'
	'imdb.com'
	'naver.com'
	'xvideos.com'
	'google.ru'
	'github.com'
	'msn.com'
	'stackoverflow.com'
	'google.fr'
	'whatsapp.com'
	'xhamster.com'
	'google.it'
	'google.es'
	'ok.ru'
	'pinterest.com'
	'google.com.tr'
	'quora.com'
	'xnxx.com'
	'sogou.com'
	'samsung.com'
	'accuweather.com'
	'ampproject.org'
	'bitly.com'
	'sm.cn'
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
