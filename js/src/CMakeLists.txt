cmake_minimum_required(VERSION 2.8)
project(stmpct-js-src)

set(STMPCT_CPP_SRCDIR ../../cpp/src)
file(GLOB_RECURSE STMPCT_JS_SRC ${STMPCT_CPP_SRCDIR}/*.cpp *.cpp)

set(CMAKE_CXX_COMPILER em++)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} --bind -std=c++11 -O3 --memory-init-file 0")

add_executable(streamingPercentiles.v${CPACK_PACKAGE_VERSION_MAJOR}.js ${STMPCT_JS_SRC})
target_include_directories(streamingPercentiles.v${CPACK_PACKAGE_VERSION_MAJOR}.js PUBLIC ${STMPCT_CPP_SRCDIR}/include)

add_custom_command(OUTPUT node_modules/uglify-js/bin/uglifyjs
                   COMMAND npm install uglify-js)
add_custom_command(OUTPUT streamingPercentiles.v${CPACK_PACKAGE_VERSION_MAJOR}.min.js
                   COMMAND ${CMAKE_CURRENT_BINARY_DIR}/node_modules/uglify-js/bin/uglifyjs streamingPercentiles.v${CPACK_PACKAGE_VERSION_MAJOR}.js -o streamingPercentiles.v${CPACK_PACKAGE_VERSION_MAJOR}.min.js
                   DEPENDS streamingPercentiles.v${CPACK_PACKAGE_VERSION_MAJOR}.js node_modules/uglify-js/bin/uglifyjs)
add_custom_target(minify ALL
                  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v${CPACK_PACKAGE_VERSION_MAJOR}.min.js)

install(TARGETS streamingPercentiles.v${CPACK_PACKAGE_VERSION_MAJOR}.js
        DESTINATION js
        COMPONENT js)
install(FILES ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v${CPACK_PACKAGE_VERSION_MAJOR}.min.js
        DESTINATION js
        COMPONENT js)
