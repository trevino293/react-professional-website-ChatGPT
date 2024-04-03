# react-professional-website-ChatGPT
A simple react website to display skills and accomplishments and some more detail than traditional resume built by ChatGPT

# Creating a Professional Website with a Large Language Model
### Author: Anthony Trevino
### Date: 04/02/2024
### v1.0

### Front-End: React

### Back-End: Google Cloud App Engine

### Chat GPT Transcript 

Conversation with Chat GPT: [(GPT 3.5 Chat)](https://chat.openai.com/share/fe45e38d-fb69-48f2-81b9-faf032eeacdb)

# Overview

This document describes the high-level steps and process to create a professional website from "scratch". 
I have limited development experience in general, even more so in front-end but with the accuracy and creativity of chat GPT I was able to develop my website in less than 20 hours. 

[Anthony Trevino Professional Website](https://atrevino.net)

>[!NOTE]
> I'm an active computer science graduate student and information technology professional, I understand the technology is overwhelming. 
> I feel if you can lean into the LLM's power, the process may be easier for many people. 


# 1. Front End Tool Install
<details>
	<summary>Step 1</Summary>

**Tool:** React

**Reasoning:** For this project I selected to use React as it is widely used across the technology ecosystem today for front end applications. 
Additionally I wanted to learn a skill that could be applicable to my professional work and I had never taken the time to deep dive into understanding front development language and structure. 
Although this may be overkill for creating a professional website it was very fun to explore functionality with Chat GPT.

### 1.1
**Download Node: [Node.js](https://nodejs.org/en)**

</details>

# 2. Create App on Local Machine
<details>
	<summary>Step 2</Summary>

### 2.1
**Open command line interface to desired application file storage location**

### 2.2
Enter command to create the react app

```
npx create-react-app my-app
```

### 2.3 
**Understand the React application or Website folder and file structure**

Open file explorer or use command:

``` 
cd my-app
```

Website Folder (my-app/): 
- node_modules/: Contains all the project's npm dependencies.
- public/: Holds static files like the HTML file, images, and icons.
- src/: Contains your React component files, CSS, and JavaScript.
- package.json: A manifest file for managing project metadata and dependencies.
- README.md: A markdown file containing information about the project.

Website Driver Folder Files (src/):
- App.js: This is where you define your main App component. It's the heart of your React application.
- index.js: It's the JavaScript entry point. It renders your App component to the DOM.
- App.css: This file contains styles for your App component.
- index.css: Global styles for your application are defined here.


</details>

# 3. Test the Website
<details>
	<summary>Step 3</Summary>

### 3.1
Navigate using the command line to the website folder (my-app/)

### 3.2
Deploy the website locally with the command:
``` 
npm start
```

### 3.3
View Local Deployment

Navigate to [localHost](http://localhost:3000/)

### 3.4 
Stop the Website: Use ctrl+C to stop the program from running locally

>[!NOTE]
> If you close the command line instance without ending the program, the website is being hosted on your local machine until you shutdown the computer or end the process. You can navigate to the task manager and end the Node.js process to stop the program. 

</details>

# 4. Envision Website Design and Prompt Chat GPT to Create

<details>
	<summary>Step 4</Summary>

### 4.1
Define the structure and components of the website at a high level that you desire

### 4.2
Prompt Chat GPT (My Conversation):

```
Can you create a basic react app for a professional profile as simple as possible.

How would I format to have a picture in the top left name as title in the top center and skills on the right?
```

</details>

# 5. Create and Copy Chat GPT Files and Code
<details>
	<summary>Step 5</Summary>

Edit (my-app/) files (App.js) to recommended code from chat GPT

Re-deploy app and observe changes

</details>

# 6. Rinse and Repeat
<details>
	<summary>Step 6</Summary>

- Envision more features or functionality changes to the website and prompt Chat GPT for help to code
- Make changes to the local files and re-deploy the local website and view the changes 
- Once satisfied with the local deployment proceed to step 7 for internet setup

</details>

# 7. Get Domain Name

<details>
	<summary>Step 7</Summary>

Use domain provider to reserve or purchase desired domain name.

</details>

# 8. Setup Google SDK

<details>
	<summary>Step 8</Summary>

**Tool:** App Engine

**Reasoning:** For this project I selected to use AppEngine for deployment to minimize infrastructure setup complexity. 

### 8.1
Install google SDK within the (my-app/) folder

Download: [Install Google SDK Docs](https://cloud.google.com/sdk/docs/install-sdk)

### 8.2
Login to Google Cloud account with your credentials using the command:

```
gcloud auth login
```

### 8.3
Initialize the project using the command:

```
gcloud init
```

>[!NOTE}
> This is the Google Cloud SDK Terminal. When you installed the Google SDK a specific terminal client was installed. This specific client and Terminal must be used for gcloud commands.

</details>

# 9. Create app.yaml and Dockerfile
<details>
	<summary>Step 9</Summary>

### 9.1


- This file will tell Google cloud how to setup your website infrastructure
- Suggestion: Prompt chat GPT to help create one

Example: app.yaml

```
runtime: nodejs

env: flex

handlers:
  - url: /static
    static_dir: static
    http_headers:
      Cache-Control: public, max-age=604800
```

### 9.2

Example: Dockerfile
- This file will tell Google cloud how to setup your website infrastructure
- Suggestion: Prompt chat GPT to help create one

```
# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD [ "npm", "start" ]
```

</details>

# 10. Build and Deploy

<details>
	<summary>Step 10</Summary>



### 10.1 

Package your application for deployment with the command line at (my-app/) using the command:

```
npm run build
```

### 10.2

Open the Google SDK Terminal and deploy your application to Google App Engine using the command:

```
gcloud app deploy
```

### 10.3

Navigate to Google Console and view deployment and costs.

[Google App Engine](https://console.cloud.google.com/appengine/)

>[!Note]
> Navigate to Settings and Disable Application 
> - Pause all Cost and Compute 


### 10.4
Make changes to DNS settings for custom addresses.
- Google App engine > Settings >  Custom Domains > Add Custom Domain
- Domain Provider > Add in CNAM and A, AAAA Data

</details>


# Conclusion

Chat GPT is a powerful accelerator to code generation and basic understanding. 
It will take some manual troubleshooting by either re-querying chat GPT mentioning a visible error or using a traditional google search of the error to fix.
Additionally although Chat GPT generated the code, it takes some time to understand the language and interactions between folders, files and functions. 
I feel with the support of large language models many more people will be able to access complex technology. 
It will be important to highlight the risks of potential local vulnerability creation from hallucinations or misleading design by large language model. 
