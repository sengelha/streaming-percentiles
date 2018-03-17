cmake_minimum_required(VERSION 2.8)
project(stmpct-js-src)

set(STMPCT_CPP_SRCDIR ../../cpp/src)
file(GLOB_RECURSE STMPCT_CPP_SRC ${STMPCT_CPP_SRCDIR}/*.cpp)

set(CMAKE_CXX_COMPILER em++)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} --bind -std=c++11 -O3 --memory-init-file 0 -I${CMAKE_CURRENT_SOURCE_DIR}/../../cpp/src -I${CMAKE_CURRENT_BINARY_DIR}/generated")

add_executable(stmpct.js ${STMPCT_CPP_SRC})
target_include_directories(stmpct.js PUBLIC ${STMPCT_CPP_SRCDIR}/include)

install(TARGETS stmpct.js
        DESTINATION lib
        COMPONENT js)
