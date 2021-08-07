#!/usr/bin/env python -tt

import os
import tarfile

def normalize_dir_sep(fn):
    return fn.replace(os.path.sep, '/')

pkg_file="cpp/pkg.tar.gz"
if not os.path.exists(pkg_file):
    raise Exception("Could not find package file {}".format(pkg_file))

expected_files=set([
  "./include/stmpct/binary_tree.hpp",
  "./include/stmpct/ckms_hbq.hpp",
  "./include/stmpct/ckms_impl.hpp",
  "./include/stmpct/ckms_lbq.hpp",
  "./include/stmpct/ckms_tq.hpp",
  "./include/stmpct/ckms_uq.hpp",
  "./include/stmpct/gk.hpp",
  "./include/stmpct/qdigest.hpp",
  "./include/stmpct/string_utils.hpp",
  "./include/stmpct/targeted_quantile.hpp",
])

with tarfile.open(pkg_file) as tf:
    actual_files=set([normalize_dir_sep(x.name) for x in tf.getmembers() if x.isfile()])

missing_files = expected_files.difference(actual_files)
if missing_files:
    raise Exception("ERROR: Following expected files are missing: {}".format(missing_files))

extra_files = actual_files.difference(expected_files)
if extra_files:
    raise Exception("ERROR: Following unexpected files in package: {}".format(extra_files))