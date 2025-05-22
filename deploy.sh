#!/usr/bin/env bash
set -x
set -e

NODE_OPTIONS=--openssl-legacy-provider yarn build:storybook
aws s3 sync .out s3://ector-storybook/ --acl public-read --delete
aws cloudfront create-invalidation --paths /\*  --distribution-id EYAH2DL6GCWTJ
