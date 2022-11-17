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

const var arrNotePhase = [[21, 2.32698], [22, 2.32698], [23, 2.32698], [24, 0], [25, 2.32698], [26, 2.32698], [27, 2.32698], [28, 2.32698], [29, 2.32698], [30, 2.32698], [31, 2.32698], [32, 2.32698], [33, 2.32698], [34, 2.32698], [35, 2.32698], [36, 2.32698], [37, 2.32698], [38, 2.32698], [39, 2.32698], [40, 2.32698], [41, 2.32698], [42, 2.32698], [43, 2.32698], [44, 2.32698], [45, 2.32698], [46, 2.32698], [47, 2.32698], [48, 2.32698], [49, -0.673686], [50, -0.673686], [51, -0.673686], [52, -0.673686], [53, -0.673686], [54, -0.673686], [55, -0.673686], [56, -0.673686], [57, -0.673686], [58, -0.673686], [59, -0.673686], [60, -0.673686], [61, 0.960724], [62, 0.960724], [63, 0.960724], [64, 0.960724], [65, 0.960724], [66, 0.960724], [67, 0.960724], [68, 0.960724], [69, 0.960724], [70, 0.960724], [71, 0.960724], [72, 0.960724], [73, 0.774167], [74, 0.774167], [75, 0.774167], [76, 0.774167], [77, 0.774167], [78, 0.774167], [79, 0.774167], [80, 0.774167], [81, 0.774167], [82, 0.774167], [83, 0.774167], [84, 0.774167], [85, 0.0], [86, 0.0], [87, 0.0], [88, 0.0], [89, 0.0], [90, 0.0], [91, 0.0], [92, 0.0], [93, 0.0], [94, 0.0], [95, 0.0], [96, 0.0], [97, 0.0], [98, 0.0], [99, 0.0], [100, 0.0], [101, 0.0], [102, 0.0], [103, 0.0], [104, 0.0], [105, 0.0], [106, 0.0], [107, 0.0], [108, 0.0], [109, 0.0], [110, 0.0], [111, 0.0], [112, 0.0], [113, 0.0], [114, 0.0], [115, 0.0], [116, 0.0], [117, 0.0], [118, 0.0], [119, 0.0], [120, 0.0], [121, 0.0], [122, 0.0], [123, 0.0], [124, 0.0], [125, 0.0], [126, 0.0], [127, 0.0], [128, 0.0], [129, 0.0], [130, 0.0], [131, 0.0], [132, 0.0], [133, 0.0], [134, 0.0], [135, 0.0], [136, 0.0], [137, 0.0], [138, 0.0], ]
function onNoteOn()
{
  local notePlayed = Message.getNoteNumber() -24;  
  Message.setStartOffset(Math.toDegrees((arrNotePhase[notePlayed][1] + (2*Math.PI))) / 360 * 2048);
  //Console.print(Math.toDegrees((arrNotePhase[notePlayed][1] + 6.28)) / 360 * 2048);
  Console.print(arrNotePhase[notePlayed][1] + 6.28);
  //Console.print(arrNotePhase[notePlayed][1]);
  //Console.print(Message.getNoteNumber() + " << midinote");
}
function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 