import axios from "axios";
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post("/api/signup", {
      username: username,
      email: email,
      password: password,
    });
  },
  sendImage: (url) => {
    return axios.put("/api/cloudinary", {
      url,
      token: localStorage.getItem("id_token"),
    });
  },
<<<<<<< HEAD
  // getImage: () => {
  //   return axios.post("/api/cloudinary", {
  //     token: localStorage.getItem("id_token"),
  //   });
  // },
=======
>>>>>>> c2097ddd42dd870b2de88e46468d0af43b70ed00
  submitDB: function (imageInfo) {
    console.log(imageInfo);
    return axios.post("/api/uploads", imageInfo);
  },
<<<<<<< HEAD
  getImage: function (){
    return axios.get("/api/images");
  }
};
=======
// Function that gets all of the images in our DB
  getImage: function(){
    return axios.get("/api/images");
  },
}
>>>>>>> c2097ddd42dd870b2de88e46468d0af43b70ed00
