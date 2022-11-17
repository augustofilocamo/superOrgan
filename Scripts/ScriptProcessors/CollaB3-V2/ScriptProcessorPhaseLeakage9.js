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

const var arrNotePhase = [[21, 0.96334], [22, 0.96334], [23, 0.96334], [24, 0], [25, 0.96334], [26, 0.96334], [27, 0.96334], [28, 0.96334], [29, 0.96334], [30, 0.96334], [31, 0.96334], [32, 0.96334], [33, 0.96334], [34, 0.96334], [35, 0.96334], [36, 0.96334], [37, 0.96334], [38, 0.96334], [39, 0.96334], [40, 0.96334], [41, 0.96334], [42, 0.96334], [43, 0.96334], [44, 0.96334], [45, 0.96334], [46, 0.96334], [47, 0.96334], [48, 0.96334], [49, 0.96334], [50, 0.96334], [51, 0.96334], [52, 0.96334], [53, 0.96334], [54, 0.96334], [55, 0.96334], [56, 0.96334], [57, 0.96334], [58, 0.96334], [59, 0.96334], [60, 0.96334], [61, 0.96334], [62, 0.96334], [63, 0.96334], [64, 0.96334], [65, 0.96334], [66, 0.96334], [67, 0.96334], [68, 0.96334], [69, 0.96334], [70, 0.96334], [71, 0.96334], [72, 0.96334], [73, 0.96334], [74, 0.96334], [75, 0.96334], [76, 0.96334], [77, 0.96334], [78, 0.96334], [79, 0.96334], [80, 0.96334], [81, 0.96334], [82, 0.96334], [83, 0.96334], [84, 0.96334], [85, 0.96334], [86, 0.96334], [87, 0.96334], [88, 0.96334], [89, 0.96334], [90, 0.96334], [91, 0.96334], [92, 0.96334], [93, 0.96334], [94, 0.96334], [95, 0.96334], [96, 0.96334], [97, 0.96334], [98, 0.96334], [99, 0.96334], [100, 0.96334], [101, 0.96334], [102, 0.96334], [103, 0.96334], [104, 0.96334], [105, 0.96334], [106, 0.96334], [107, 0.96334], [108, 0.96334], [109, 0.96334], [110, 0.96334], [111, 0.96334], [112, 0.96334], [113, 0.96334], [114, 0.96334], [115, 0.96334], [116, 0.96334], [117, 0.96334], [118, 0.96334], [119, 0.96334], [120, 0.96334], [121, 0.96334], [122, 0.96334], [123, 0.96334], [124, 0.96334], [125, 0.96334], [126, 0.96334], [127, 0.96334], [128, 0.96334], [129, 0.96334], [130, 0.96334], [131, 0.96334], [132, 0.96334], [133, 0.96334], [134, 0.96334], [135, 0.96334], [136, 0.96334], [137, 0.96334], [138, 0.96334], ]
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
 