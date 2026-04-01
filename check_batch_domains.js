void (async () => {
  const dns = await import('node:dns');

  const names = [
    'alesvia',
    'selavika',
    'alenvia',
    'avenika',
    'lusevia',
    'consikia',
  ];

  for (const name of names) {
    for (const tld of ['.org', '.cz']) {
      const domain = `${name}${tld}`;
      await new Promise((resolve) => {
        dns.resolve4(domain, (err, addresses) => {
          if (err) {
            console.log(`[AVAILABLE] ${domain}`);
          } else {
            console.log(`[TAKEN] ${domain} -> ${addresses.join(', ')}`);
          }
          resolve();
        });
      });
    }
  }
})();
