cmake_minimum_required(VERSION 2.8)
project(stmpct-js-test)

enable_testing()

# Install mocha
add_custom_command(
  OUTPUT node_modules/mocha/bin/mocha
  COMMAND npm install mocha
)
add_custom_target(
  mocha ALL
  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/node_modules/mocha/bin/mocha
)

# Install unit.js
add_custom_command(
  OUTPUT node_modules/unit.js/package.json
  COMMAND npm install unit.js
)
add_custom_target(
  unit.js ALL
  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/node_modules/unit.js/package.json
)

# Copy unit tests to binary folder so they can use installed modules
add_custom_command(
  OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/gk_tests.js
  COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_SOURCE_DIR}/gk_tests.js ${CMAKE_CURRENT_BINARY_DIR}/gk_tests.js
  DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/gk_tests.js
)
add_custom_target(
  copy_gk_tests.js ALL
  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/gk_tests.js
)

# Test all unit tests
add_test(
  NAME gk_tests.js
  COMMAND ./node_modules/mocha/bin/mocha ${CMAKE_CURRENT_BINARY_DIR}/gk_tests.js
)