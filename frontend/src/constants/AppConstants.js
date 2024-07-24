
Object.defineProperty(exports, "__esModule", {
    value: true,
  });
  if (process.env.NODE_ENV == "development") {
    exports.default = {
      baseURL: "http://localhost:3000/api",
    };
  }  else {
    exports.default = {
      websiteURL: "https://www.punogames.com/",
      baseURL: "https://www.punogames.com/api",
    };
  }
  