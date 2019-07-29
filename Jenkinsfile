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
 stage('Deploy on K8s'){
sh "docker run -i --rm --name tpm-ansible-helm -v /var/lib/jenkins/ansible:/ansible/playbooks pocteo/ansible-helm playbook.yml  --user=jenkins --extra-vars ImageName=${ImageName} --extra-vars imageTag=${imageTag} --extra-vars Namespace=${Namespace}"  
 }  
 stage('Get K8S information') {
  sh "kubectl get svc -n ${Namespace} -o wide"
 }
} catch (err) {
    currentBuild.result = 'FAILURE'
}
}
