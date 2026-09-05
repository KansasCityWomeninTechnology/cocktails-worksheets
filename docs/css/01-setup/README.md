# Setup :id=setup

Tonight we will learn the basics of applying styles to a website using **C**ascading **S**tyle **S**heets (**CSS**).

You should have received a [pre-session guide](https://drive.google.com/file/d/1UoX64J_8szac83q34tURfYh4V56JMwzV/view?usp=drive_link) in your e-mail. If you did not follow the instructions in that guide, you will need to install Google Chrome and create a GitHub account. Follow the instructions on this page to prepare your workspace.

> [!TIP]
> Open [**Slack**](http://kcwit.slack.com/) to the **#codingandcocktails** channel. It's a great way to stay in touch with your Coding & Cocktails friends and to ask questions during and after the session. We'll also post updates and tips in Slack if we run in to any issues tonight. 
> 
> If you haven't signed up for our Slack, yet, please follow [**this link**](https://join.slack.com/t/kcwit/shared_invite/zt-3rhkf2k3r-sDUuOdcNK5Pd1XnJ6AwONQ) to sign up.

> [!WARNING]
> We will use a cloud development environment called **GitHub Codespaces**. This means that your workspace is saved online, allowing you to access it from any computer with an internet connection.
> 
> In order to use Codespaces, you will need a GitHub account. For the best experience, we recommend using **Google Chrome**. While other browsers may work, using Chrome will ensure that all the tools and previews behave as this tutorial expects.

# Create Intro to CSS Codespace

We will use GitHub Codespaces for our workshop. GitHub Codespaces is a cloud development environment which means you have an access to your code even if you are not on your own laptop.

1. Navigate to [**GitHub**](https://github.com/login) and log in with your GitHub account.
 
If you didn't have a chance to create a GitHub account before the session, this page will let you set one up. Feel free to ask a mentor for help if ou need it!

    ![](./images/github_login.png ":class=image-border")

2. Once you're signed in, click on the following link to [**the starter code repo**](https://github.com/KansasCityWomeninTechnology/Coding-and-Cocktails-Intro-to-CSS) and click the "**Use this template**" button in the upper right-hand corner of the screen.

    ![](./images/intro_css_repo_page.png ":class=image-border")

3. Next, select the "**Open in a codespace**" option.

    ![](./images/open_in_codespace.png ":class=image-border")

> [!WARNING]
> Codespaces will take a ***long*** time to open. At times, it may seem stuck. Please ask a mentor if you are concerned about how it's behaving as it starts up. So long as you see this in the lower right-hand corner, you should be ok.
>
>   ![](./images/building_codespace.png ":class=image-border")
> 
> Once it finishes loading, click the "**X**" in the "**Build with Agent**" panel on the right. (On Mac, you may need to click the "**Toggle secondary sidebar**" icon or use the **Option-Command-B** keyboard combo.)
>
>   ![](./images/close_agent.png ":class=image-border")

4. Now you are ready to write some code! The Codespace page is split into 3 different sections. On the far left is the project's file structure. The top right section is where you will write your code. The bottom right section is where you will find the terminal.

5. Click "**Go Live**" in the lower right-hand corner of the screen. This will open a preview of your web page in a new tab. After you've taken a look at what we're starting with, return to the Codespace tab.

    ![](./images/go_live.png ":class=image-border")

    You may see some notifications in the lower right-hand corner of the screen when you get back to the Codespace tab. You can dismiss these by clicking the "**x**".

    ![](./images/close_server_notifs.png ":class=image-border")

> [!TIP]
> View the worksheet and your IDE in split screen.
>
> If you want to open the browser view in a new window, right click on the tab (control click on a Mac) and select "**Move tab to new window.**" Then you can put the browser view of your web page on half of your screen and the IDE on the other half.
>
> ![](./images/move_to_new_window.png ":class=image-border")
>
> ![](./images/side_by_side.png ":class=image-border")
>
> If you have any questions, feel free to ask. Mentors are happy to help!

> [!TIP] If you accidentally close the browser tab that is displaying your page, go back down to where you saw "**Go Live.**" There will be a "**Port 5500**" in its place. Click that to discard the live session. "**Go Live**" will reappear and you can click on it to create a new live session.
>
> ![](./images/port_5500.png ":class=image-border")

> [!TIP]
> Did you know you can collapse the table of contents for worksheets?
>
> Click on the hamburger menu (**:fas fa-bars:**) at the top of the page to toggle the table of contents.
>
> ![](./images/collapse_toc.png ":class=image-border")

> [!TIP]
> Did you know you can perform common tasks such as copy and paste?
>
> When working without a mouse, keyboard shortcuts will be faster than a trackpad. To speed up your workflow, we recommend using these for tasks like copying and pasting. Open this [**useful keyboard shortcut reference in a new tab**](/css/references/ ":target=_blank") so you can refer to it easily!
