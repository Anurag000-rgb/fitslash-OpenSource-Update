node {

    def application = "gatsbyapp"
    def dockerhubaccount = "anurag2000"
    
    stage('Clone repository') {
		checkout scm
	}

    stage('Build image'){
        app = docker.build("${dockerhubaccount}/${application}:${BUILD_NUMBER}")
    }

    stage("Push Image"){
        withDockerRegistry([ credentialsId: "Dockerhub_Account", url: "" ]){
            app.push()
        }
    }

    stage('Deploy'){
        sh("docker run -d -P -v /var/log/:/var/log/ ${dockerhubaccount}/${application}:${BUILD_NUMBER}")
    }

    stage('Remove old images') {
		sh("docker rmi ${dockerhubaccount}/${application}:latest -f")
    }
}
