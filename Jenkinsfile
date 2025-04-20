pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh '''
                    npm install -g allure-commandline
                    export JAVA_HOME="/opt/homebrew/opt/openjdk@11"
                    export PATH="$JAVA_HOME/bin:$PATH"
                    allure generate allure-results --clean -o allure-report
                '''
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [path: 'allure-results']  // Ensure this path matches your actual results folder
                ])
            }
        }
    }

    post {
        always {
            // Clean up or other post-build actions if needed
        }
    }
}
