

//! Plugin vs Standalone

const var standaloneSettingPnl = Content.getComponent("standaloneSettingPnl");
const var instrumentSettingPnl = Content.getComponent("instrumentSettingPnl");

standaloneSettingPnl.showControl( ! Engine.isPlugin());
instrumentSettingPnl.showControl(Engine.isPlugin());
