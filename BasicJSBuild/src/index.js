import _ from "lodash";
import str1 from "./str1";
import str2 from "./str2";

(function () {
  var element = document.createElement("div");
  element.innerHTML = _.join([str1(), str2()], "");
  document.body.append(element);
})();
