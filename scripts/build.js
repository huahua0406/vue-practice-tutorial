const shell = require('shelljs')
const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')

const writeFile = (path, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, 'utf8', function (err) {
        if (err) {
            reject(err)
        }
        resolve(content)
    })
  })
}
const release = new Map([
  ['customizeA定制版', "export * from './customizeA';"],
  ['customizeB定制版', "export * from './customizeB';"],
  ['customizeC定制版', "export * from './customizeC';"],
  ['customizeD定制版', "export * from './customizeD';"],
  ['customizeE定制版', "export * from './customizeE';"]
])
const env = new Map([
  ['生产环境', 'NODE_ENV = production'],
  ['预发布环境', 'NODE_ENV = pre-release'],
  ['测试环境', 'NODE_ENV = test']
])

const build = async () => {
  const res = await inquirer.prompt([
    {
      type: 'list',
      name: 'release',
      message: '请选择你要部署的版本？',
      choices: ['customizeA定制版', 'customizeB定制版', 'customizeC定制版', 'customizeD定制版', 'customizeE定制版']
    },
    {
      type: 'list',
      name: 'env',
      message: '请选择你要部署的环境？',
      choices: ['生产环境', '预发布环境', '测试环境']
    }
  ])
  await Promise.all([writeFile(`${process.cwd()}/src/config/index.js`, release.get(res.release)), writeFile(`${process.cwd()}/.env`, env.get(res.env))])
  console.log(chalk.green(`您要打包的是${res.env}---${res.release},正在为您打包......`))
  shell.exec('vue-cli-service build')
}
build()
// https://juejin.im/post/5d40440351882507d52b187f#heading-2
