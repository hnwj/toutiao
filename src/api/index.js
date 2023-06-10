import request from '@/utils/request.js'
export const allChannelListAPI = () => {
  return request({
    url: '/v1_0/channels'
  })
}
