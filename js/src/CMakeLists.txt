cmake_minimum_required(VERSION 2.8)
project(stmpct-js-src)

set(STMPCT_CPP_SRCDIR ../../cpp/src)
set(STMPCT_CPP_BINDIR ${CMAKE_CURRENT_BINARY_DIR}/../../cpp/src)
file(GLOB_RECURSE STMPCT_JS_SRC ${STMPCT_CPP_SRCDIR}/*.cpp *.cpp)

set(CMAKE_CXX_COMPILER em++)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} --bind -std=c++11 -O3 --memory-init-file 0")

add_executable(streamingPercentiles.v1.js ${STMPCT_JS_SRC})
target_include_directories(streamingPercentiles.v1.js PUBLIC ${STMPCT_CPP_SRCDIR}/include ${STMPCT_CPP_BINDIR}/include/stmpct)

add_custom_command(OUTPUT node_modules/uglify-js/bin/uglifyjs
                   COMMAND npm install uglify-js)
add_custom_command(OUTPUT streamingPercentiles.v1.min.js
                   COMMAND ${CMAKE_CURRENT_BINARY_DIR}/node_modules/uglify-js/bin/uglifyjs streamingPercentiles.v1.js -o streamingPercentiles.v1.min.js
                   DEPENDS streamingPercentiles.v1.js node_modules/uglify-js/bin/uglifyjs)
add_custom_target(minify ALL
                  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.min.js)

install(TARGETS streamingPercentiles.v1.js
        DESTINATION js
        COMPONENT js)
install(FILES ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.min.js
        DESTINATION js
        COMPONENT js)
