import { ErrorExtendedHandler } from "./error.js";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization:
    "Bearer 5f48c1e51740d4a8285cb1fb100368c12d9d405de6e5957c5d7633d32c637b4b",
};

export class Api {
  static async getAll() {
    try {
      const res = await fetch("https://gorest.co.in/public/v2/users", {
        headers,
      });

      return res.json();
    } catch (err) {
      ErrorExtendedHandler.errorHandling();
      ErrorExtendedHandler.alertError();
    }
  }

  static async getOne(id) {
    try {
      const res = await fetch(`https://gorest.co.in/public/v2/users/${id}/`, {
        headers,
      });

      return res.json();
    } catch (err) {
      ErrorHandler.errorHandling();
    }
  }

  static async updateOne(data) {
    try {
      const res = await fetch(
        `https://gorest.co.in/public/v2/users/${data.id}`,
        {
          method: "PATCH",
          headers,
          body: JSON.stringify(data),
        }
      );
      return res.json();
    } catch (err) {
      ErrorHandler.errorHandling();
    }
  }
}

// function test() {
//   return fetch("https://gorest.co.in/public/v2/users", {
//     headers,
//   }).then((response) => response.json());
// }

// test().then((data) => console.log("asdasdads", data));
