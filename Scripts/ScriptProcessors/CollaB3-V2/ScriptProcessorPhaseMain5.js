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

const var arrNotePhase = [[21, 4.18804], [22, 4.18804], [23, 4.18804], [24, 0], [25, 4.18804], [26, 4.18804], [27, 4.18804], [28, 4.18804], [29, 4.18804], [30, 4.18804], [31, 4.18804], [32, 4.18804], [33, 4.18804], [34, 4.18804], [35, 4.18804], [36, 4.18804], [37, 4.18804], [38, 4.18804], [39, 4.18804], [40, 4.18804], [41, 4.18804], [42, 4.18804], [43, 4.18804], [44, 4.18804], [45, 4.18804], [46, 4.18804], [47, 4.18804], [48, 4.18804], [49, 0.5581], [50, 0.5581], [51, 0.5581], [52, 0.5581], [53, 0.5581], [54, 0.5581], [55, 0.5581], [56, 0.5581], [57, 0.5581], [58, 0.5581], [59, 0.5581], [60, 0.5581], [61, -0.61034], [62, -0.61034], [63, -0.61034], [64, -0.61034], [65, -0.61034], [66, -0.61034], [67, -0.61034], [68, -0.61034], [69, -0.61034], [70, -0.61034], [71, -0.61034], [72, -0.61034], [73, 2.530404], [74, 2.530404], [75, 2.530404], [76, 2.530404], [77, 2.530404], [78, 2.530404], [79, 2.530404], [80, 2.530404], [81, 2.530404], [82, 2.530404], [83, 2.530404], [84, 2.530404], [85, 0.0], [86, 0.0], [87, 0.0], [88, 0.0], [89, 0.0], [90, 0.0], [91, 0.0], [92, 0.0], [93, 0.0], [94, 0.0], [95, 0.0], [96, 0.0], [97, 0.0], [98, 0.0], [99, 0.0], [100, 0.0], [101, 0.0], [102, 0.0], [103, 0.0], [104, 0.0], [105, 0.0], [106, 0.0], [107, 0.0], [108, 0.0], [109, 0.0], [110, 0.0], [111, 0.0], [112, 0.0], [113, 0.0], [114, 0.0], [115, 0.0], [116, 0.0], [117, 0.0], [118, 0.0], [119, 0.0], [120, 0.0], [121, 0.0], [122, 0.0], [123, 0.0], [124, 0.0], [125, 0.0], [126, 0.0], [127, 0.0], [128, 0.0], [129, 0.0], [130, 0.0], [131, 0.0], [132, 0.0], [133, 0.0], [134, 0.0], [135, 0.0], [136, 0.0], [137, 0.0], [138, 0.0], ]
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
 