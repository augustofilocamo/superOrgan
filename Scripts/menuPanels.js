
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


