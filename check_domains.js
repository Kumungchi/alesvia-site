void (async () => {
  const dns = await import('node:dns');
  const domains = ['alesvia.eu', 'alesvia.org', 'alesvia.cz', 'selavika.eu', 'selavika.org', 'selavika.cz'];

  domains.forEach((domain) => {
    dns.resolve4(domain, (err, addresses) => {
      console.log(
        `${domain}: ${
          err ? `LIKELY AVAILABLE or NO DNS (Err: ${err.code})` : `TAKEN (IPs: ${addresses.join(', ')})`
        }`
      );
    });
  });
})();
