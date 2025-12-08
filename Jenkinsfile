pipeline {
    agent any

    environment {
        IMAGE_NAME = "portfolio-react"
        CONTAINER_NAME = "portfolio-container"
        DOCKERFILE_PATH = "./Dockerfile"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Sylvano96/MonPortfolio.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $IMAGE_NAME -f $DOCKERFILE_PATH ."
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Supprimer le container s'il existe déjà
                    sh "docker rm -f $CONTAINER_NAME || true"
                    // Lancer le container
                    sh "docker run -d --name $CONTAINER_NAME -p 80:80 $IMAGE_NAME"
                }
            }
        }
    }
}
