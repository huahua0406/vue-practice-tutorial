const imgPreloader = url => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.src = url
    image.onload = () => {
      resolve()
    }
    image.onerror = (err) => {
      reject(err)
    }
  })
}

export const imgsPreloader = imgs => {
  const promiseArr = []
  imgs.forEach(element => {
    promiseArr.push(imgPreloader(element))
  })
  return Promise.all(promiseArr)
}

// https://www.cnblogs.com/nangxi/archive/2019/09/18/11545593.html
// https://www.jianshu.com/p/1618cb183d28
