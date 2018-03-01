cmake_minimum_required(VERSION 2.6)
project(stmpct_src_libstmpct)

if(MSVC)
  # Force to always compile with W4
  if(CMAKE_CXX_FLAGS MATCHES "/W[0-4]")
    string(REGEX REPLACE "/W[0-4]" "/W4" CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS}")
  else()
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /W4")
  endif()
elseif(CMAKE_COMPILER_IS_GNUCC OR CMAKE_COMPILER_IS_GNUCXX OR CMAKE_CXX_COMPILER_ID MATCHES "Clang")
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Wno-long-long -pedantic")
else()
  message(FATAL_ERROR "Unrecognized C++ compiler ${CMAKE_CXX_COMPILER_ID}")
endif()

file(GLOB LIBSTMPCT_SRC *.cpp)

add_library(stmpct ${LIBSTMPCT_SRC})
target_compile_features(stmpct PUBLIC cxx_auto_type)
target_include_directories(stmpct PUBLIC
                           include)