@echo off

set project=CollaB3
set xmlFile=CollaB3
set workspace=Y:\hammondb3

set build_standalone=0
set build_plugin=0
set build_installer=1
set clean_project=0

set hise_source=Z:\HISE
set hise_path="Z:\HISE\projects\standalone\Builds\VisualStudio2017\x64\Release\App\HISE.exe"
set installer="C:\Users\John\AppData\Local\Programs\Inno Setup 6\ISCC.exe"

:BuildProject
REM  ====================================================================================

%hise_path% set_hise_folder -p:%hise_source%
%hise_path% set_project_folder -p:%workspace%

echo Changing directory
cd /d %workspace%

if %clean_project%==1 (
	echo Cleaning project
	%hise_path% clean -p:%workspace% --all
)

if %build_standalone%==1 (
	echo Exporting %plugin_name% Standalone
	%hise_path% export_ci XmlPresetBackups/%xmlFile%.xml -t:standalone -a:x86x64
	call %workspace%/Binaries/batchCompile.bat
)

if %build_plugin%==1 (
	echo Exporting %plugin_name% Plugins
	%hise_path% export_ci XmlPresetBackups/%xmlFile%.xml -t:instrument -p:VST -a:x86x64
	call %workspace%/Binaries/batchCompile.bat
)

:CopyFiles
echo Copying files
REM  ====================================================================================

md build

xcopy /E /Y "Binaries\Compiled\*.*" build\

del /S "build\*.lib"
del /S "build\*.exp"

:BuildInstaller
echo Building installer
REM  ====================================================================================

if %build_installer%==1 (
	%hise_path% create-win-installer -noaax
 	%installer% WinInstaller.iss
	echo Cleanup
	xcopy /Y build\"%project% Installer *.exe" Installer\
	rd /S /Q build
	REM del /S /Q WinInstaller.iss
)

:end

cmd /k
