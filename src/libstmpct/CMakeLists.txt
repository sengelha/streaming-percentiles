cmake_minimum_required(VERSION 2.6)
project(stmpct_src_libstmpct)

file(GLOB LIBSTMPCT_SRC *.cpp)

add_library(stmpct ${LIBSTMPCT_SRC})
target_compile_features(stmpct PUBLIC cxx_auto_type)
target_include_directories(stmpct PUBLIC
                           include)