"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PayloadCreation = function () {
  function PayloadCreation(restURL) {
    _classCallCheck(this, PayloadCreation);

    this.restURL = restURL;
  }

  _createClass(PayloadCreation, [{
    key: "register",
    value: async function register(domain, address) {
      try {
        var response = await _axios2.default.post(this.restURL + "payloadCreation/BCNS/register/" + domain + "/" + address);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  }, {
    key: "owner",
    value: async function owner(domain, address) {
      try {
        var response = await _axios2.default.post(this.restURL + "payloadCreation/BCNS/owner/" + domain + "/" + address);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  }, {
    key: "ttl",
    value: async function ttl(domain, _ttl) {
      try {
        var response = await _axios2.default.post(this.restURL + "payloadCreation/BCNS/ttl/" + domain + "/" + _ttl);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  }, {
    key: "resolutionAddress",
    value: async function resolutionAddress(domain, address) {
      try {
        var response = await _axios2.default.post(this.restURL + "payloadCreation/BCNS/address/" + domain + "/" + address);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  }, {
    key: "resolutionMultihash",
    value: async function resolutionMultihash(domain, protocol, multihash) {
      try {
        var response = await _axios2.default.post(this.restURL + "payloadCreation/BCNS/multihash/" + domain + "/" + protocol + "/" + multihash);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  }]);

  return PayloadCreation;
}();

exports.default = PayloadCreation;