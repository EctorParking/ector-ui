#!/usr/bin/env bash

yarn build
aws s3 sync .out s3://ector-storybook/ --acl public-read --delete
aws cloudfront create-invalidation --paths /\*  --distribution-id EYAH2DL6GCWTJ
