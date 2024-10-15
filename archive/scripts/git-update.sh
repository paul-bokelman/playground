#!/usr/bin/env bash

isOnline=$(ping -q -c1 google.com &>/dev/null && echo online || echo offline)

if [ "$isOnline" = "online" ]; then
    git restore .
    git pull
else
    echo "Wi-Fi not connected. Skipping repo update."
fi