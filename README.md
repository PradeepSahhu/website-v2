# Experiment 1.0

## EJS
- Using EJS to make a multifunctioning Backend server.

### Code
```
const ejs = require("ejs");
app.set("view engine", "ejs");

app.get("/Education", function(req,res){
  res.render("Education",{
    pageTitle: 'Education'
  });
console.log("Successfully connected to the Education route");
});

```

## Mongoose
- Mongoose as a DB for storing Project files.



