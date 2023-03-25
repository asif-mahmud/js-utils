
# Table of Contents

1.  [JS Utils](#org9e24b72)
2.  [Functions](#org95fdeec)
    1.  [flatten](#org8754ccb)
        1.  [example](#orgaf16680)
        2.  [signature](#orgf95fa0e)
        3.  [arguments](#orgd1c9d09)
        4.  [returns](#org69a64eb)



<a id="org9e24b72"></a>

# JS Utils

Collection of some utility functions for javascript/typescript.


<a id="org95fdeec"></a>

# Functions


<a id="org8754ccb"></a>

## flatten

Flattens an object's properties into string properties.


<a id="orgaf16680"></a>

### example

    flatten({
      a: 1,
      b: {
        b1: 2,
        b2: [0, 1, 2]
      },
      c: [
        {
          c1: 1,
          c2: {
            c21: 1,
            c22: 2
          }
        }
      ]});
    
    /*
      {
      a: 1,
      "b.b1": 2,
      "b.b2.0": 0,
      "b.b2.1": 1,
      "b.b2.2": 2,
      "c.0.c1": 1,
      "c.0.c2.c21": 1,
      "c.0.c2.c22": 2
      }
     */


<a id="orgf95fa0e"></a>

### signature

    flatten(inputValue)


<a id="orgd1c9d09"></a>

### arguments

-   **inputValue:** Object


<a id="org69a64eb"></a>

### returns

flattened object. see example.

