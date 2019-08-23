import React from 'react';

export const About = () => {
    return (
        <main>
            <h1>About Us</h1>

            <h3>Capstone Project</h3>
            <p>{`For the past two semesters the Developer Enablement team has sponsored a senior "capstone" project for students at the University of Wisconsin-Milwaukee where students are provided a variety of technologies that they were not necessarily exposed to or learned within their collegiate coursework.`}</p>
            <p>The students are provided with two starter projects - one a Java-based RESTful web service and the second a React.js-based web application - to enable them to produce their capstone project using a modern Microservices approach to software engineering.</p>
            <p>The concept behind the technologies, starter projects and mentorship that is provided to the students is that young engineers benefit from practicing their craft with the support of senior engineers from which they can learn.</p>

            <h3>Technologies</h3>
            <p>{`All of the open source based, completely non-proprietary projects for the students are hosted on an AWS instance that is completely outside and disconnected from Northwestern Mutual systems and infrastructure. The students are provided with the primary technologies that support the Developer Enablement group's White Box Testing disciplines.`}</p>
            <h3>Source Code Control</h3>
            <p>The students take the GitLab instance and the backend and frontend starter projects that we provide to them and create their own repositories to manage their codebases.</p>
            <h3>Collaboration</h3>
            <p>The students use branching strategies, peer reviewed merge requests and merging completed code that has passed their unit tests to their master branches.</p>
            <h3>Project Management</h3>
            <p>The students are organizating and managing their work tasks using a feature in GitLab known as Issues which is very similar to JIRA or AgileCraft boards.</p>
            <h3>Backend RESTful Web Service</h3>
            <p>{`The Java based RESTful web service project in GitLab contains a robust pipeline that executes the project's unit and component tests. Once those white box tests have successfully completed, the code quality is analyzed and visuualized using sonarqube.`}</p>
            <h3>Frontend Web Application</h3>
            <p>{`The Javascript based web application project in GitLab contains a robust pipeline that executes the project's unit and component tests. Once those white box tests have successfully completed, the code quality is analyzed and visualized using sonarqube.`}</p>
            <h3>Deployment</h3>
            <p>{`Upon successful completion of the prior tasks within the pipeline, the project is built using docker and installed on the team's AWS instance. Once successfully deployed the web application is available and is fully integrated with the backend web service.`}</p>
        </main>
    );
};

export default About;
