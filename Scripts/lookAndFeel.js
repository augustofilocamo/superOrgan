/*
  Copyright 2020 Studio427 Audio, Augusto Filocamo, & Arnar Helgi Aðalsteinsson
  
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

//! Look And Feel

const var laf = Engine.createGlobalScriptLookAndFeel();


laf.registerFunction("drawPresetBrowserListItem", function(g, obj)
{
    if(obj.selected)
    {
        g.setColour(0x22FFFFFF);
        g.fillRoundedRectangle([obj.area[0], obj.area[1] + 5, obj.area[2], obj.area[3] - 10], 5.0);
    }
   
    g.setColour(obj.textColour);
    g.setFont("Abel", 20);
    g.drawAlignedText(obj.text, [obj.area[0] + 40, obj.area[1], obj.area[2], obj.area[3], ], "left");
});



