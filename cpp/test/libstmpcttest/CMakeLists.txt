cmake_minimum_required (VERSION 2.6)
project(stmpct_test_libstmpcttest)

file(GLOB LIBSTMPCTTEST_SRC *.cpp)

add_executable(stmpct_test_static ${LIBSTMPCTTEST_SRC})
target_compile_definitions(stmpct_test_static PRIVATE UNIT_TESTING=1)
target_include_directories(stmpct_test_static PRIVATE ${Boost_INCLUDE_DIRS})
target_link_libraries(stmpct_test_static stmpct_cpp_static ${Boost_UNIT_TEST_FRAMEWORK_LIBRARY})
add_test(NAME cpp_stmpct_test_static
         WORKING_DIRECTORY $<TARGET_FILE_DIR:stmpct_test_static>
         COMMAND stmpct_test_static)

if (BUILD_SHARED_LIBRARY)
  add_executable(stmpct_test_shared ${LIBSTMPCTTEST_SRC})
  target_compile_definitions(stmpct_test_shared PRIVATE UNIT_TESTING=1)
  target_compile_features(stmpct_test_shared PRIVATE cxx_defaulted_functions)
  target_include_directories(stmpct_test_shared PRIVATE ${Boost_INCLUDE_DIRS})
  target_link_libraries(stmpct_test_shared stmpct_cpp_shared ${Boost_UNIT_TEST_FRAMEWORK_LIBRARY})
  add_test(NAME cpp_stmpct_test_shared
           WORKING_DIRECTORY $<TARGET_FILE_DIR:stmpct_test_shared>
           COMMAND stmpct_test_shared)
endif()
