//// [F1.ts]
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
const f1 = function() {
    var _ref = _wrap_async_generator(function*() {});
    return function f1() {
        return _ref.apply(this, arguments);
    };
}();
//// [F2.ts]
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
const f2 = function() {
    var _ref = _wrap_async_generator(function*() {
        const x = yield;
    });
    return function f2() {
        return _ref.apply(this, arguments);
    };
}();
//// [F3.ts]
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
const f3 = function() {
    var _ref = _wrap_async_generator(function*() {
        const x = yield 1;
    });
    return function f3() {
        return _ref.apply(this, arguments);
    };
}();
//// [F4.ts]
import _async_generator_delegate from "@swc/helpers/src/_async_generator_delegate.mjs";
import _async_iterator from "@swc/helpers/src/_async_iterator.mjs";
import _await_async_generator from "@swc/helpers/src/_await_async_generator.mjs";
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
const f4 = function() {
    var _ref = _wrap_async_generator(function*() {
        const x = yield* _async_generator_delegate(_async_iterator([
            1
        ]), _await_async_generator);
    });
    return function f4() {
        return _ref.apply(this, arguments);
    };
}();
//// [F5.ts]
import _async_generator_delegate from "@swc/helpers/src/_async_generator_delegate.mjs";
import _async_iterator from "@swc/helpers/src/_async_iterator.mjs";
import _await_async_generator from "@swc/helpers/src/_await_async_generator.mjs";
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
const f5 = function() {
    var _ref = _wrap_async_generator(function*() {
        const x = yield* _async_generator_delegate(_async_iterator(_wrap_async_generator(function*() {
            yield 1;
        })()), _await_async_generator);
    });
    return function f5() {
        return _ref.apply(this, arguments);
    };
}();
//// [F6.ts]
import _await_async_generator from "@swc/helpers/src/_await_async_generator.mjs";
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
const f6 = function() {
    var _ref = _wrap_async_generator(function*() {
        const x = yield _await_async_generator(1);
    });
    return function f6() {
        return _ref.apply(this, arguments);
    };
}();
//// [F7.ts]
import _wrap_async_generator from "@swc/helpers/src/_wrap_async_generator.mjs";
const f7 = function() {
    var _ref = _wrap_async_generator(function*() {
        return 1;
    });
    return function f7() {
        return _ref.apply(this, arguments);
    };
}();
