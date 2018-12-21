cmake_minimum_required (VERSION 2.6)
project (stmpct-cpp-src)

file(GLOB LIBSTMPCT_PUBLIC_HDR include/stmpct/*.hpp)

add_library(stmpct_cpp INTERFACE)
target_include_directories(stmpct_cpp INTERFACE include)

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

install(TARGETS stmpct_cpp
        ARCHIVE DESTINATION lib
        COMPONENT cpp)