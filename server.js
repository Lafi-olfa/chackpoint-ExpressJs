const express = require("express");
const app = express();
PORT = process.env.PORT || 5000;

//for css
//
app.use((req, res, next) => {
  const time = new Date();
  const hour = time.getHours();
  const day = time.getDay();
  if (hour > 9 && hour < 17 && day > 0 && day < 6) {
    next();
  } else {
    res.send(
      "<h1> Sorry customer we are not working today you can check our scedule to see our opening times</h1>"
    );
  }
});
app.use(express.static("pages"));
app.use(express.static("assets"));

app.listen(PORT, (error) =>
  error ? console.log(error) : console.log(`server is running on port${PORT} `)
);
