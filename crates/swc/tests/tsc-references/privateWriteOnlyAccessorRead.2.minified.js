//// [privateWriteOnlyAccessorRead.ts]
import _class_private_field_get from "@swc/helpers/src/_class_private_field_get.mjs";
import _class_private_field_init from "@swc/helpers/src/_class_private_field_init.mjs";
import _class_private_field_set from "@swc/helpers/src/_class_private_field_set.mjs";
import _extends from "@swc/helpers/src/_extends.mjs";
import _class_private_field_destructure from "@swc/helpers/src/_class_private_field_destructure.mjs";
var _value = new WeakMap(), _valueRest = new WeakMap(), _valueOne = new WeakMap(), _valueCompound = new WeakMap();
function set_value(v) {}
function set_valueRest(v) {}
function set_valueOne(v) {}
function set_valueCompound(v) {}
new class {
    m() {
        var _tmp;
        let foo = {
            bar: 1
        };
        console.log(_class_private_field_get(this, _value)), _class_private_field_set(this, _value, {
            foo
        }), _class_private_field_set(this, _value, {
            foo
        }), _class_private_field_get(this, _value).foo = foo, ({ o: _class_private_field_destructure(this, _value).value  } = {
            o: {
                foo
            }
        }), _class_private_field_destructure(this, _value).value = _extends({}, {
            foo
        }), ({ foo: _class_private_field_get(this, _value).foo  } = {
            foo
        }), _tmp = {
            foo
        }, _class_private_field_get(this, _value).foo = _extends({}, _tmp.foo), _class_private_field_get(this, _value), [_class_private_field_destructure(this, _valueOne).value, ..._class_private_field_destructure(this, _valueRest).value] = [
            1,
            2,
            3
        ], _class_private_field_get(this, _valueOne), _class_private_field_get(this, _valueRest), _class_private_field_set(this, _valueCompound, _class_private_field_get(this, _valueCompound) + 3);
    }
    constructor(){
        _class_private_field_init(this, _value, {
            get: void 0,
            set: set_value
        }), _class_private_field_init(this, _valueRest, {
            get: void 0,
            set: set_valueRest
        }), _class_private_field_init(this, _valueOne, {
            get: void 0,
            set: set_valueOne
        }), _class_private_field_init(this, _valueCompound, {
            get: void 0,
            set: set_valueCompound
        });
    }
}().m();
