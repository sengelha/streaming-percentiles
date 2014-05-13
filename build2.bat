@echo off

set VCVARS_BAT=C:\Program Files (x86)\Microsoft Visual Studio 12.0\VC\vcvarsall.bat

call "%VCVARS_BAT%" amd64
if not exist build mkdir build
cd build
cmake -G "NMake Makefiles" CMAKE_BUILD_TYPE:Release ..
nmake
