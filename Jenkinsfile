pipeline {
    agent any

    stages {
        stage('Cloner le projet') {
            steps {
                git 'https://github.com/Sylvano96/MonPortfolio.git'
            }
        }

        stage('Installer les dépendances') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker image') {
            steps {
                sh 'docker build -t portfolio-react .'
            }
        }

        stage('Déployer') {
            steps {
                sh '''
                    docker stop portfolio || true
                    docker rm portfolio || true
                    docker run -d --name portfolio -p 80:80 portfolio-react
                '''
            }
        }
    }
}
