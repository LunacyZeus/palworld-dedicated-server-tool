import{au as e}from"./bd6eb560.js";function t(s){return e.request({url:"/BroadCast/send",method:"POST",params:s},{isTransformResponse:!1})}function n(){return e.request({url:"/Players/show",method:"GET"},{isTransformResponse:!1})}function a(s){return e.request({url:"/serverSetting/update",method:"POST",params:s},{isTransformResponse:!1})}function o(){return e.request({url:"/serverSetting/get",method:"GET"},{isTransformResponse:!1})}export{n as a,o as g,t as s,a as u};