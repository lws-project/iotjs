/* Copyright 2017-present Samsung Electronics Co., Ltd. and other contributors
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

#ifndef TIZENRT_IOTJS_SYSTEMIO_H
#define TIZENRT_IOTJS_SYSTEMIO_H

#if ENABLE_MODULE_I2C

// Incomplete type to be provided by the impl.
struct i2c_dev_s;

struct i2c_dev_s* iotjs_i2c_platform_config(int port);
int iotjs_i2c_platform_unconfig(struct i2c_dev_s* i2c);

#endif /* ENABLE_MODULE_I2C */

#endif /* TIZENRT_IOTJS_SYSTEMIO_H */
