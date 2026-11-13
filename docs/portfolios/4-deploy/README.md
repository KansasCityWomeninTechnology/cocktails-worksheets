<div>
    <img src="images/logo.png" style="float: left; margin: 0px 15px 15px 0px; height:125px;">
    <h2 style="display:inline-block;margin-top:1em;">Coding &amp; Cocktails: The Shaker</h2>
    <h3 style="margin-top:0;margin-bottom:2em;">Let's Build a Portfolio Website - Deployment</h3>
</div>

### Deploy

Yay! You have a portfolio website built! There's only one problem:  It's only visible if you "go live" from inside your Codespace.

There's no point in having done all this work if we can't show it off.

There are many ways to put a website out on the internet. Most businesses, large or small, pay for hosting packages with web hosting companies. This generally costs some money, including paying for a domain name and for the hosting services.

Domain names don't cost much, but depending on the host you choose, hosting fees to have your site appear on the internet can add up quickly.

Luckily, GitHub has a **free** way to publish, or deploy, your portfolio site!

Go to your repo's home page (```https://github.com/<YOUR_USER_NAME>/<YOUR_REPO_NAME>```).

Click on "**Settings**." You will now see a page that looks something like this:

![](./images/settings_page.png ":class=image-border")

Click on the "**Pages**" link.

You will see several sections on this page. The one we are interested in is the "**Branch**" section.

![](./images/GitHub_Pages_setup.png ":class=image-border")

Click on the "**None**" box and select your main branch, then click "**Save**."

Now, at the top of the page, click on "**Actions**." You should now see a page that looks something like this, with a yellow icon to the left of "pages build and deployment."

![](./images/workflow.png ":class=image-border")

When that icon changes to a green check mark, click on "**pages build and deployment**." You will see a diagram with "build" on the left and "report-build-status" and "deploy" on the right. In the "**deploy**" box is a link to your web page. Click it and make sure everything works.
 
If your links or styling don’t work, check the start of each href. Your site’s address includes the name of your repo. If an href starts with a slash, like “/css/backToTopButton.css”, the browser may skip the repository name and be unable to locate the file. Start each href with the folder name instead, with no slash. For example, “/css/backToTopButton.css” becomes “css/backToTopButton.css”. This works in Go Live and on your published site.

Any time you make changes and commit them, your site will go through the build and deploy process automatically. This will take a couple of minutes, but when it's complete, your site should be updated. Force refresh your page by using Ctrl-F5 or Ctrl-Shift-R on Windows or Cmd-Shift-R on a Mac and make sure everything works.

Hurray! You've done it!
