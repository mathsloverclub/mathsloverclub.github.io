# mathsloverclub.github.io

#how to check if git is installed on your laptop
start command prompt and type this command
git --version
if you get the message like (git version 2.27.0.windows.1), git has been installed on your computer.
Otherwise install it from https://git-scm.com/download/win.

#how to download project(for the first time)
open or create folder you want to put our website codes.NOte internet connection is required.
start command prompt and type this command
git clone #link(the link on github website, click on code)
Then you should see the file on GitHub website in your folder.

#add new file to git
start command prompt and type this command
git add fileName
For example, if you want to add hello.css, then use this command
git add hello.css

#save in git after writing code
After writing code, you have to save in git.
This process is called 'commit'.
start command prompt and type this command
git commit -m "title of message" -m "description"

##save on github (upload to our website)
after saving locally in your computer, you must upload to GitHub so that all of us can see your changes.
This process is called 'push'.
First, you need to connect your computer to github. To do so, create SSH key on your computer. add that SSH key on your Github account.
#Generating SSh key
