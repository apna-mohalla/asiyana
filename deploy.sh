git checkout -B gh-pages
git add -f build -n
git commit -am "Deployed website" -n
git filter-branch -f --prune-empty --subdirectory-filter build
git push -f origin gh-pages -n
git checkout -
