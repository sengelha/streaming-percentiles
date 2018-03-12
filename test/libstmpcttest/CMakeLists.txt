cmake_minimum_required (VERSION 2.6)
project(stmpct_test_libstmpcttest)

file(GLOB LIBSTMPCTTEST_SRC *.cpp)

add_executable(stmpct_test ${LIBSTMPCTTEST_SRC})
#target_compile_definitions(stmpct_test PRIVATE UNIT_TESTING=1)
#target_compile_features(stmpct_test PRIVATE cxx_lambdas)
target_include_directories(stmpct_test PRIVATE
                           ${Boost_INCLUDE_DIRS})
target_link_libraries(stmpct_test
                      stmpct
                      ${Boost_UNIT_TEST_FRAMEWORK_LIBRARY}
                      )

add_test(NAME stmpct_test
         WORKING_DIRECTORY $<TARGET_FILE_DIR:stmpct_test>
         COMMAND stmpct_test)
