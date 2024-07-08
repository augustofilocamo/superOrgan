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

const var arrNotePhase = [[21, 0.975334], [22, 0.975334], [23, 0.975334], [24, 0], [25, 0.975334], [26, 0.975334], [27, 0.975334], [28, 0.975334], [29, 0.975334], [30, 0.975334], [31, 0.975334], [32, 0.975334], [33, 0.975334], [34, 0.975334], [35, 0.975334], [36, 0.975334], [37, 0.975334], [38, 0.975334], [39, 0.975334], [40, 0.975334], [41, 0.975334], [42, 0.975334], [43, 0.975334], [44, 0.975334], [45, 0.975334], [46, 0.975334], [47, 0.975334], [48, 0.975334], [49, 0.975334], [50, 0.975334], [51, 0.975334], [52, 0.975334], [53, 0.975334], [54, 0.975334], [55, 0.975334], [56, 0.975334], [57, 0.975334], [58, 0.975334], [59, 0.975334], [60, 0.975334], [61, 0.975334], [62, 0.975334], [63, 0.975334], [64, 0.975334], [65, 0.975334], [66, 0.975334], [67, 0.975334], [68, 0.975334], [69, 0.975334], [70, 0.975334], [71, 0.975334], [72, 0.975334], [73, 0.975334], [74, 0.975334], [75, 0.975334], [76, 0.975334], [77, 0.975334], [78, 0.975334], [79, 0.975334], [80, 0.975334], [81, 0.975334], [82, 0.975334], [83, 0.975334], [84, 0.975334], [85, 0.975334], [86, 0.975334], [87, 0.975334], [88, 0.975334], [89, 0.975334], [90, 0.975334], [91, 0.975334], [92, 0.975334], [93, 0.975334], [94, 0.975334], [95, 0.975334], [96, 0.975334], [97, 0.975334], [98, 0.975334], [99, 0.975334], [100, 0.975334], [101, 0.975334], [102, 0.975334], [103, 0.975334], [104, 0.975334], [105, 0.975334], [106, 0.975334], [107, 0.975334], [108, 0.975334], [109, 0.975334], [110, 0.975334], [111, 0.975334], [112, 0.975334], [113, 0.975334], [114, 0.975334], [115, 0.975334], [116, 0.975334], [117, 0.975334], [118, 0.975334], [119, 0.975334], [120, 0.975334], [121, 0.975334], [122, 0.975334], [123, 0.975334], [124, 0.975334], [125, 0.975334], [126, 0.975334], [127, 0.975334], [128, 0.975334], [129, 0.975334], [130, 0.975334], [131, 0.975334], [132, 0.975334], [133, 0.975334], [134, 0.975334], [135, 0.975334], [136, 0.975334], [137, 0.975334], [138, 0.975334], ]
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
 