import { ObjectType } from "./object-type";

export function unflatten(inputValue: ObjectType) {
  const target: ObjectType = {};

  // Iterate over the properties of the value object
  for (const key in inputValue) {
    if (Object.hasOwnProperty.call(inputValue, key)) {
      // Split the key into its parts using the dot notation
      const keys = key.split(".");

      // Create a reference to the current object
      let obj = target;

      // Iterate over each part of the key, except for the last one
      for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i] as string;

        // If the property doesn't exist yet, create an empty object or array
        if (!obj[k]) {
          obj[k] = /^\d+$/.test(keys[i + 1] as string) ? [] : {};
        }

        // Update the reference to the current object
        obj = obj[k] as ObjectType;
      }

      // Set the final property of the object to the corresponding value in the value object
      obj[keys[keys.length - 1] as string] = inputValue[key];
    }
  }

  return target;
}
