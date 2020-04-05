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

const var arrNotePhase = [[21, -4.5071], [22, -4.5071], [23, -4.5071], [24, 0], [25, -4.5071], [26, -4.5071], [27, -4.5071], [28, -4.5071], [29, -4.5071], [30, -4.5071], [31, -4.5071], [32, -4.5071], [33, -4.5071], [34, -4.5071], [35, -4.5071], [36, -4.5071], [37, -4.5071], [38, -4.5071], [39, -4.5071], [40, -4.5071], [41, -4.5071], [42, -4.5071], [43, -4.5071], [44, -4.5071], [45, -4.5071], [46, -4.5071], [47, -4.5071], [48, -4.5071], [49, -4.5071], [50, -4.5071], [51, -4.5071], [52, -4.5071], [53, -4.5071], [54, -4.5071], [55, -4.5071], [56, -4.5071], [57, -4.5071], [58, -4.5071], [59, -4.5071], [60, -4.5071], [61, -4.5071], [62, -4.5071], [63, -4.5071], [64, -4.5071], [65, -4.5071], [66, -4.5071], [67, -4.5071], [68, -4.5071], [69, -4.5071], [70, -4.5071], [71, -4.5071], [72, -4.5071], [73, -4.5071], [74, -4.5071], [75, -4.5071], [76, -4.5071], [77, -4.5071], [78, -4.5071], [79, -4.5071], [80, -4.5071], [81, -4.5071], [82, -4.5071], [83, -4.5071], [84, -4.5071], [85, -4.5071], [86, -4.5071], [87, -4.5071], [88, -4.5071], [89, -4.5071], [90, -4.5071], [91, -4.5071], [92, -4.5071], [93, -4.5071], [94, -4.5071], [95, -4.5071], [96, -4.5071], [97, -4.5071], [98, -4.5071], [99, -4.5071], [100, -4.5071], [101, -4.5071], [102, -4.5071], [103, -4.5071], [104, -4.5071], [105, -4.5071], [106, -4.5071], [107, -4.5071], [108, -4.5071], [109, -4.5071], [110, -4.5071], [111, -4.5071], [112, -4.5071], [113, -4.5071], [114, -4.5071], [115, -4.5071], [116, -4.5071], [117, -4.5071], [118, -4.5071], [119, -4.5071], [120, -4.5071], [121, -4.5071], [122, -4.5071], [123, -4.5071], [124, -4.5071], [125, -4.5071], [126, -4.5071], [127, -4.5071], [128, -4.5071], [129, -4.5071], [130, -4.5071], [131, -4.5071], [132, -4.5071], [133, -4.5071], [134, -4.5071], [135, -4.5071], [136, -4.5071], [137, -4.5071], [138, -4.5071], ]
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
 