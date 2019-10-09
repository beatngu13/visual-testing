#!/usr/bin/env bash

USER_AGENT='Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:69.0) Gecko/20100101 Firefox/69.0'

WEB_PAGES='pages.txt'

function download_web_page() {
	web_page="$1"
	echo "Trying to download ${web_page} ..."
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

while read -r web_page; do
	download_web_page "$web_page"
done < "$WEB_PAGES"
