node{
def Namespace = "default"
def ImageName = "majdmn/node-back"
def Creds = "docker-hub"
try{
stage('Checkout'){
    git 'https://github.com/majdas007/app-backend'
    sh "git rev-parse --short HEAD > .git/commit-id"
    imageTag= readFile('.git/commit-id').trim()
}

stage('RUN Unit Tests'){
    sh "npm install"
    sh "npm test"
}

stage('Docker Build, Push'){
  withDockerRegistry([credentialsId: "${Creds}", url: 'https://index.docker.io/v1/']) {
    sh "docker build -t ${ImageName}:${imageTag} ."
    sh "docker push ${ImageName}"
   }
}
  
} catch (err) {
    currentBuild.result = 'FAILURE'
}
}
