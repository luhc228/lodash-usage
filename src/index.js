// 方式0：使用 lodash 模块
import _ from 'lodash';
const merge = _.merge;
const mergeWith = _.mergeWith;

// 方式1：使用子模块
// import merge from 'lodash.merge';
// import mergeWith from 'lodash.mergewith';

// 方式2：使用 lodash subpath 子模块
// import merge from 'lodash/merge';
// import mergeWith from 'lodash/mergewith';

// 方式3：使用 lodash-es
// import { mergeWith, merge } from 'lodash-es';

var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};

var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};

function customizer(objValue, srcValue) {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

console.log(merge(object, other));
console.log(mergeWith(object, other, customizer));
