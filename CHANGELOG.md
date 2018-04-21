# 2.2.0 - 2018-04-20
- Finish consolidation of streaming-percentiles-cpp and
  streaming-percentiles-js by adding support of publishing
  streaming-percentiles package to NPM

# 2.1.0 - 2018-04-14
- Wrapped JS library into a UMD so that it works from
  Node, require.js, and script src=...
- Added browser-based unit tests usig nightwatch.js
- Changed node unit test framework from unit.js to tape

# 2.0.0 - 2018-03-30
- Added CKMS algorithm with support for uniform, low-biased,
  high-biased, and targeted quantiles
- Build shared libraries on all platforms (including Windows)
- Changed ABI of all algorithms to use C++ pimpl paradigm so that
  the ABI should be stable from now on

# 1.2.0 - 2018-03-19
- Create cross-compiled JavaScript version with emscripten
  (when available)
- Ensure Win32-generated packages are created as .ZIP
  not .MSI
- Separate out release and debug target directories when
  building on Linux / Mac OS X

# 1.1.0 - 2018-03-17
- Build both static and shared libraries on most platforms
  using cpack
- Create a .zip / .tar.gz as the final step of the build
  process

# 1.0.1 - 2018-03-12
- Fixed an off-by-one bug with Greenwald-Khanna which could cause
  a buffer underflow
- Make the internal state of Greenwald-Khanna private instead of
  public

# 1.0.0 - 2018-03-09
Initial release.  Supports the Greenwald-Khanna algorithm.
