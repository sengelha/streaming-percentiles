cmake_minimum_required (VERSION 2.6)
project (stmpct-cpp-src)

include (GenerateExportHeader)

if(MSVC)
  # Force to always compile with W4
  if(CMAKE_CXX_FLAGS MATCHES "/W[0-4]")
    string(REGEX REPLACE "/W[0-4]" "/W4" CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS}")
  else()
    set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} /W4")
  endif()
elseif(CMAKE_COMPILER_IS_GNUCC OR CMAKE_COMPILER_IS_GNUCXX OR CMAKE_CXX_COMPILER_ID MATCHES "Clang")
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Wno-long-long -pedantic")
else()
  message(FATAL_ERROR "Unrecognized C++ compiler ${CMAKE_CXX_COMPILER_ID}")
endif()

file(GLOB LIBSTMPCT_SRC *.cpp)
file(GLOB LIBSTMPCT_PUBLIC_HDR include/stmpct/*.hpp)

# We need position-indepepdent code for static builds on non-x86 systems
set (CMAKE_POSITION_INDEPENDENT_CODE TRUE)
add_library(stmpct_cpp_static STATIC ${LIBSTMPCT_SRC})
if (WIN32)
  set_target_properties(stmpct_cpp_static PROPERTIES OUTPUT_NAME stmpcts)
else()
  set_target_properties(stmpct_cpp_static PROPERTIES OUTPUT_NAME stmpct)
endif()
target_compile_features(stmpct_cpp_static PUBLIC cxx_auto_type)
target_compile_definitions(stmpct_cpp_static PUBLIC STMPCT_BUILT_AS_STATIC=1)
target_include_directories(stmpct_cpp_static PUBLIC include ${CMAKE_CURRENT_BINARY_DIR}/include/stmpct)

if (BUILD_SHARED_LIBRARY)
  add_library(stmpct_cpp_shared SHARED ${LIBSTMPCT_SRC})
  set_target_properties(stmpct_cpp_shared PROPERTIES OUTPUT_NAME stmpct)
  target_compile_features(stmpct_cpp_shared PRIVATE cxx_auto_type)
  target_include_directories(stmpct_cpp_shared PUBLIC include ${CMAKE_CURRENT_BINARY_DIR}/include/stmpct)

  generate_export_header(stmpct_cpp_shared
    BASE_NAME stmpct
    EXPORT_MACRO_NAME STMPCT_EXPORT
    EXPORT_FILE_NAME ${CMAKE_CURRENT_BINARY_DIR}/include/stmpct/stmpct_export.hpp
    STATIC_DEFINE STMPCT_BUILT_AS_STATIC
  )
  install(FILES ${CMAKE_CURRENT_BINARY_DIR}/include/stmpct/stmpct_export.hpp
    DESTINATION include/stmpct
    COMPONENT cpp)
endif()

# We want install() to preserve the relative directory structure of the
# header files in this directory (e.g. if a file is a/b.h, we want it
# installed to include/a/b.h), so the below magic stanza does this for us.
foreach(file ${LIBSTMPCT_PUBLIC_HDR})
    get_filename_component(abs_dir ${file} DIRECTORY)
    file(RELATIVE_PATH dir ${CMAKE_CURRENT_SOURCE_DIR}/include ${abs_dir})
    install(FILES ${file}
            DESTINATION include/${dir}
            COMPONENT cpp)
endforeach()

if (BUILD_SHARED_LIBRARY)
  install(TARGETS stmpct_cpp_shared
          ARCHIVE DESTINATION lib
          LIBRARY DESTINATION lib
          COMPONENT cpp)
endif()

install(TARGETS stmpct_cpp_static
        ARCHIVE DESTINATION lib
        COMPONENT cpp)