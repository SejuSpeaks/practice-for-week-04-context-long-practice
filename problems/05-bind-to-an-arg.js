function bindToAnArg(func, arg) {
  // const bindToFunc = func.bind(arg)
  // return bindToFunc;
  return func.bind(null, arg)
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
