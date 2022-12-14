import { React, useState, useEffect } from "react";
import Axios from "axios";

function CreateUserForm() {
  const [success, setSucess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSucess(false)
    }, 2000);
    return () => clearTimeout(timer);
  },[success]);

  const token = localStorage.getItem("token");
  console.log("token-createuser", token);
  const submitHandler = (event) => {
    event.preventDefault();
    let firstname = event.target.fname.value;
    let lastname = event.target.lname.value;
    let password = event.target.password.value;
    let email = event.target.email.value;
    let number = event.target.phnumber.value;
    let gender = event.target.gender.value;

    Axios.post(
      "https://nodejs-mysql-rest-api.vercel.app/api/users",
      {
        firstname,
        lastname,
        gender,
        email,
        password,
        number,
      },
      { headers: { Authorization: `bearer ${token}` } }
    )
      .then((res) => {
        console.log(res.data);
        if (res.data.sucess === 1) {
          setSucess(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {success && (
        <div
          className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3"
          role="alert"
        >
          User added successfully!
        </div>
      )}
      <section className="">
        <div className=" items-center px-5 py-12 lg:px-20">
          <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div className="mt-8">
              <div className="mt-6">
                <form
                  action="#"
                  method="POST"
                  className="space-y-6"
                  onSubmit={submitHandler}
                >
                  <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required=""
                          placeholder="Your Email"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Password{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required=""
                          placeholder="Your Password"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="fname"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        First Name{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="fname"
                          name="fname"
                          type="text"
                          required=""
                          placeholder="First Name"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="lname"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Last Name{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="lname"
                          name="lname"
                          type="text"
                          required=""
                          placeholder="Last Name"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Gender{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="gender"
                          name="gender"
                          type="text"
                          required=""
                          placeholder="Gender"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="phnumber"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Phone Number{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="phnumber"
                          name="phnumber"
                          type="text"
                          required=""
                          placeholder="Phone Number"
                          className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Create user
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateUserForm;
