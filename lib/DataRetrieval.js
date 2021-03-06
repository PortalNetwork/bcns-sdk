"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataRetrieval = function () {
  function DataRetrieval(restURL) {
    _classCallCheck(this, DataRetrieval);

    this.restURL = restURL;
  }

  _createClass(DataRetrieval, [{
    key: "info",
    value: async function info() {
      try {
        var response = await _axios2.default.get(this.restURL + "dataRetrieval/info");
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  }, {
    key: "resolutionAddress",
    value: async function resolutionAddress(domain) {
      var path = this.restURL + "dataRetrieval/BCNS/resolution/address";
      if (domain) {
        path = this.restURL + "dataRetrieval/BCNS/resolution/address?domain=" + domain;
      }
      try {
        var response = await _axios2.default.get(path);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  }, {
    key: "resolutionMultihash",
    value: async function resolutionMultihash(domain) {
      var path = this.restURL + "dataRetrieval/BCNS/resolution/multihash";
      if (domain) {
        path = this.restURL + "dataRetrieval/BCNS/resolution/multihash?domain=" + domain;
      }
      try {
        var response = await _axios2.default.get(path);
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    }
  }]);

  return DataRetrieval;
}();

exports.default = DataRetrieval;