// Exporting an object containing all of our models

module.exports = {
  Article: require("./Article"),
  Note: require("./Note")
};
/*

let user = process.env.DBUSER || 'myuser'
let word = 'mypass' || process.env.DBPASS (aasdasdas)
let user = process.env.DB || 'myuser'
let user = process.env.DBUSER || 'myuser'

else {
  .. db credentials
}
*/
