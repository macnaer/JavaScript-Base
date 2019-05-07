"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person =
  /*#__PURE__*/
  function () {
    function Person(name, surname, age) {
      _classCallCheck(this, Person);

      this.name = name;
      this.surname = surname;
      this.age = age;
    }

    _createClass(Person, [{
      key: "ShowPerson",
      value: function ShowPerson() {
        console.log("Name:", this.name, " Surname: ", this.surname, " Age: ", this.age);
      }
    }]);

    return Person;
  }();

let name  = "Billl";

var Bill = new Person(`${name}`, 'Gates', 55);
Bill.ShowPerson();
