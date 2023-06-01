# fm_rest-country-api
A solution to a Frontend Mentor Challenge about retrieving data from a REST API into a website that allows user to filter through the list of countries by either searching for the country's name or using a dropdown where a user can select a region to use as a filter.

# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Links

- Solution URL: [(https://github.com/Gelianthus/fm_rest-country-api)]
- Live Site URL: [(https://gelianthus.github.io/fm_rest-country-api/)]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [react-icons](https://react-icons.github.io/react-icons/) - For icons

### What I learned

The hardest part of this challenge is error handling and data handling, it's something I've always neglected but once you start using API's you simply can't ignore it if you want your app to run without breaking every click.

Although, error handling is a lot simpler, having to write one for every piece of data you retrieve could take up a lot of your time.

```js
const [ countryData, setCountryData ] = useState([]); // This is a react hook

const async function getData = () => {
  try {
    const response = await fetch("example.url");
    const data = await response.json();
    setCountryData(data); // This is a useState hook from react
  } catch (error) {
    console.error(error);
  }
}

getData();

countryData && countryData.map(() => { }) // If no data is returned, do nothing
countryData ? countryData.map(() => { }) : "Failed to retrieve data" // If no data is returned, return an error message
```

Data handling on the other hand requires you to be quite proficient in object notations to make sure you're referencing the right data. It was a challenge to figure out how to correctly reference something, especially when it's key varies per item.
```js
 function displayData (index) {
  const keys = Object.keys(data[index]); // get the keys of an object, will return an array of keys
  return data[index][keys][0]; // use key to access the value
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

I'll prioritize learning data handling and error handling from now on. 

### Useful resources

- [chatGPT](https://chat.openai.com/) - I usually ask it to write a simple function like sorting function or capitalizer function while I work on something more logic intensive.

## Author

- Frontend Mentor - [@Gelianthus](https://www.frontendmentor.io/profile/Gelianthus)
