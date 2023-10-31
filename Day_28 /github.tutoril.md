
## Day 30 : Github:

    / = root directory
    ~ = Home directory
    mkdir = make directory
    cd = back to two step
    touch = create a file
### Delete 
        rm = remove directory
        rmdir = remove empty folder
        rm -rf = remove any folder

### Flags 
    flag are characters that we pass with command to modify their behaviour

### Manual command
        man ls = get the information of command
        with flag
            ls -l
            ls -a
            ls -la

### Git -> Tool
    Git is a free **tool** and open source **version control system**
    1) track history
    2) help tp collaboration


## Github
    It is a website where we host repositories online.

### Commands
    **git push origin --delete remoteBranchName** => delete the branch from the github
    **git branch** => to check branch
    **git branch -m main** => to rename branch
    **git checkout <-branch -name>** =>  to navigate
    **git -b < new branch>** => to create new branch
    **git branch -d <-branch -name>** =>  to delete branch 

## Merging Code after someone contribute over project
    **git diff <-branch name> => to compare commit branch file
    **git merge <branch name> => to delete branch
    
## Create PR(pull request)

### Fixing Mistake 
    Case 1: 
        statged (only "add --all) changes
        git reset <-file_name> 
        git reset

    Case 2: 
        Commit changes (for one commit)
        git reset HEAD(like linked list head node) 
    
    Case 3: 
        Commit changes (for many commit)
        git reset <-commit hash>
        git reset --hard <-commit hash> 

    **git log** => get all commit

## Forking || Contribution
    A fork is a new repo. that shared code and visiblity settings with the original "upstream" repo.
    **fork means => It is a rough copy**
    1) Fork
    2) Pull request

## If you get this error
     ! [rejected]        main -> main (fetch first)
        error: failed to push some refs to 'https://github.com/Bhattiaman/Back-End'
        ***
        git push -f ori origin main  
        