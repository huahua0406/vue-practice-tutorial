import request from '@/utils/request'

export function loginByUserName (data) {
  return request({
    method: 'post',
    url: '/user/loginByJWT',
    data
  })
};
