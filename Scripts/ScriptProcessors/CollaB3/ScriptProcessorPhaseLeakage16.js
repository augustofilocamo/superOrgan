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

const var arrNotePhase = [[21, 2.08199], [22, 2.08199], [23, 2.08199], [24, 0], [25, 2.08199], [26, 2.08199], [27, 2.08199], [28, 2.08199], [29, 2.08199], [30, 2.08199], [31, 2.08199], [32, 2.08199], [33, 2.08199], [34, 2.08199], [35, 2.08199], [36, 2.08199], [37, 2.08199], [38, 2.08199], [39, 2.08199], [40, 2.08199], [41, 2.08199], [42, 2.08199], [43, 2.08199], [44, 2.08199], [45, 2.08199], [46, 2.08199], [47, 2.08199], [48, 2.08199], [49, 2.08199], [50, 2.08199], [51, 2.08199], [52, 2.08199], [53, 2.08199], [54, 2.08199], [55, 2.08199], [56, 2.08199], [57, 2.08199], [58, 2.08199], [59, 2.08199], [60, 2.08199], [61, 2.08199], [62, 2.08199], [63, 2.08199], [64, 2.08199], [65, 2.08199], [66, 2.08199], [67, 2.08199], [68, 2.08199], [69, 2.08199], [70, 2.08199], [71, 2.08199], [72, 2.08199], [73, 2.08199], [74, 2.08199], [75, 2.08199], [76, 2.08199], [77, 2.08199], [78, 2.08199], [79, 2.08199], [80, 2.08199], [81, 2.08199], [82, 2.08199], [83, 2.08199], [84, 2.08199], [85, 2.08199], [86, 2.08199], [87, 2.08199], [88, 2.08199], [89, 2.08199], [90, 2.08199], [91, 2.08199], [92, 2.08199], [93, 2.08199], [94, 2.08199], [95, 2.08199], [96, 2.08199], [97, 2.08199], [98, 2.08199], [99, 2.08199], [100, 2.08199], [101, 2.08199], [102, 2.08199], [103, 2.08199], [104, 2.08199], [105, 2.08199], [106, 2.08199], [107, 2.08199], [108, 2.08199], [109, 2.08199], [110, 2.08199], [111, 2.08199], [112, 2.08199], [113, 2.08199], [114, 2.08199], [115, 2.08199], [116, 2.08199], [117, 2.08199], [118, 2.08199], [119, 2.08199], [120, 2.08199], [121, 2.08199], [122, 2.08199], [123, 2.08199], [124, 2.08199], [125, 2.08199], [126, 2.08199], [127, 2.08199], [128, 2.08199], [129, 2.08199], [130, 2.08199], [131, 2.08199], [132, 2.08199], [133, 2.08199], [134, 2.08199], [135, 2.08199], [136, 2.08199], [137, 2.08199], [138, 2.08199], ]
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
 