import { ObjectType } from "./object-type";

function objectToArray(inputObj: ObjectType, parents?: string[]) {
  let flatArr: ObjectType[] = [];
  let parentKeys = parents || [];

  // walk through each key of the input object
  for (const key in inputObj) {
    if (Object.hasOwnProperty.call(inputObj, key)) {
      // check if the value for key is nested array or object
      const isObject = inputObj[key] instanceof Object;
      const isArray = inputObj[key] instanceof Array;

      // if the value is object or array, recursively walk through it's children
      if (isObject) {
        if (isArray) {
          flatArr = [
            ...flatArr,
            ...(inputObj[key] as Array<ObjectType>)
              .map((obj, index) =>
                objectToArray(obj, [...parentKeys, key, index.toString()])
              )
              .flat(),
          ];
        } else {
          flatArr = [
            ...flatArr,
            ...objectToArray(inputObj[key] as ObjectType, [...parentKeys, key]),
          ];
        }
      } else {
        // add flattened key with the leaf's value to flattened array
        flatArr = [
          ...flatArr,
          { [[...parentKeys, key].join(".")]: inputObj[key] },
        ];
      }
    }
  }

  // if input object is not an object, it might come from
  // an array value with array of primitive values
  if (!(inputObj instanceof Object)) {
    flatArr = [...flatArr, { [parentKeys.join(".")]: inputObj }];
  }

  return flatArr;
}

export function flatten(inputValue: ObjectType) {
  let output: ObjectType = {};

  const flatArr = objectToArray(inputValue);

  // add each flattened key-value object to the output
  flatArr.forEach((obj) => {
    output = {
      ...output,
      ...obj,
    };
  });

  return output;
}
