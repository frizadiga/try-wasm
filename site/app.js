const main = async () => {
  try {
    const js = await import('./node_modules/@frizadiga/try-wasm/try_wasm.js');
    js.greet('WASM'); 
  } catch (error) {
    console.error(error);
  }
};

main();
