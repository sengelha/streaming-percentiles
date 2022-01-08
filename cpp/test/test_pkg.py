#!/usr/bin/python -tt

import os
import sys
import tarfile
import unittest
from rules_python.python.runfiles import runfiles

class TestPackage(unittest.TestCase):
    def test_members(self):
        r = runfiles.Create()
        with tarfile.open(r.Rlocation("streaming-percentiles/cpp/streaming_percentiles-cpp.tar.gz")) as tf:
            actual = [m.name.replace('\\', '/').lstrip("./") for m in tf.getmembers() if m.isfile()]
        expected = [
            'include/stmpct/binary_tree.hpp',
            'include/stmpct/ckms_hbq.hpp',
            'include/stmpct/ckms_impl.hpp',
            'include/stmpct/ckms_lbq.hpp',
            'include/stmpct/ckms_tq.hpp',
            'include/stmpct/ckms_uq.hpp',
            'include/stmpct/gk.hpp',
            'include/stmpct/qdigest.hpp',
            'include/stmpct/string_utils.hpp',
            'include/stmpct/targeted_quantile.hpp'
        ]
        self.assertEqual(expected, actual)

if __name__ == '__main__':
    unittest.main()