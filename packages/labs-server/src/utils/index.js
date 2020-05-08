const subRouter = (subdomain, router) => {
  if (!subdomain || typeof subdomain !== 'string') {
    throw new Error(`Subdomain is not a string: ${subdomain}`);
  }
  if (!router || typeof router !== 'function' || router.length < 3) {
    throw new Error(`Got malformed router: ${router}, expected fn(req, res, next)`);
  }

  return (req, res, next) => {
    if (req.subdomains.includes(subdomain)) {
      router(req, res, next);
    } else {
      next();
    }
  };
};

module.exports = {
  subRouter
};
