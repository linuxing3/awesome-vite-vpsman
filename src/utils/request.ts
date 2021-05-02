import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const service = axios.create({
  baseURL: 'http://pro.gce.xunqinji.xyz:8887'
})

// data传入必须是对象
export default function request(url: string, data: object, method = "GET") {
  let promise: Promise<any>;

  let headers: AxiosRequestConfig["headers"] = {} 
  let access_token = localStorage.getItem("access_token");

  if (access_token !== "") {
    headers = {
      Authorization: "bearer " + access_token
    }
  }

  if (method === "GET") {
    promise = service.get(url, { params: data, headers });
  } else {
    promise = service.post(url, data, { headers });
  }

  return promise
    .then((res: AxiosResponse) => {
      return res.data;
    })
    .catch((err) => {
      // 这里可以用Antd的message.error(提示下错误)
      console.log("请求失败了");
      console.error(err);
    });
}