// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { Lib2Class } from 'api-extractor-lib2-test';

/**
 * Various namespace scenarios.
 * @public
 */
export namespace n1 {
  type SomeType1 = number;
  export function someFunction1(): SomeType1 {
    return 5;
  }

  export namespace n2 {
    type SomeType2 = number;
    export function someFunction2(): SomeType2 {
      return 5;
    }

    export namespace n3 {
      export type SomeType3 = number;
      export function someFunction3(): n2.n3.SomeType3 {
        return 5;
      }
    }

    namespace n4 {
      export type SomeType4 = number;
      export function someFunction4(): n4.SomeType4 {
        return 5;
      }
    }
  }
}

/** @public */
export enum SomeEnum {
  A = 'A',
  B = 'B',
  C = 'C'
}

/**
 * Enum member reference.
 * @public
 */
export function someFunction5(): SomeEnum.A {
  return SomeEnum.A;
}

/** @public */
export class SomeClass1 {
  public static staticProp = 5;
}

/**
 * Static class member reference.
 * @public
 */
export function someFunction6(): typeof SomeClass1.staticProp {
  return 5;
}

class SomeClass2 {}

/**
 * Unexported symbol reference.
 * @public
 */
export class SomeClass3 extends SomeClass2 {}

/**
 * Global symbol reference.
 * @public
 */
export function someFunction7(): Promise<void> {
  return Promise.resolve();
}

/**
 * External symbol reference.
 * @public
 */
export function someFunction8(): Lib2Class {
  return new Lib2Class();
}
