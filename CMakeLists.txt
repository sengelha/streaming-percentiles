cmake_minimum_required(VERSION 2.6)
project(stmpct)

set(Boost_USE_STATIC_LIBS        ON)
set(Boost_USE_MULTITHREADED      ON)
set(Boost_USE_STATIC_RUNTIME    OFF)
find_package(Boost COMPONENTS unit_test_framework REQUIRED)

set(CPACK_PACKAGE_NAME "streaming_percentiles")
set(CPACK_PACKAGE_VENDOR "Steven Engelhardt")
set(CPACK_PACKAGE_DESCRIPTION_SUMMARY "Implementations of various streaming percentile algorithms")
set(CPACK_PACKAGE_VERSION_MAJOR "1")
set(CPACK_PACKAGE_VERSION_MINOR "1")
set(CPACK_PACKAGE_VERSION_PATCH "0")
list(APPEND CPACK_COMPONENTS_ALL cpp)
include(CPack)

enable_testing()

if (WIN32)
  # Enabling shared libraries on Win32 requires a lot of work
  # with __declspec(dllexport) and the like.
  set(BUILD_SHARED_LIBRARY 0)
else()
  set(BUILD_SHARED_LIBRARY 1)
endif()

add_subdirectory(src)
add_subdirectory(test)
