//// [ambientDeclarationsExternal.ts]
//// [decls.ts]
// Ambient external module with export assignment
 // Ambient external import declaration referencing ambient external module using top level module name
//// [consumer.ts]
//! 
//!   x Import assignment cannot be used when targeting ECMAScript modules. Consider using `import * as ns from "mod"`, `import {a} from "mod"`, `import d from "mod"`, or another module format instead.
//!    ,----
//!  2 | import imp1 = require('equ');
//!    : ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//!    `----
//! 
//!   x Import assignment cannot be used when targeting ECMAScript modules. Consider using `import * as ns from "mod"`, `import {a} from "mod"`, `import d from "mod"`, or another module format instead.
//!    ,----
//!  6 | import imp3 = require('equ2');
//!    : ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//!    `----
