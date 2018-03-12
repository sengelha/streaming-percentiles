#pragma once

#ifdef HAS_GETTIMEOFDAY
# include <sys/time.h>
#else

typedef struct timeval {
    long tv_sec;
    long tv_usec;
} timeval;

int gettimeofday(struct timeval * tp, struct timezone * tzp);

#endif
