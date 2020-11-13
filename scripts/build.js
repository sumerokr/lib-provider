const execa = require("execa");

const components = {
  K24Button: "src/components/K24Button/K24Button.vue",
  K24Button2: "src/components/K24Button2/K24Button2.vue",
};

const entries = Object.entries(components);

const fn = async () => {
  try {
    for (let [name, path] of entries) {
      console.log(name, path);
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
      console.log(stdout);
    }
  } catch (e) {
    console.log("ERRORA", e);
  }
};

fn();
