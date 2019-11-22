@echo off
setlocal EnableDelayedExpansion EnableExtensions

echo Starting Build at %TIME%

set __BuildArch=x64
set __BuildType=Debug
set __CleanBuild=0
set __Test=1
set __Package=1
set __CPackExe=C:\Program Files\CMake\bin\cpack.exe
set "__ProjectDir=%~dp0"

:Arg_Loop
if "%1" == "" goto ArgsDone
if /i "%1" == "-?"    goto Usage
if /i "%1" == "/?"    goto Usage
if /i "%1" == "/h"    goto Usage
if /i "%1" == "/help"    goto Usage
if /i "%1" == "-h"    goto Usage
if /i "%1" == "--help" goto Usage

if /i "%1" == "/x64"                  (set __BuildArch=x64&set processedArgs=!processedArgs! %1&shift&goto Arg_Loop)
if /i "%1" == "/c"                    (set __CleanBuild=1&set processedArgs=!processedArgs! %1&shift&goto Arg_Loop)
if /i "%1" == "/clean"                (set __CleanBuild=1&set processedArgs=!processedArgs! %1&shift&goto Arg_Loop)
if /i "%1" == "/d"                    (set __BuildType=Debug&set processedArgs=!processedArgs! %1&shift&goto Arg_Loop)
if /i "%1" == "/debug"                (set __BuildType=Debug&set processedArgs=!processedArgs! %1&shift&goto Arg_Loop)
if /i "%1" == "/r"                    (set __BuildType=Release&set processedArgs=!processedArgs! %1&shift&goto Arg_Loop)
if /i "%1" == "/release"              (set __BuildType=Release&set processedArgs=!processedArgs! %1&shift&goto Arg_Loop)
if /i "%1" == "/notest"               (set __Test=0&set processedArgs=!processedArgs! %1&shift&goto Arg_Loop)
if /i "%1" == "/nopackage"            (set __Package=0&set processedArgs=!processedArgs! %1&shift&goto Arg_Loop)

echo.
echo ERROR: Unrecognized flag %1
goto Usage

:ArgsDone

SET __TargetDir=target\%__BuildArch%\%__BuildType%

echo.Building streaming-percentiles with the following settings:
echo.  Build arch: %__BuildArch%
echo.  Build type: %__BuildType%
echo.  Clean build: %__CleanBuild%
echo.  Target directory: %__TargetDir%
echo.

if %__CleanBuild%==1 (
    if exist %__TargetDir% (
        echo Deleting %__TargetDir%...
        rmdir /s /q %__TargetDir%
    )
)
if not exist %__TargetDir% mkdir %__TargetDir%

if defined __GeneratorName set __CMakeOpts=-G "%__GeneratorName%"

cmd /c "cd %__TargetDir% & cmake %__CMakeOpts% %__ProjectDir%" || exit /b 1
cmd /c "cd %__TargetDir% & cmake --build . --config %__BuildType%" || exit /b 1
if %__Test%==1 (
  cmd /c "set CTEST_OUTPUT_ON_FAILURE=TRUE & cd %__TargetDir% & ctest -C %__BuildType%" || exit /b 1
)
if %__Package%==1 (
  cmd /c "cd %__TargetDir% & "%__CPackExe%" -C %__BuildType%" || exit /b 1
)
exit /b 0

:Usage
echo.
echo Build the streaming percentiles C++ library.
echo.
echo Usage:
echo     build.bat [option1] [option2]
echo.
echo All arguments are optional. The options are:
echo.
echo.  /x64           perform a 64-bit build (default)
echo.  /c, /clean     perform a clean build
echo.  /d, /debug     perform a debug build (default)
echo.  /h, /help      print help and exit
echo.  /r, /release   perform a release build
echo.  /notest        skip the testing step of the build
echo.  /nopackage     skip the packaging step of the build
exit /b 1
