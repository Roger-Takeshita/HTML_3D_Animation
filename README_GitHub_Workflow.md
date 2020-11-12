<h1 id='contents'>Table of Contents</h1>

- [GITHUB WORKFLOW](#github-workflow)
  - [Branches](#branches)
  - [Initial Commit](#initial-commit)
  - [Feature Branch](#feature-branch)
    - [Feature 1](#feature-1)
    - [Feature 2](#feature-2)
  - [Staging Branch](#staging-branch)
  - [Hotfix Branch](#hotfix-branch)
  - [Minor Issue](#minor-issue)

# GITHUB WORKFLOW

## Branches

[Go Back to Contents](#contents)

- Create the following branches

  ```Bash
    git checkout -b production
    git push
    git push --set-upstream origin production

    git checkout -b main
    git push
    git push --set-upstream origin main

    git checkout -b hotfixes
    git push
    git push --set-upstream origin hotfixes

    git checkout -b staging
    git push
    git push --set-upstream origin staging
  ```

## Initial Commit

[Go Back to Contents](#contents)

- Initial **main** branch commit

  ```Bash
    git checkout main
    git add README.md
    git commit -m "First commit"
    git push -u origin main
  ```

## Feature Branch

### Feature 1

[Go Back to Contents](#contents)

- Create a new **issue**

  - Title: `Update README file with Lorem Lipsum`
  - Description: `I need to update the read me file`
  - Assignees: `Roger-Takeshita`
  - Labels: `feature`
  - Submit new issue

- Feature branch

  ```Bash
    git checkout -b feature/1-readme-lipsum
    # update readme
    git status
    git add README.md
    git commit -m "#1 - update readme file with lorem ipsum"
    git push
    git push --set-upstream origin feature/1-readme-lipsum
  ```

- Create a PR

  - New pull request
    - base: `main` <- compare: `feature/1-readme-lipsum`
    - Create pull request
      - Description: `This is what I did. Refer to ticket #1`
      - Create pull request

- After merging the PR

  ```Bash
    git checkout main
    git pull
  ```

  ![](https://i.imgur.com/YKcn0lk.png)

### Feature 2

[Go Back to Contents](#contents)

- Create a new **issue**

  - Title: `Update readme with horoscope`
  - Assignees: `Roger-Takeshita`
  - Labels: `feature`
  - Submit new issue

- Feature branch

  ```Bash
    git checkout -b feature/3-readme-horoscope
    # update readme
    git status
    git add README.md
    git commit -m "#3 - update with horoscope"
    git push
    git push --set-upstream origin feature/3-readme-horoscope
  ```

- Create a PR

  - New pull request
    - base: `main` <- compare: `feature/3-readme-horoscope`
    - Create pull request
      - Description: `I've added horoscope`
      - Create pull request

- After merging the PR

  ```Bash
    git checkout main
    git pull
  ```

  ![](https://i.imgur.com/qB9c3EO.png)

## Staging Branch

[Go Back to Contents](#contents)

- Merging data form `main`

  ```Bash
    git checkout main
    git pull
    git checkout staging
    git merge main
  ```

- Create tag

  ```Bash
    git tag "v1.0.0"
    git push --tags
  ```

  ![](https://i.imgur.com/fnmLebW.png)

- Merge **staging** into **production** using command line

  ```Bash
    git checkout production
    git merge staging
    git push
  ```

  ![](git merge staging)

## Hotfix Branch

[Go Back to Contents](#contents)

- Create a new **issue**

  - Title: `Wrong horoscope on production`
  - Assignees: `Roger-Takeshita`
  - Labels: `hotfix`
  - Submit new issue

- Bug Branch

  ```Bash
    git checkout -b bug/#5-readme-leo
    # update readme
    git status
    git add README.md
    git commit -m "#5 - update horoscope to use leo"
    git push
    git push --set-upstream origin bug/#5-readme-leo
  ```

  ![](https://i.imgur.com/tlIE7GL.png)

- Create a PR **Wrong PR**

  - New pull request
    - base: `main` <- compare: `bug/#5-readme-leo` (**Wrong branch**)
    - Create pull request

- Fixing wrong PR

  ```Bash
    git checkout production
    git checkout -b hotfixes
    git checkout bug/#5-readme-leo

    git checkout -b bug/5-readme-leo
    git merge hotfixes

    git branch -D bug/#5-readme-leo
    git push origin --delete bug/#5-readme-leo

    git push
    git push --set-upstream origin bug/5-readme-leo
  ```

  ![](https://i.imgur.com/fgiZBtZ.png)

- Create a PR

  - New pull request
    - base: `hotfixes` <- compare: `bug/5-readme-leo`
    - Create pull request
      - Description: `Big mistake needs to be fixed right away`
      - Create pull request

- After merging the **hotfix**, we are ready to create a new tag

  ```Bash
    git checkout hotfixes
    git tag "v1.0.1"
    git push --tags
  ```

  ![](https://i.imgur.com/avKFcm8.png)

- Updating production branch, using github website

  - Create a PR
    - New pull request
      - base: `production` <- compare: `hotfixes`
      - Create pull request
        - Description: `Apply 1.0.1`
        - Create pull request

## Minor Issue

[Go Back to Contents](#contents)

- Create a new **issue**

  - Title: `Correct a minor issue in Readme`
  - Assignees: `Roger-Takeshita`
  - Labels: `bug`
  - Submit new issue

- Feature branch

  ```Bash
    git checkout -b bug/9-readme-fix
    # update readme
    git status
    git add README.md
    git commit -m "#9 - Should have corect headings"
    git push
    git push --set-upstream origin bug/9-readme-fix
  ```

- Create a PR to send to **main**

  - New pull request
    - base: `main` <- compare: `bug/9-readme-fix`
    - Create pull request
      - Description: `add some description`
      - Create pull request

- After merging the PR, we need to send to **staging**
- Using github website

  - Create a PR
    - New pull request
      - base: `staging` <- compare: `main`
      - Create pull request
        - Title: `Latest batches of fixes`
        - Description: `add some description`
        - Create pull request

  ![](https://i.imgur.com/KlI0rFC.png)

- After we are happy with **staging**, we then tag

  ```Bash
    git checkout staging
    git tag "V1.1.0"
    git push --tags
  ```

  ![](https://i.imgur.com/a15k8ax.png)

- After pushing the tags,

- Create a PR

  - New pull request
    - base: `production` <- compare: `staging`
    - Create pull request
      - Title: `Staging to Production`
      - Description: `add some description`
      - Create pull request

  ![](https://i.imgur.com/BRFbBUk.png)
