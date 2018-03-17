cmake_minimum_required (VERSION 2.6)
project(stmpct_test_testconsole)

include(CheckFunctionExists)

file(GLOB TESTCONSOLE_SRC *.cpp
                          compat/*.cpp)

check_function_exists(gettimeofday HAS_GETTIMEOFDAY)

add_executable(testconsole_static ${TESTCONSOLE_SRC})
if (HAS_GETTIMEOFDAY)
  target_compile_definitions(testconsole_static PRIVATE HAS_GETTIMEOFDAY=1)
endif()
target_compile_features(testconsole_static PRIVATE cxx_lambdas cxx_defaulted_functions)
target_link_libraries(testconsole_static stmpct_cpp_static)

if (BUILD_SHARED_LIBRARY)
  add_executable(testconsole_shared ${TESTCONSOLE_SRC})
  if (HAS_GETTIMEOFDAY)
    target_compile_definitions(testconsole_shared PRIVATE HAS_GETTIMEOFDAY=1)
  endif()
  target_compile_features(testconsole_shared PRIVATE cxx_lambdas cxx_defaulted_functions)
  target_link_libraries(testconsole_shared stmpct_cpp_shared)
endif()