node {
  stage("Checkout") {
    git(url: "https://github.com/majdas007/app-backend" ,branch: "master")
  }

  stage("Run unit tests") {
    sh "npm install"
    sh "npm test
  }
}
