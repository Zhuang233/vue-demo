import request from '@/utils/request'

export function getAllStudents() {
  return request({
    url: '/getAllStudents',
    method: 'get',
    params
  })
}