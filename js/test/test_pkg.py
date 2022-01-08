#!/usr/bin/python -tt

import os
import sys
import tarfile
import unittest
from rules_python.python.runfiles import runfiles

class TestPackage(unittest.TestCase):
    def test_members(self):
        r = runfiles.Create()
        with tarfile.open(r.Rlocation("streaming-percentiles/js/streaming_percentiles-js.tar.gz")) as tf:
            actual = [m.name.replace('\\', '/').lstrip("./") for m in tf.getmembers() if m.isfile()]
        expected = [
            'js/streamingPercentiles.v1.js',
            'js/streamingPercentiles.v1.min.js',
        ]
        self.assertEqual(expected, actual)

if __name__ == '__main__':
    unittest.main()