cmake_minimum_required(VERSION 2.8)
project(stmpct-cpp)

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
