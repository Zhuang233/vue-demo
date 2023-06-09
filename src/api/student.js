import request from '@/utils/request'

export function getAllStudents(params) {
  return request({
    url: '/getAllStudents',
    method: 'get',
    params
  })
}

export function deleteStudents(params) {
  return request({
    url: '/deleteStudent',
    method: 'get',
    params
  })
}