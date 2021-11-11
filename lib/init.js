/*
 * @Author: wangkun
 * @Date: 2021-11-11 16:27:30
 * @LastEditTime: 2021-11-11 17:35:58
 * @LastEditors: wangkun
 * @Description: 
 */
const { promisify } = require('util')
const figlet =promisify(require('figlet'))
const chalk = require('chalk')
const clear = require('clear')
const clone = require('./clone')
const log = (content) => console.log(chalk.blue(content))

async function init () {
    clear()
    const text = await figlet('FAELSSIM')
    log(text)
    clone('git@github.com:faelssim/h5-mobile.git')
}
module.exports = init