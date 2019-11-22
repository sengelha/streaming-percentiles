cmake_minimum_required (VERSION 2.6)
project(stmpct_test_libstmpcttest)

include(GoogleTest)

file(GLOB TESTCASE_SRC *.cpp)

add_executable(libstmpcttest ${TESTCASE_SRC})
target_compile_features(libstmpcttest PRIVATE cxx_defaulted_functions)
target_link_libraries(libstmpcttest stmpct_cpp gtest_main)

gtest_discover_tests(libstmpcttest)
