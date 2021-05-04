<<<<<<< HEAD
const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [
      tailwindcss("./tailwind.config.js"),
      require("autoprefixer")
  ]
};
=======
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
>>>>>>> 80f01cf4c9f2fb116cc0f1030c95321d4236be1b
