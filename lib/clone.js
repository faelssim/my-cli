/*
 * @Author: wangkun
 * @Date: 2021-11-11 16:33:26
 * @LastEditTime: 2021-11-11 17:03:36
 * @LastEditors: wangkun
 * @Description: 
 */
const { promisify } = require('util')
// import ora from 'ora'
async function clone(repo, desc) {
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const process = ora(`downloading ${repo}...`)
    process.start()
    await download(repo, desc)
    process.succeed()
}

module.exports = clone
