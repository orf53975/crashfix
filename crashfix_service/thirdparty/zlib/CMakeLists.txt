project(zlib)

# Create the list of source files
aux_source_directory( . source_files )

# Define _UNICODE (use wide-char encoding)
add_definitions(-D_UNICODE -D_CRT_SECURE_NO_DEPRECATE )

if(WIN32)
	add_definitions(/wd4996)
endif(WIN32)

# Add library build target
add_library(zlib ${source_files})

set_target_properties(zlib PROPERTIES DEBUG_POSTFIX d )