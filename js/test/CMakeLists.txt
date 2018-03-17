cmake_minimum_required(VERSION 2.8)
project(stmpct-js-test)

enable_testing()

add_custom_target(mocha ALL
                  COMMAND npm install mocha)
add_custom_target(unit.js ALL
                  COMMAND npm install unit.js)
# TODO: fix the below
add_custom_target(streaming-percentiles ALL
                  COMMAND npm install streaming-percentiles)

add_custom_command(
  OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/gk_tests.js
  COMMAND ${CMAKE_COMMAND} -E copy ${CMAKE_CURRENT_SOURCE_DIR}/gk_tests.js ${CMAKE_CURRENT_BINARY_DIR}/gk_tests.js
  DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/gk_tests.js
)
add_custom_target(install ALL DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/gk_tests.js)

add_test(NAME gk_tests.js
         COMMAND ./node_modules/mocha/bin/mocha gk_tests.js)