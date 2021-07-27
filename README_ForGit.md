#This is help for using git

##how to check if git is installed on your laptop

start command prompt and type this command
###git --version
if you get the message like (git version 2.27.0.windows.1), git has been installed on your computer.
Otherwise install it from https://git-scm.com/download/win.

#how to download project(for the first time)
open or create folder you want to put our website codes.NOTE internet connection is required.
start command prompt and type this command
###git clone #link(the link on github website, click on code)
Then you should see the file on GitHub website in your folder.

#add new file to git
start command prompt and type this command
###git add fileName
For example, if you want to add hello.css, then use this command
###git add hello.css

#save in git after writing code
After writing code, you have to save in git.
This process is called 'commit'.
start command prompt and type this command
###git commit -m "title of message" -m "description"

#how to check if you have commited
Sometimes you may confused whether you have commited or not.
start command prompt and type this command
###git status
if you see something red, you havenot committed.

#save on github (upload to our website)
after saving locally in your computer, you must upload to GitHub so that all of us can see your changes.
This process is called 'push'.
First, you need to connect your computer to github. To do so, create SSH key on your computer. add that SSH key on your Github account.
#Generating SSh key
start command prompt and type this command
###ssh-keygen -t rsa -b 4096 -C "youremailaddress"
Then you should see this
##Generating public/private rsa key pair.
##Enter file in which to save the key (C:\Users\Dell/.ssh/id_rsa):
Then type something(this wiil be the name of your key file, if you type nothing, the name will be id_rsa)and hit enter. you should see this.
##Enter passphrase (empty for no passphrase):
Now hit enter and you will see this
##Enter same passphrase again:
Hit enter again. Now you should see two file. Open keyfilename.pub. The file should start with ssh-rsa and end with your email address. copy everything and go to Github webiste. click on our respository and click on setting and then "Deplay Keys" and then "add deploy key". fill something you like in title(develper may use many computers. he may use his own computer in home and he may use public computer in office. title tells him what key is from what computer. this means there is nothing to do with us.)Paste the code you copied inside key. click on "add key". you will be asked the password. enter the password of your github account.NOW YOU HAVE SUCCESSFULLY CONNECT YOUR COMPUTER TO GITHUB ACCOUNT. THIS IS TIME TO PUSH.
#pushing to gitub
start command prompt and type this command
##git push origin main
main is the name of the brunch you push.Noe everyone can see your changes.

#ignoring git
you may have files that you don't want to show us. for example, your idea or something that does not belong to our project. To do so,

1. create a file and name it .gitignore
2. type the name of the file you want to ignore inside .gitignore file

   If you want ignore everything with specified file type use _.type
   for example you have mp4videos in your folder and you don't want to upload them. then write _.mp4 in .gitignore
