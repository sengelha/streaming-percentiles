cmake_minimum_required(VERSION 2.8)
project(stmpct-js-test)

enable_testing()

file(GLOB TESTCASE_SRC *.js)

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

foreach (testPath ${TESTCASE_SRC})
  get_filename_component(testFileName ${testPath} NAME)
  get_filename_component(testName ${testPath} NAME_WE)

  # Copy unit tests to binary folder so they can use installed modules
  add_custom_command(
    OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/${testFileName}
    COMMAND ${CMAKE_COMMAND} -E copy ${testPath} ${CMAKE_CURRENT_BINARY_DIR}/${testFileName}
    DEPENDS ${testPath}
  )
  add_custom_target(
    copy_${testName} ALL
    DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/${testFileName}
  )

  # Test all unit tests
  add_test(
    NAME js_${testName}
    COMMAND ./node_modules/mocha/bin/mocha ${CMAKE_CURRENT_BINARY_DIR}/${testFileName}
  )
endforeach()
