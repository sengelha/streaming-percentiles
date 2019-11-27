cmake_minimum_required(VERSION 2.8)
project(stmpct-js-src)

set(CMAKE_CXX_COMPILER em++)
set(CMAKE_CXX_FLAGS "-s WASM=0 --memory-init-file 0")
set(CMAKE_CXX_FLAGS_DEBUG "-O0 -g")
set(CMAKE_CXX_FLAGS_RELEASE "-O2 -DNDEBUG")
set(CMAKE_CXX_FLAGS_RELWITHDEBINFO "-O2 -g -DNDEBUG")
set(CMAKE_EXE_LINKER_FLAGS "--bind")
set(CMAKE_SHARED_LIBRARY_LINK_CXX_FLAGS "")

set(STMPCT_CPP_SRCDIR ../../cpp/src)
file(GLOB_RECURSE STMPCT_JS_SRC ${STMPCT_CPP_SRCDIR}/*.cpp *.cpp)

add_executable(streamingPercentiles-unwrapped.v1.js ${STMPCT_JS_SRC})
target_compile_features(streamingPercentiles-unwrapped.v1.js PRIVATE cxx_std_11)
target_include_directories(streamingPercentiles-unwrapped.v1.js PRIVATE
                           ${STMPCT_CPP_SRCDIR}/include)

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

# Prepare for NPM packaging
file(WRITE ${CMAKE_CURRENT_BINARY_DIR}/replace_vars.cmake "
file(READ \${SRC} S)
string(REPLACE \"$CPACK_PACKAGE_VERSION_MAJOR\" \"${CPACK_PACKAGE_VERSION_MAJOR}\" S \"\${S}\")
string(REPLACE \"$CPACK_PACKAGE_VERSION_MINOR\" \"${CPACK_PACKAGE_VERSION_MINOR}\" S \"\${S}\")
string(REPLACE \"$CPACK_PACKAGE_VERSION_PATCH\" \"${CPACK_PACKAGE_VERSION_PATCH}\" S \"\${S}\")
file(WRITE \${DST} \"\${S}\")
")
add_custom_command(OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/npm_package/package.json
                   COMMAND ${CMAKE_COMMAND} -D SRC=${CMAKE_CURRENT_SOURCE_DIR}/package.json
                                            -D DST=${CMAKE_CURRENT_BINARY_DIR}/npm_package/package.json
                                            -P ${CMAKE_CURRENT_BINARY_DIR}/replace_vars.cmake
                   DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/package.json ${CMAKE_CURRENT_BINARY_DIR}/replace_vars.cmake)
add_custom_command(OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/npm_package/streamingPercentiles.v1.js
                   COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.js ${CMAKE_CURRENT_BINARY_DIR}/npm_package/streamingPercentiles.v1.js
                   DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/package.json ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.js)
add_custom_command(OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/npm_package/LICENSE
                   COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_SOURCE_DIR}/../../LICENSE ${CMAKE_CURRENT_BINARY_DIR}/npm_package/LICENSE
                   DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/../../LICENSE)
add_custom_command(OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/npm_package/README.md
                   COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_SOURCE_DIR}/../../README.md ${CMAKE_CURRENT_BINARY_DIR}/npm_package/README.md
                   DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/../../README.md)
add_custom_target(prepare_npm_package ALL
                  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/npm_package/package.json
		          ${CMAKE_CURRENT_BINARY_DIR}/npm_package/streamingPercentiles.v1.js
		          ${CMAKE_CURRENT_BINARY_DIR}/npm_package/LICENSE
			  ${CMAKE_CURRENT_BINARY_DIR}/npm_package/README.md)

install(FILES ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.js
        DESTINATION js
        COMPONENT js)
install(FILES ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.min.js
        DESTINATION js
        COMPONENT js)
