#!/bin/bash
yarn install --production;
zip -r lambda.zip node_modules src env.js index.js;
