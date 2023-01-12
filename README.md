# booking-build

this is a website build where you request, rent or book for hotels, cars, flight, appartment, etc...

How to contribute to this build. you can go through this ReadMe if you don’t have much knowledge using Git and GitHub.
 
Let's get started. firstly
1. Install git

Git is a version control system that is used for tracking changes in a file. Git is an imporant tool we'll be using to work on our github projects.  after installing it and move on to the next step.


2. Fork this repository.


Fork this repository using the fork button on the top right of this page, or the drop down arrow icon on the right. This will create a copy of the project with your name.
3. Clone your fork.

To clone this project, click the button on green that says code and on the drop down box, copy the URL of the project in the box and open up your git your terminal and type in the following command `git clone "URL you copied`
It should look like this:

``git clone https://github.com/your_name/booking-build.git``

Where "your_name" will be your username on GitHub. Running this command will clone the project in your local machine.


4. Switch directory
Next switch into the folder of the repo we just cloned by typing this command in your terminal:

cd <repository name>
use this command cd booking-web


5. Point origin branch to upstream
We need to point our forked repo(origin) to the upstream(source) repo: To do that, type the command

git remote add upstream <URL of source repo>

``git remote add upstream https://github.com/your-name/booking-build.git``


6. Create branch
Now we have successfully pointed our origin repo to upstream, we can now create a new branch which we'll be making our changes from. To create a branch, type the command:

git checkout -b <branch name>
You can name the branch anything you want. E.g ``git checkout -b john-branch``


7. Make your changes.


8. Make a commit by typing the following command

git status
This will show us a list of all the changes you make.

Next add it with this command
git add .
  
write a commit to explain the changes you make on this project with the following command
 ``git commit -m 'what your commit is all about'``

9. Push changes to GitHub with following command

git push origin <branch name>
Replace the <branch name> with the name of the branch you created earlier. E.g ``git push origin john-branch``

your changes should get pushed to the main repository and we can now do a pull request.


10. Make a pull request(PR)
Now when you check the repo you forked, you should see all the changes you just pushed to GitHub
