/******************************************************************************
 * Copyright 2017 The JmcAuto Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *****************************************************************************/

#ifndef MODULES_DREAMVIEW_BACKEND_DREAMVIEW_H_
#define MODULES_DREAMVIEW_BACKEND_DREAMVIEW_H_

#include <memory>
#include <string>

#include "CivetServer.h"

#include "modules/common/jmc_auto_app.h"

#include "modules/dreamview/backend/handlers/image_handler.h"
#include "modules/dreamview/backend/handlers/websocket_handler.h"
#include "modules/dreamview/backend/hmi/hmi.h"
#include "modules/dreamview/backend/map/map_service.h"
#include "modules/dreamview/backend/point_cloud/point_cloud_updater.h"
#include "modules/dreamview/backend/sim_control/sim_control.h"
#include "modules/dreamview/backend/simulation_world/simulation_world_updater.h"

/**
 * @namespace jmc_auto::dreamview
 * @brief jmc_auto::dreamview
 */
namespace jmc_auto {
namespace dreamview {

class Dreamview : public jmc_auto::common::JmcAutoApp {
 public:
  std::string Name() const override;
  jmc_auto::common::Status Init() override;
  jmc_auto::common::Status Start() override;
  void Stop() override;
  virtual ~Dreamview() = default;

 private:
  void TerminateProfilingMode(const ros::TimerEvent& event);
  void CheckAdapters();

  ros::Timer exit_timer_;

  std::unique_ptr<SimulationWorldUpdater> sim_world_updater_;
  std::unique_ptr<PointCloudUpdater> point_cloud_updater_;
  std::unique_ptr<CivetServer> server_;
  std::unique_ptr<SimControl> sim_control_;
  std::unique_ptr<WebSocketHandler> websocket_;
  std::unique_ptr<WebSocketHandler> map_ws_;
  std::unique_ptr<WebSocketHandler> point_cloud_ws_;
  std::unique_ptr<ImageHandler> image_;
  std::unique_ptr<MapService> map_service_;
  std::unique_ptr<HMI> hmi_;
};

}  // namespace dreamview
}  // namespace jmc_auto

#endif  // MODULES_DREAMVIEW_BACKEND_DREAMVIEW_H_
