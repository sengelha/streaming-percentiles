cmake_minimum_required (VERSION 2.6)
project(stmpct_test_libstmpcttest)

file(GLOB TESTCASE_SRC *tests.cpp)

foreach (testPath ${TESTCASE_SRC})
  get_filename_component(testFileName ${testPath} NAME)
  get_filename_component(testName ${testPath} NAME_WE)

  add_executable(cpp_static_${testName} ${testPath})
  target_compile_definitions(cpp_static_${testName} PRIVATE UNIT_TESTING=1)
  target_include_directories(cpp_static_${testName} PRIVATE ${Boost_INCLUDE_DIRS})
  target_link_libraries(cpp_static_${testName} stmpct_cpp_static ${Boost_UNIT_TEST_FRAMEWORK_LIBRARY})
  add_test(NAME cpp_static_${testName}
    WORKING_DIRECTORY $<TARGET_FILE_DIR:cpp_static_${testName}>
    COMMAND cpp_static_${testName})

  # TODO: Re-enable this
#  if (BUILD_SHARED_LIBRARY)
#    add_executable(stmpct_test_shared ${LIBSTMPCTTEST_SRC})
#    target_compile_definitions(stmpct_test_shared PRIVATE UNIT_TESTING=1)
#    target_compile_features(stmpct_test_shared PRIVATE cxx_defaulted_functions)
#    target_include_directories(stmpct_test_shared PRIVATE ${Boost_INCLUDE_DIRS})
#    target_link_libraries(stmpct_test_shared stmpct_cpp_shared ${Boost_UNIT_TEST_FRAMEWORK_LIBRARY})
#    add_test(NAME cpp_stmpct_test_shared
#      WORKING_DIRECTORY $<TARGET_FILE_DIR:stmpct_test_shared>
#      COMMAND stmpct_test_shared)
#  endif()
endforeach()
