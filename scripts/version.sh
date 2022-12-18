PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

echo "//# v:$PACKAGE_VERSION" | tee -a lib/*.js
echo "//# v:$PACKAGE_VERSION" | tee -a lib/*.cjs
