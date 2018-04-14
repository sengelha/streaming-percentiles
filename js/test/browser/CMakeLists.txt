cmake_minimum_required(VERSION 2.8)
project(stmpct-js-test-browser)

enable_testing()

# Install nightwatch
add_custom_command(
  OUTPUT node_modules/nightwatch/package.json
  COMMAND npm install nightwatch
  )
add_custom_target(
  nightwatch ALL
  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/node_modules/nightwatch/package.json
  )

# Install http-server
add_custom_command(
  OUTPUT node_modules/http-server/package.json
  COMMAND npm install http-server
  )
add_custom_target(
  http-server ALL
  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/node_modules/http-server/package.json
  )

# Install chromedriver
add_custom_command(
  OUTPUT node_modules/chromedriver/package.json
  COMMAND npm install chromedriver
  )
add_custom_target(
  chromedriver ALL
  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/node_modules/chromedriver/package.json
  )

# Copy streaming percentiles to target directory
add_custom_command(
  OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.min.js
  COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_BINARY_DIR}/../../src/streamingPercentiles.v1.min.js ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.min.js
  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/../../src/streamingPercentiles.v1.min.js
  )
add_custom_target(
  browser_copy_streamingPercentiles.v1.min.js ALL
  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/streamingPercentiles.v1.min.js
  )

# Copy nightwatch config files to target directory
add_custom_command(
  OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/nightwatch.json
  COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_SOURCE_DIR}/nightwatch.json ${CMAKE_CURRENT_BINARY_DIR}/nightwatch.json
  DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/nightwatch.json
  )
add_custom_target(
  nightwatch.json ALL
  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/nightwatch.json
  )

add_custom_command(
  OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/nightwatch-globals.js
  COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_SOURCE_DIR}/nightwatch-globals.js ${CMAKE_CURRENT_BINARY_DIR}/nightwatch-globals.js
  DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/nightwatch-globals.js
  )
add_custom_target(
  nightwatch-globals.js ALL
  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/nightwatch-globals.js
  )

# Copy all .HTML files to binary directory
file(GLOB HTML_SRC *.html)
foreach (htmlPath ${HTML_SRC})
  get_filename_component(htmlFileName ${htmlPath} NAME)

  # Copy HTML to binary folder so they can be referred to by the test
  add_custom_command(
    OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/${htmlFileName}
    COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_SOURCE_DIR}/${htmlFileName} ${CMAKE_CURRENT_BINARY_DIR}/${htmlFileName}
    DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/${htmlFileName}
  )
  add_custom_target(
    browser_copy_${htmlFileName} ALL
    DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/${htmlFileName}
    )
endforeach()

# Copy all .JS files to binary directory
file(GLOB JS_SRC *.js)
foreach (jsPath ${JS_SRC})
  get_filename_component(jsFileName ${jsPath} NAME)

  # Copy JS to binary folder so they can be referred to by the test
  add_custom_command(
    OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/${jsFileName}
    COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_SOURCE_DIR}/${jsFileName} ${CMAKE_CURRENT_BINARY_DIR}/${jsFileName}
    DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/${jsFileName}
  )
  add_custom_target(
    browser_copy_${jsFileName} ALL
    DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/${jsFileName}
    )
endforeach()

# Set up JS test cases
file(GLOB TESTCASE_SRC *_tests.js)
foreach (testPath ${TESTCASE_SRC})
  get_filename_component(testFileName ${testPath} NAME)
  get_filename_component(testName ${testPath} NAME_WE)

  # Test all unit tests
  add_test(
    NAME browser_${testName}
    COMMAND ./node_modules/nightwatch/bin/nightwatch -t ${CMAKE_CURRENT_BINARY_DIR}/${testFileName}
  )
endforeach()
