cmake_minimum_required (VERSION 2.6)
project(stmpct_test_testconsole)

include(CheckFunctionExists)

file(GLOB TESTCONSOLE_SRC *.cpp)
if (WIN32)
  file(GLOB TESTCONSOLE_SRC win32/*.cpp)
endif()

check_function_exists(gettimeofday HAS_GETTIMEOFDAY)

add_executable(testconsole ${TESTCONSOLE_SRC})
if (HAS_GETTIMEOFDAY)
  target_compile_definitions(testconsole PRIVATE HAS_GETTIMEOFDAY=1)
endif()
target_compile_features(testconsole PRIVATE cxx_lambdas)
target_link_libraries(testconsole
                      stmpct
                      )
