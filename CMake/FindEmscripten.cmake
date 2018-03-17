# - try to find emscripten binary
#
# Variables you might use in your CMakeLists.txt:
#  EMSCRIPTEN_FOUND

find_program(EMSCRIPTEN_CPP_BINARY
             NAMES em++)
mark_as_advanced(EMSCRIPTEN_CPP_BINARY)

include(FindPackageHandleStandardArgs)
find_package_handle_standard_args(emscripten
    DEFAULT_MSG
    EMSCRIPTEN_CPP_BINARY)
