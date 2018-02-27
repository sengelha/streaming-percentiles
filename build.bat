@echo off

set BUILD_TYPE="Visual Studio 14 2015 Win64"
set BUILD_CONFIG=Debug

if not exist target mkdir target

cmd /c "cd target & cmake -G %BUILD_TYPE% --config %BUILD_CONFIG% .." || exit /b 1
cmd /c "cd target & cmake --build . --config %BUILD_CONFIG%" || exit /b 1
cmd /c "set CTEST_OUTPUT_ON_FAILURE=TRUE & cd target & ctest -C %BUILD_CONFIG%" || exit /b 1