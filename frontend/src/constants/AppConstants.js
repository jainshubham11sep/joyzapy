
Object.defineProperty(exports, "__esModule", {
    value: true,
  });
  if (process.env.NODE_ENV == "development") {
    exports.default = {
      baseURL: "http://localhost:3000/api",
    };
  }  else {
    exports.default = {
      websiteURL: "https://www.joyzapy.com/",
      baseURL: "https://www.joyzapy.com/api",
    };
  }
  