cmake_minimum_required (VERSION 2.6)
project(stmpct_test_testconsole)

include(CheckFunctionExists)

if(MSVC)
  # Force to always compile with W4
  if(CMAKE_CXX_FLAGS MATCHES "/W[0-4]")
    string(REGEX REPLACE "/W[0-4]" "/W4 /WX" CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS}")
  else()
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /W4 /WX")
  endif()
elseif(CMAKE_COMPILER_IS_GNUCC OR CMAKE_COMPILER_IS_GNUCXX)
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Weffc++ -Wall -Wno-long-long -pedantic -Werror")
elseif(CMAKE_CXX_COMPILER_ID MATCHES "Clang")
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Wno-long-long -pedantic -Werror")
else()
  message(FATAL_ERROR "Unrecognized C++ compiler ${CMAKE_CXX_COMPILER_ID}")
endif()

file(GLOB TESTCONSOLE_SRC *.cpp
                          compat/*.cpp)

check_function_exists(gettimeofday HAS_GETTIMEOFDAY)

add_executable(testconsole ${TESTCONSOLE_SRC})
if (HAS_GETTIMEOFDAY)
  target_compile_definitions(testconsole PRIVATE HAS_GETTIMEOFDAY=1)
endif()
target_compile_features(testconsole PRIVATE cxx_lambdas cxx_defaulted_functions)
target_link_libraries(testconsole stmpct_cpp)