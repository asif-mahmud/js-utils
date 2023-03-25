
# Table of Contents

1.  [JS Utils](#org9777f10)
2.  [Functions](#org21e8bfe)
    1.  [flatten](#org0ad782e)
        1.  [example](#org17de469)
        2.  [signature](#org57997c2)
        3.  [arguments](#org69e2bac)
        4.  [returns](#orgddab941)
    2.  [unflatten](#orgf3fc905)
        1.  [example](#org49d92c9)
        2.  [signature](#org004e909)
        3.  [arguments](#org8d148fd)
        4.  [returns](#orgfc84558)



<a id="org9777f10"></a>

# JS Utils

Collection of some utility functions for javascript/typescript.


<a id="org21e8bfe"></a>

# Functions


<a id="org0ad782e"></a>

## flatten

Flattens an object's properties into string properties.


<a id="org17de469"></a>

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


<a id="org57997c2"></a>

### signature

    flatten(inputValue)


<a id="org69e2bac"></a>

### arguments

-   **inputValue:** Object


<a id="orgddab941"></a>

### returns

flattened object. see example.


<a id="orgf3fc905"></a>

## unflatten

Reverse of flatten. From a flattened object returns the original object with all
it's nested properties and values.


<a id="org49d92c9"></a>

### example

    unflatten(  {
      a: 1,
      "b.b1": 2,
      "b.b2.0": 0,
      "b.b2.1": 1,
      "b.b2.2": 2,
      "c.0.c1": 1,
      "c.0.c2.c21": 1,
      "c.0.c2.c22": 2
    });
    
    /*
    {
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
      ]
    }
    */


<a id="org004e909"></a>

### signature

    unflatten(inputValue)


<a id="org8d148fd"></a>

### arguments

-   **inputValue:** flattened object


<a id="orgfc84558"></a>

### returns

original object. see example.

