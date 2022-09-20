/* A shebang. */
//#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/* Reading the directory of the kratos folder and returning the files in the folder. */
const CHOICES = fs.readdirSync(path.join(__dirname, "kratos"));
const MESSAGE = console.log(
  chalk
    .bgHex("#F0284A")
    .bold(`${chalk.red("What project template would you like to generate?")}`)
);
inquirer
  .prompt([
    {
      type: "list",
      name: "kratos",
      message: MESSAGE,
      choices: CHOICES,
    },
  ])
  .then(() => {
    console.log(chalk.blueBright("Happy hacking!"));
  });
