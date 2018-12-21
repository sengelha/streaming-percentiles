cmake_minimum_required (VERSION 2.6)
project(stmpct_test_libstmpcttest)

# We don't use -Werror here because Boost can cause compiler warnings
# that we don't want to break the build.
if(MSVC)
  # Force to always compile with W4
  if(CMAKE_CXX_FLAGS MATCHES "/W[0-4]")
    string(REGEX REPLACE "/W[0-4]" "/W4" CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS}")
  else()
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /W4")
  endif()
elseif(CMAKE_COMPILER_IS_GNUCC OR CMAKE_COMPILER_IS_GNUCXX)
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Weffc++ -Wall -Wno-long-long -pedantic")
elseif(CMAKE_CXX_COMPILER_ID MATCHES "Clang")
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Wno-long-long -pedantic")
else()
  message(FATAL_ERROR "Unrecognized C++ compiler ${CMAKE_CXX_COMPILER_ID}")
endif()

file(GLOB TESTCASE_SRC *tests.cpp)

foreach (testPath ${TESTCASE_SRC})
  get_filename_component(testFileName ${testPath} NAME)
  get_filename_component(testName ${testPath} NAME_WE)

  add_executable(cpp_${testName} ${testPath})
  target_compile_definitions(cpp_${testName} PRIVATE UNIT_TESTING=1)
  target_compile_features(cpp_${testName} PUBLIC cxx_defaulted_functions)
  target_include_directories(cpp_${testName} PRIVATE ${Boost_INCLUDE_DIRS})
  target_link_libraries(cpp_${testName} stmpct_cpp ${Boost_UNIT_TEST_FRAMEWORK_LIBRARY})
  add_test(NAME cpp_${testName}
    WORKING_DIRECTORY $<TARGET_FILE_DIR:cpp_${testName}>
    COMMAND cpp_${testName})
endforeach()
