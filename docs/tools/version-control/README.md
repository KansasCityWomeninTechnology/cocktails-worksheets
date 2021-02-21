![Git logo](images/git.png)

# Git

Git is a tool that helps you manage versions of your code and work in collaboration with team members. Git and version control is an expansive subject, but we will cover the basic usage needed for developers.

# Install Git

Close Visual Studio Code if you have it open.

In Google Chrome go to [https://git-scm.com/downloads](https://git-scm.com/downloads). Select the installer for your OS, **Windows Installer** or **macOS Installer**, to download the installer. If you use Linux, download the binaries appropriate for your distribution of Linux.

Run through the installer and select all default options.

# Initialize User Settings

Next, we need to configure our Git version control so that you can use it with your GitHub account.

>[!INFO]
>If you have already set up Git before, you may skip to the next section.

Open Visual Studio Code and open the built in **Terminal** by selecting **Terminal** :fas fa-long-arrow-alt-right: **New Terminal**.

{% codeblock %}terminal{% codeblock %}
```sh
git config --global user.name "Your Name"
```

>[!WARNING]
>Replace the text "Your Name" with your own full name, keeping the quotation marks. i.e. "Jane Doe"

Next, set your user email address by running the following command:

{% codeblock %}terminal{% codeblock %}
```sh
git config --global user.email youremail@example.com
```

>[!WARNING]
>Replace youremail@example.com with the email address you use for GitHub.
