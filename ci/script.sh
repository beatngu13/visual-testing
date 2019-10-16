#!/bin/bash

set -o nounset
set -o errexit
set -o pipefail

# Firefox

export MOZ_HEADLESS=1
export $(dbus-launch)
export NSS_USE_SHARED_DB=ENABLED

# Maven

mvn verify
