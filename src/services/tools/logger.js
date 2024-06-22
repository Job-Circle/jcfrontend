export function getStackCaller() {
  // Get the stack trace
  const stackTrace = new Error().stack.split('\n');

  // Get the file name and line number of the caller
  const callerLine = stackTrace[3].trim();
  return callerLine.split(' ')[1].split('/').pop();
}

export function getStackCallerLine(line) {
  // Get the stack trace
  const stackTrace = new Error().stack.split('\n');

  // Get the file name and line number of the caller
  if (line && line.split(' '))
    return line.split(' ')[1].split('/').pop();
}

export function jcLog(message, obj) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`SM: ${message}\n${getStackCaller()}`, obj);
  }
}

export function jcInfo(message, obj) {
  console.info(`SM: ${message}\n${getStackCaller()}`, obj);
}

export function jcWarn(message, obj) {
  console.warn(`SM: ${message}\n${getStackCaller()}`, obj);
}

export function jcError(message, obj) {
  console.error(`SM: ${message}\n${getStackCaller()}`, obj);
}

export function jcErrorDB(err) {
  console.error(`SM: DB Error ${err}`);
  console.error(err);
  console.info(getStackCaller());
  return err;
}

export function jcDebug(message, obj) {
  if (process.env.NODE_ENV === 'development') {
    console.info(`SM: ${message}\n${getStackCaller()}`, obj);
  }
}

export function smLogObj(obj) {
  console.info(`SM: Object\n${getStackCallerLine(4)}`, obj);
}

export function smDisplayStack() {
  console.info(`SM: Stack`);
  console.info(Error().stack);
}