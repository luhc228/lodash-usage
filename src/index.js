// 方式0：使用 lodash 模块
// import _ from 'lodash';
// const { merge, mergeWith } = _;

// import merge from 'lodash.merge';
// import mergeWith from 'lodash.mergewith';

// import merge from 'lodash/merge';
// import mergeWith from 'lodash/mergewith';

// 方式3：使用 lodash-es
import { mergeWith, merge } from 'lodash-es';

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

// console.log(_.merge(object, other));
// console.log(_.mergeWith(object, other, customizer));
console.log(merge(object, other));
console.log(mergeWith(object, other, customizer));