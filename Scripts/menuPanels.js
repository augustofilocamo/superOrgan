/*
  Copyright 2020 Studio427 Audio & Augusto Filocamo
  
  This file is part of CollaB3.

  CollaB3 is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  CollaB3 is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with CollaB3. If not, see <https://www.gnu.org/licenses/>.
*/

//! =========================================================== open close panels

const var morePanel = Content.getComponent("morePanel");
const var presetsPanel = Content.getComponent("presetsPanel");
const var settingsPanel = Content.getComponent("settingsPanel");

const var moreButton = Content.getComponent("moreButton");
const var presetsButton = Content.getComponent("presetsButton");
const var settingsButton = Content.getComponent("settingsButton");


inline function onsettingsButtonControl(component, value)
{
    morePanel.showControl(false);
    presetsPanel.showControl(false);
    settingsPanel.showControl(value);
    
    moreButton.setValue(false);
    presetsButton.setValue(false);
    settingsButton.setValue(value);
}



inline function onmoreButtonControl(component, value)
{
    morePanel.showControl(value);
    presetsPanel.showControl(false);
    settingsPanel.showControl(false);
    
    moreButton.setValue(value);
    presetsButton.setValue(false);
    settingsButton.setValue(false);
}


inline function onpresetsButtonControl(component, value)
{
    presetsPanel.showControl(value);
    morePanel.showControl(false);
    settingsPanel.showControl(false);
    
    moreButton.setValue(false);
    presetsButton.setValue(value);
    settingsButton.setValue(false);
};

moreButton.setControlCallback(onmoreButtonControl);
presetsButton.setControlCallback(onpresetsButtonControl);
settingsButton.setControlCallback(onsettingsButtonControl);


