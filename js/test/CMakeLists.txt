cmake_minimum_required(VERSION 2.8)
project(stmpct-js-test)

enable_testing()

file(GLOB TESTCASE_SRC *.js)

# Install tape
add_custom_command(
  OUTPUT node_modules/tape/package.json
  COMMAND npm install tape
  )
add_custom_target(
  tape ALL
  DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/node_modules/tape/package.json
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
    COMMAND ./node_modules/tape/bin/tape ${CMAKE_CURRENT_BINARY_DIR}/${testFileName}
  )
endforeach()
