"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataWrite = function () {
  function DataWrite(restURL) {
    _classCallCheck(this, DataWrite);

    this.restURL = restURL;
  }

  _createClass(DataWrite, [{
    key: "register",
    value: async function register(domain, address, email) {
      try {
        var response = await _axios2.default.post(this.restURL + "dataWrite/BCNS/register/" + domain + "/" + address + "/" + email);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  }, {
    key: "address",
    value: async function address(domain, _address, email) {
      try {
        var response = await _axios2.default.post(this.restURL + "dataWrite/BCNS/address/" + domain + "/" + _address + "/" + email);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  }, {
    key: "multihash",
    value: async function multihash(domain, _multihash, email) {
      try {
        var response = await _axios2.default.post(this.restURL + "dataWrite/BCNS/multihash/" + domain + "/" + _multihash + "/" + email);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  }]);

  return DataWrite;
}();

exports.default = DataWrite;