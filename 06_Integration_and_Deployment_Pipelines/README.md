# CI/CD

## Some concepts

#### What is Devops

- A culture and the practice of an organization.
- Build, test, and release frequently and with reliability
- Requires automated delivery cycle and significant infrastructure changes

image:: images/01_devops.jpg

#### What is continuous

* Continuous Integration
  * Ensure source code stability
  * Build and unit test
  * Merge continuously, frequently, and minimally

image:: images/02_CI.jpg

* Continuous Delivery
  * Ensure every change can be deployed
  * Option to hold for any manual activity before production deployment
* Continuous Deployment
  * Deploy every change to production automatically

image:: images/03_continuous_delivery_deployment.jpg

* Continuous Testing
  * Generating virtual services and test data
  * Test build promotion criteria
  * Test build configuration
  * Test environment provisioning
  * Test build deployments
  * Monitor and test Application monitoring
  * Capture and analyze test results data
  * Correlate results to past execution

* Manage and deploy A/B tests and canary builds for continuous releases

An Interesting periodic table of devops tools is provided [here](https://xebialabs.com/periodic-table-of-devops-tools/)

#### Git

Git is distributed repository in comparison to other version control solutions like SVN, TFVC. Here is an old report comparing their growth

image:: images/04_svn_vs_git.png

##### Git stages

Git has three stages
* Working Directory (Untracked/ Unstaged)
* Staged
* Commit

We can then link the local repository with global repository (remote)

image:: images/05_git_stages.jpg

Following are a few commands that we looked at:

```bash
git init # initialize a git repository in current directory
git config user.email "your@email" # configure email for current git repository. You can use --global for making it global
git config user.name "Your Name" # configure user name for current git repository. You can use --global for making it global
git add . # Add all untracked/Unstaged changes to staged
git commit -m "Commit Message" # Add changes to local repository
git commit -am "Commit Message" # Add all unstaged changes and then add to local repository in single command
git log # See commit log history for current branch
git log --pretty=oneline # See the logs in single line with basic information
git branch # show all branches
git branch branch_name # create new branch
git checkout branch_name # Switch to new branch
git checkout -b branch_name # Switch to new branch and create if not already exists
git checkout -- . # Discard all unstaged changes
git reset HEAD # Reset staged changes
git reset HEAD~1 # Reset last commit
git reflogs # see branch logs
git reset 'HEAD@{4}' # Go back to reflog head 4
git stash # Push current working directory to stack
git stash list # To see stashed items
git stash pop # pull latest stashed changes
git remote add origin <ssh git url> # Link current local repository to remote repository under the name origin
git push -u origin --all # Push all branches and commits to remote named origin
git pull origin # to be able to pull changes from remote to local
```
https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/

#### Docker
https://www.freecodecamp.org/news/comprehensive-introductory-guide-to-docker-vms-and-containers-4e42a13ee103/
