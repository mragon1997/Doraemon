import { get, post, put, del } from '../util/request.js'

// 获取todo列表
async function getTodo() {
  return await get('/api/todo')
}

export { getTodo }
