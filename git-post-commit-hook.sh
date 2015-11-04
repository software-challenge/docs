#!/bin/bash
# This script needs bash to work! sh ist not enough!

# Put it into .git/hooks/post-commit to automatically publish the docs on github pages.

current_branch=$(git rev-parse --abbrev-ref HEAD)
branch_to_deploy=master
if [ $current_branch == $branch_to_deploy ]; then
  echo "removing output directory ('out')"
  rm -rf ./out
  echo "getting gh-pages repository..."
  old_git_dir=$GIT_DIR
  unset GIT_DIR
  old_git_working_dir=$GIT_WORK_TREE
  unset GIT_WORK_TREE
  git clone git@github.com:CAU-Kiel-Tech-Inf/socha-enduser-docs.git --branch gh-pages --single-branch out
  echo "copying images..."
  cp -r images out/
  echo "generating static pages..."
  asciidoctor -D out index.asciidoc
  echo "putting new version in gh-pages branch"
  cd out
  git add -A
  git commit -a -u -m "automatically updated generated files on commit to master"
  echo "deploying to github"
  git push origin gh-pages
  cd ..
  rm -rf ./out
  GIT_DIR=$old_git_dir
  GIT_WORK_TREE=$old_git_working_dir
fi
