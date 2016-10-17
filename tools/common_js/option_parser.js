/* Copyright 2016 Samsung Electronics Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function Option(arg, help) {
  this.arg = arg;
  this.help = help;

  return this;
}

function OptionParser() {
  this.options = [];
  return this;
}

OptionParser.prototype.addOption = function(arg, help) {
  var option  = new Option(arg, help);
  this.options.push(option);
}

OptionParser.prototype.parse = function() {
  var options = {};
  for (var aIdx = 2; aIdx < process.argv.length; aIdx++) {
    var option = process.argv[aIdx];
    var arg_val = option.split("=");

    if (arg_val.length != 2) {
      continue;
    }

    var arg = arg_val[0];
    var val = arg_val[1];

    for (var oIdx in this.options) {
      if (arg == this.options[oIdx].arg) {
        options[arg] = val;
        break;
      }
    }
  }

  return options;
}

OptionParser.prototype.printHelp = function() {
  console.log("****** How to use *****");
  for (var idx in this.options) {
    console.log(this.options[idx].arg + " : " + this.options[idx].help);
  }
  console.log("***********************");
}




 module.exports.OptionParser = OptionParser;
