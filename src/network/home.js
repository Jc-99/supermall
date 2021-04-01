import {request} from "./request";

export function getFloordataMultidata() {
  return request({
    url: '/home/floordata'
  })
}

export function getCatitemsMultidata() {
  return request({
    url: '/home/catitems'
  })
}

export function swiperdata() {
  return request({
    url: '/home/swiperdata'
  })
}

export function getGoodsMultidata() {
  return request({
    url: '/categories'
  })
}


export function getsearch() {
  return request({
    url: '/goods/search'
  })
}

export function getdetail(goods_id) {
  return request({
    url: '/goods/detail',
    params: {
      goods_id
    }
  })
}



