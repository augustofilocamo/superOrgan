/*
  Copyright 2020 Augusto Filocamo
  
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

//! Plugin vs Standalone

const var standaloneSettingPnl = Content.getComponent("standaloneSettingPnl");
const var instrumentSettingPnl = Content.getComponent("instrumentSettingPnl");

standaloneSettingPnl.showControl( ! Engine.isPlugin());
instrumentSettingPnl.showControl(Engine.isPlugin());
