const api_base = process.env.REACT_APP_URL_BASE;
const app_id = process.env.REACT_APP_ID;
const app_key = process.env.REACT_APP_KEY;

const api = {
  get: async (word) => {
    try {
      const res = await fetch(`${api_base}/${word}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'app_id': `${app_id}`,
          'app_key': `${app_key}`

        },
      });
      return res?.ok ? await res.json() : false;
    } catch (err) {
      console.log(err);
    }
  },
};

export default api;
