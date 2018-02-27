cmake_minimum_required(VERSION 2.6)
project(stmpct)

set(Boost_USE_STATIC_LIBS        ON)
set(Boost_USE_MULTITHREADED      ON)
set(Boost_USE_STATIC_RUNTIME    OFF)
find_package(Boost COMPONENTS unit_test_framework REQUIRED)

enable_testing()

add_subdirectory(src)
add_subdirectory(test)
