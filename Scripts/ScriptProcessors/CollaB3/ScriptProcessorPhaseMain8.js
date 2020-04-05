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

const var arrNotePhase = [[21, 2.255175], [22, 2.255175], [23, 2.255175], [24, 0], [25, 2.255175], [26, 2.255175], [27, 2.255175], [28, 2.255175], [29, 2.255175], [30, 2.255175], [31, 2.255175], [32, 2.255175], [33, 2.255175], [34, 2.255175], [35, 2.255175], [36, 2.255175], [37, 2.255175], [38, 2.255175], [39, 2.255175], [40, 2.255175], [41, 2.255175], [42, 2.255175], [43, 2.255175], [44, 2.255175], [45, 2.255175], [46, 2.255175], [47, 2.255175], [48, 2.255175], [49, 3.89495], [50, 3.89495], [51, 3.89495], [52, 3.89495], [53, 3.89495], [54, 3.89495], [55, 3.89495], [56, 3.89495], [57, 3.89495], [58, 3.89495], [59, 3.89495], [60, 3.89495], [61, 2.509073], [62, 2.509073], [63, 2.509073], [64, 2.509073], [65, 2.509073], [66, 2.509073], [67, 2.509073], [68, 2.509073], [69, 2.509073], [70, 2.509073], [71, 2.509073], [72, 2.509073], [73, 0.0], [74, 0.0], [75, 0.0], [76, 0.0], [77, 0.0], [78, 0.0], [79, 0.0], [80, 0.0], [81, 0.0], [82, 0.0], [83, 0.0], [84, 0.0], [85, 0.0], [86, 0.0], [87, 0.0], [88, 0.0], [89, 0.0], [90, 0.0], [91, 0.0], [92, 0.0], [93, 0.0], [94, 0.0], [95, 0.0], [96, 0.0], [97, 0.0], [98, 0.0], [99, 0.0], [100, 0.0], [101, 0.0], [102, 0.0], [103, 0.0], [104, 0.0], [105, 0.0], [106, 0.0], [107, 0.0], [108, 0.0], [109, 0.0], [110, 0.0], [111, 0.0], [112, 0.0], [113, 0.0], [114, 0.0], [115, 0.0], [116, 0.0], [117, 0.0], [118, 0.0], [119, 0.0], [120, 0.0], [121, 0.0], [122, 0.0], [123, 0.0], [124, 0.0], [125, 0.0], [126, 0.0], [127, 0.0], [128, 0.0], [129, 0.0], [130, 0.0], [131, 0.0], [132, 0.0], [133, 0.0], [134, 0.0], [135, 0.0], [136, 0.0], [137, 0.0], [138, 0.0], ]
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
 