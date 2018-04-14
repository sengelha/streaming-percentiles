cmake_minimum_required(VERSION 2.8)
project(stmpct-js-src)

set(STMPCT_CPP_SRCDIR ../../cpp/src)
set(STMPCT_CPP_BINDIR ${CMAKE_CURRENT_BINARY_DIR}/../../cpp/src)
file(GLOB_RECURSE STMPCT_JS_SRC ${STMPCT_CPP_SRCDIR}/*.cpp *.cpp)

set(CMAKE_CXX_COMPILER em++)
set(CMAKE_CXX_FLAGS_DEBUG "--bind -std=c++11 -O0 -g --memory-init-file 0")
set(CMAKE_CXX_FLAGS_RELEASE "--bind -std=c++11 -O3 -DNDEBUG --memory-init-file 0")
set(CMAKE_CXX_FLAGS_RELWITHDEBINFO "--bind -std=c++11 -O3 -DNDEBUG --memory-init-file 0")

add_executable(streamingPercentiles-unwrapped.v1.js ${STMPCT_JS_SRC})
target_include_directories(streamingPercentiles-unwrapped.v1.js PUBLIC
                           ${STMPCT_CPP_SRCDIR}/include
                           ${STMPCT_CPP_BINDIR}/include/stmpct)

file(WRITE ${CMAKE_CURRENT_BINARY_DIR}/concat.cmake "
file(WRITE \${DST} \"\")

file(READ \${SRC1} S1)
file(APPEND \${DST} \"\${S1}\")

file(READ \${SRC2} S2)
file(APPEND \${DST} \"\${S2}\")

file(READ \${SRC3} S3)
file(APPEND \${DST} \"\${S3}\")
")
add_custom_command(OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.js
                   COMMAND ${CMAKE_COMMAND} -D SRC1=${CMAKE_CURRENT_SOURCE_DIR}/umdprefix.js
                                            -D SRC2=${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles-unwrapped.v1.js
                                            -D SRC3=${CMAKE_CURRENT_SOURCE_DIR}/umdsuffix.js
                                            -D DST=${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.js
                                            -P ${CMAKE_CURRENT_BINARY_DIR}/concat.cmake
                   DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/umdprefix.js ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles-unwrapped.v1.js ${CMAKE_CURRENT_SOURCE_DIR}/umdsuffix.js)

add_custom_command(OUTPUT node_modules/uglify-js/bin/uglifyjs
                   COMMAND npm install uglify-js)
add_custom_command(OUTPUT streamingPercentiles.v1.min.js
                   COMMAND ${CMAKE_CURRENT_BINARY_DIR}/node_modules/uglify-js/bin/uglifyjs streamingPercentiles.v1.js -o streamingPercentiles.v1.min.js
                   DEPENDS streamingPercentiles.v1.js node_modules/uglify-js/bin/uglifyjs)
add_custom_target(minify ALL
                  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.min.js)

install(FILES ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.js
        DESTINATION js
        COMPONENT js)
install(FILES ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.min.js
        DESTINATION js
        COMPONENT js)
