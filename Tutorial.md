# Creating a Professional Website with a Large Language Model
### Author: Anthony Trevino
### Date: 04/02/2024

### Chat GPT Transcript 

Conversation with Chat GPT: [(GPT 3.5 Chat)](https://chat.openai.com/share/fe45e38d-fb69-48f2-81b9-faf032eeacdb)

# Overview

This document describes the high-level steps and process to create a professional website from "scratch". 
I have limited development experience in general, even more so in front-end but with the accuracy and creativity of chat GPT I was able to develop my website in less than 20 hours. 

[Anthony Trevino Professional Website](https://atrevino.net)

[!NOTE]
> I'm an active computer science graduate student and information technology professional, I understand the technology is overwhelming. I feel if you can lean into the LLM's power the process will be easier for anyone! 


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

[!NOTE]
> If you close the command line instance without ending the program, the website is being hosted on your local machine until you shutdown the computer or end the process. You can navigate to the task manager and end the Node.js process to stop the program. 

</details>

# 4. Envision Website Design and Prompt Chat GPT to Create

<details>
	<summary>Step 4</Summary>


Define the structure and components of the website at a high level that you desire


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

Use domain provider to reserve desired domain name.

