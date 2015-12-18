#!/usr/bin/env python

from setuptools import setup
import json

npm_package = json.load(open('./package.json', 'r'))
setup(name=npm_package['name'],
      version=npm_package['version'],
      description=npm_package['description'],
      author=npm_package['author'],
      author_email='jon.freder@gmail.com',
      url=npm_package['repository']['url'],
      packages=['jupyter-tree-filter'],
      include_package_data=True,
     )