# Angelin's Random password Generator

## Website Overview
    The web application named Password Generator is an application that is used to generate random passwords. 
    As an employee with access to sensitive data, the provided starter code was fixed so that the application 
    creates strong passwords that provides greater security. 


## Website's Live URL - https://angelinrajan.github.io/Angelin_randomPasswordGenerator/

## Functionality added to the starter code-
1. When the Red generate button is clicked, user is presented with a prompt to enter a password length
2. A validation is present within the code to ensure a password length is entered and is between 8 and 128
3. If user enters a number lower than 8 or above 128, an alert message is displayed for the user
4. If user does not enter a password length, an alert is displayed for the user
5. If a password length is between 8 and 128, 4 options for password criteria is presented to the user- Include uppercase, lowercase, nnumber, and/or symbol.
6. user has the option to select 'ok' or 'cancel' for each of the criteria options presented
7. A validation is present to ensure that atleast 1 criteria is selected by the user
8. If none of the criterias are selected by the user, an alert is displayed for the user
9. Finally, a random password will be generated based on the user's selection of the criterias and displayed within the passwordText box in the screen


## Deployment steps-
1. Created a new repository within Github (included README file)
2. Copied the ssh url for cloning
3. Performed a git clone command followed by the copied ssh url in my local (VS code)
4. Pre-existing develop folder, script.js, style.css, and index.html files were copied into this repository
5. The index.html file was moved outside of the develop folder
6. A new folder named Assets was created to store the live website's screenshot
7. Multiple commits and git push was done to keep repository up to date
8. Finally, deployment happened from Github by nativating to the repository/settings/pages and selecting main branch to deploy
9. The progress and the live website's url is displayed within the Actions tab
10. Clicking on the live website's link navigates user to the live website which is deployed without errors (See screenshot below)

   ![Live Website's Screenshot](Assets/Live%20Website's%20Screenshot.png)



## Outside source reference-

    1. To learn about prompts: https://www.w3schools.com/jsref/met_win_prompt.asp
    2. To learn about confirm: https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
    3. To learn about alert: https://www.w3schools.com/jsref/met_win_alert.asp
    4. Sample password generator examples: https://www.tutorialstonight.com/password-generator-in-javascript
    5. To learn about return to interrupt a function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
    6. Study session with Jacob, Lucas, and Edward
    7. Tutoring session to bypass the undefined error and link between the generate function and passwordFunction. 
    Tutor name- Sangeetha.
