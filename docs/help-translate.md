---
title: Help Translate
---

# Help Translate

Help translate Automa extension into your target language. To get started, create an issue first about what language you want to add so a conflict could be avoidable.

Fork the automa repository and clone it into your local machine. Create a new branch called `locale-LANGUAGE-CODE`, replace `LANGUAGE-CODE` with the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) code of the language, for example `en` for English. After that, switch to that branch.

## Translation
To start translating the extension, navigate to the `src/locales` directory, duplicate the `en` folder and rename it to your targeted language. For the name, you can follow the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) code.

In the folder, you'll find JSON files. You can open these files and start translating. You only need to translate the properties of the JSON, for example
```JSON
{
  "home": {
    "viewAll": "View all"
  }
}
```
Into
```JSON
{
  "home": {
    "viewAll": "Lihat semua"
  }
}
```
And **don't** translate a word inside a curly bracket, like `{name}`;  `{count}`; etc.

## Register language
After you have translated all the JSON files, you need to register the language to the extension. Open the `src/utils/shared.js` file, and at the very bottom, you'll find the `supportLocales` variable. The `id` key is the name of the folder that you have added in the `src/locales` directory and the `name` key for the name of the language. And it will look like this
```js
export const supportLocales = [
  { id: 'en', name: 'English' },
  { id: 'id', name: 'Bahasa Indonesia' }
];
```
Open the `src/lib/dayjs.js` file and after the
```js
import relativeTime from 'dayjs/plugin/relativeTime';
```
line. Add `import 'dayjs/locale/langId'` code, replace the `langId` with the id of the language. You can find the id of the language in the dayjs [supported locales](https://github.com/iamkun/dayjs/tree/dev/src/locale) page

## Pull request
Before adding a pull request, commit the changes in your local repository first. The message of the commit must follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#examples), and in this case, it will look like this
```
feat(locale): add langId locale
```
then push it to the `dev` branch of your remote repository.

And you can do [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) into the automa repository