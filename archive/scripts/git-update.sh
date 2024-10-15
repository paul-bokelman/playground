#!/usr/bin/env bash

isOnline=$(ping -q -c1 google.com &>/dev/null && echo online || echo offline)

if [ "$isOnline" = "online" ]; then
    echo "hi"
else
    echo "Wi-Fi not connected. Skipping repo update."
fi


# # Check if Wi-Fi is connected
# if iwconfig 2>&1 | grep -q "ESSID:\""; then
#     # cd /home/chandelier2/Desktop/chandelier

#     # # update the code to latest
#     # git restore .
#     # git pull

#     # sudo reboot

#     echo "hi"
    
# else
#     echo "Wi-Fi not connected. Skipping repo update."
# fi