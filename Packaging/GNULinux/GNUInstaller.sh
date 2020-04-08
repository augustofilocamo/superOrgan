#!/bin/bash

PLUGIN_NAME="Michaelas Harp.so"
STANDALONE_NAME="Michaelas Harp"

read -r -p "Would you like to install the plugin? " install_plugin

if [[ "$install_plugin" =~ ^([yY][eE][sS]|[yY])+$ ]]
then
    echo "Please enter the location to install the plugin file."
    read plugin_path

    until [ -d "$plugin_path" ]; do
     echo "The entered path does not exist. Please enter a different path."
     read plugin_path
    done

    cp -i "$PLUGIN_NAME" "$plugin_path"
else
    echo "The plugin will not be installed"
fi

#read -r -p "Would you like to install standalone application? " install_standalone

#if [[ "$install_standalone" =~ ^([yY][eE][sS]|[yY])+$ ]]
#then
#    echo "Please enter the location to install the standalone version."
#    read standalone_path

#    until [ -d "$standalone_path" ]; do
#     echo "The entered path does not exist. Please enter a different path."
#     read standalone_path
#    done

#    cp -i "$STANDALONE_NAME" "$standalone_path"
#    cp -i "License.txt" "$standalone_path"
#else
#    echo "The standalone application will not be installed"
#fi

echo "The software installation is complete. Please launch the plugin or standalone version and click Install Samples when prompted to install the instrument samples."
