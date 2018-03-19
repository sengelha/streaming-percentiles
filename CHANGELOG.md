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