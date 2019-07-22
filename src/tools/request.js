import axios from 'axios';
import { Toast } from 'vant';

function onGlobalError(error) {
  // 处理全局异常的捕获
  if (error && error.message) {
    Toast.fail(error.message);
  }
}

const instance = axios.create();

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 自定义的请求头
  config = {
    ...config,
    // 'Customer-Header': 'test',
  };

  Toast.loading();

  return config;
}, error => {
  Toast.clear();

  onGlobalError(error);

  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(response => {
  Toast.clear();

  // const { config, data, headers, request, status } = response;
  const { data, status } = response;

  // 对状态码做处理，请根据实际情况来
  if (status >= 200 && status < 300) {
    // 也许后端响应状态码一直是200，此时就应该根据响应数据的特定字段来处理
    if (data.status !== 'success') {
      const error = new Error(data.message);

      error.response = response;

      onGlobalError(error);

      throw error;
    } else {
      return data;
    }
  } else {
    const error = new Error(data.message);

    error.response = response;

    onGlobalError(error);

    throw error;
  }
}, error => {
  // 对错误做处理
  Toast.clear();

  onGlobalError(error);

  return Promise.reject(error);
});

async function GET(url, params = {}) {
  return await instance.get(url, {
    params,
  });
}

async function DELETE(url, data = {}) {
  return await instance.delete(url, data);
}

async function PUT(url, data = {}) {
  return await instance.put(url, data);
}

async function POST(url, data = {}) {
  return await instance.post(url, data);
}

async function PATCH(url, data = {}) {
  return await instance.patch(url, data);
}

async function ALL(fetchFunc = []) {
  return await instance.all(fetchFunc);
}

export {
  GET,
  PUT,
  POST,
  DELETE,
  PATCH,
  ALL,
};
