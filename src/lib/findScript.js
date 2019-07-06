function findScript(predicate) {
  // src包含
  if (typeof predicate === 'string') {
    let name = predicate;
    predicate = script => script.src && script.src.includes(name);
  }

  let scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    if (predicate(script)) {
      return script;
    }
  }
  return null;
}

export default findScript;
