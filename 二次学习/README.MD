# TS 知识点，暂且记到这里

1. `extends`可以用来判断一个类型是否是另一个类型的子集

    + 字符串无法通过extends判断是否是另一个字符出串的子集，除非他们完全相等
        ```ts
            type strC = 'a' extends 'ab' ? true : false // false
        ```

    + `extends`可以判断对象、接口类型是否是另一个类型的子集。如果子集的属性比父集多，则判断为false
         ```ts
            type A =  { a: 1 }
            type B =  { a ：1, b: 2 }
            type C = B extends A ? true : false // true
            // 可以联想 interface B extends A
        ```
    