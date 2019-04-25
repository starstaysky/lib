var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.eat = function () {
        console.log(this.name);
    };
    return Person;
}());
var Women = /** @class */ (function (_super) {
    __extends(Women, _super);
    function Women(name, sex) {
        var _this = this;
        _this = _super.call(this, name) || this,
            _this.sex = sex;
        return _this;
    }
    Women.prototype.sayWomen = function () {
        _super.prototype.eat.call(this);
        console.log(this.sex);
    };
    return Women;
}(Person));
var females = [];
var p = new Person('xsj');
females[0] = new Women('fx', 'female');
p.eat();
females[0].sayWomen();
