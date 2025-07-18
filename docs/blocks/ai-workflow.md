# Automa AI Power

Execute advanced AI workflows directly within Automa Extension.
You must connect **Automa AI Power** with your Automa account to use this block.

Note: Automa AI Power requires a separate account. Accounts for Automa AI Power and the Automa extension are not linked at this time. You can register for a new account at https://aipower.automa.site

## Overview

**Automa AI Power** is a no-code platform that lets you build and run custom AI workflows. It integrates large language models, RAG knowledge bases, and complex logic without needing any code.

While the Automa extension is great for handling **structured data** (like spreadsheets or form fields), AI Power gives your automations the ability to understand and process **unstructured data** (like customer reviews, emails, or support tickets).

## How It Works

To use this block, you first build and publish a workflow in Automa AI Power.

## Block Configuration

**Token**
Your unique authorization token from your Automa AI Power account. You must enter this to connect your account.

**Workflow**
Select one of your published AI Power workflows from the dropdown list.

**Inputs**
The data you want to send to your AI Power workflow for processing. The number and names of the input fields that appear here are determined by the selected workflow's configuration in AI Power.

**Outputs**
Assign the results from your AI Power workflow to variables. The number and names of the available output fields are also determined by your workflow's configuration in AI Power. You can then use these variables in subsequent blocks.

![](https://winrobot-pub-a-1302949341.cos.ap-shanghai.myqcloud.com/image/20250718173702/88015363f6b069ffa030e92597cad97e.png)

*Additionally, AI Power offers agent building capabilities, though this feature is not yet integrated into the Automa Extension. Stay tuned for future updates!*

## Additional Resources

For more details, check out these helpful resources:

  * [Create a New Workflow in AI Power](https://docs.automa.site/AIPower/819038756436922368)
  * [Knowledge Base Overview](https://docs.automa.site/AIPower/819048519287656448)
  * [Connect an External Database](https://docs.automa.site/AIPower/819048427348512768)