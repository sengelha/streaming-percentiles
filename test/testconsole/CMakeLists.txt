cmake_minimum_required (VERSION 2.6)
project(stmpct_test_testconsole)

file(GLOB TESTCONSOLE_SRC *.cpp)

add_executable(testconsole ${TESTCONSOLE_SRC})
target_compile_features(testconsole PRIVATE cxx_lambdas)
target_link_libraries(testconsole
                      stmpct
                      )
