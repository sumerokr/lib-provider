const execa = require("execa");
const fs = require("fs");

const components = {
  K24Button: "src/components/K24Button/K24Button.vue",
  K24Button2: "src/components/K24Button2/K24Button2.vue",
};

const entries = Object.entries(components);

const fn = async () => {
  try {
    for (let [name, path] of entries) {
      const { stdout } = await execa("vue-cli-service", [
        "build",
        "--target",
        "lib",
        "--name",
        `${name}`,
        "--formats",
        "umd",
        "--dest",
        `dist/${name}`,
        path,
      ]);

      fs.rename(
        `dist/${name}/${name}.umd.js`,
        `dist/${name}/index.js`,
        function(err) {
          if (err) console.log(err);
          console.log(
            `dist/${name}/${name}.umd.js`,
            "renamed to",
            `dist/${name}/index.js`
          );
        }
      );

      console.log(stdout);
    }
  } catch (e) {
    console.log("ERRORA", e);
  }
};

fn();
