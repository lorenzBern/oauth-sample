var proxyConfig = [
  {
    context: ["/user"],
    target: "http://localhost:8080",
    secure: false
  },
  {
    context: ["/oauth2"],
    target: "http://localhost:9000",
    secure: false,
    changeOrigin: true,
  },
  {
    context: ["/login"],
    target: "http://localhost:9000",
    secure: false
  }
];

function setupForCorporateProxy(proxyConfig) {
    var nodename = process.env.NODENAME;
    if (nodename) {
        console.log('Using NODENAME: ' + nodename);
        proxyConfig.forEach(function (entry) {
            entry.target = entry.target.replace("${NODENAME}", nodename);
        });
    }
    return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);
