#pragma once

#ifndef HAS_GETTIMEOFDAY

#define WIN32_LEAN_AND_MEAN
#include <windows.h>

typedef struct timeval {
    long tv_sec;
    long tv_usec;
} timeval;

int gettimeofday(struct timeval * tp, struct timezone * tzp);

#endif