# Team Code Monkeys


# WeatherSense

A weather app with fitness fanatics as the target audience, providing users with accurate daily and three-hourly weather forecasts so that they can plan their activities based on weather conditions.

Users can expect a seamless experience in acquiring weather information for their local area.  They can retrieve data at the click of a button and it will be displayed aesthetically on any device.

![local Image](assets/readme-images/2023-10-27%20(2).png)

---

## Project Setup

### Persona and User Stories

#### Persona overview

**Fitness Fanatic**

- Age: 25-40
- Occupation: Office Worker, Self-Employed, Fitness Instructor
- Needs: Accurate weather forecasts to plan outdoor workouts or sports activities
- Goals: To maintain a fitness regime without weather-related disruptions

---

#### Chosen persona

Once we'd decided on a general persona, we then created a persona who would be able to use our weather app for his/her fitness needs.

**Meet Emma**

Emma is a *fitness instructor* who is passionate about helping her clients achieve their fitness goals.  

She believes that an active and healthy lifestyle is essential for overall well-being.  

However, Emma struggles with finding accurate and reliable weather information to plan her outdoor fitness classes effectively.  

*So, what **problems** does Emma face?*

Emma's main struggle is accessing real-time and accurate weather information to plan her outdoor fitness classes.

She needs to know if it will rain, snow, or be too hot or cold for her clients to exercise safely outdoors.

Common **pains** which Emma faces are:

- Wasting time searching for weather forecasts on different websites and apps
- Inaccurate weather predictions leading to unexpected cancellations or uncomfortable workout conditions
- Losing clients due to poor weather planning and lack of alternative indoor workout options

*What are Emma's **goals?***

- Emma wants to be able to confidently plan her outdoor fitness classes without worrying about unexpected weather conditions.
- She aims to provide a consistent and enjoyable workout experience for her clients, rain or shine.

*And what **triggered** Emma to find a solution?*

- The last straw for Emma was when she had to unexpectedly cancel a fitness class due to sudden rain.
- Several clients were disappointed, and she realized the need for a reliable weather app that could provide accurate and timely forecasts.

**And that's where WeatherSense comes in.**  
A simple-to-use weather app which thrives on providing users like Emma with a seamless, enjoyable experience in accessing accurate weather data.  Now, she'll never have to worry about disappointed clients or cancelling classes!

#### User Stories

These are some user stories which we came up with as a team.  We decided together what users would want from a weather app based on our chosen persona:

- AS A Fitness Fanatic I WANT TO get daily weather forecasts SO THAT I can plan out a regime of workouts/sports activities

- AS A Fitness Fanatic I WANT TO have suggested activities depending on the weather conditions SO THAT I can stay active even when the weather has changed.

- AS A busy Fitness Fanatic I WANT TO have a website/app that provides the weather in a simple, easy-to-read way SO THAT I can quickly plan my daily/weekly routine around the weather conditions.

- AS A Fitness Fanatic I WANT TO quickly and easily view daily/hourly weather conditions SO THAT I can quickly plan my daily/weekly fitness regime.

- AS A Fitness Fanatic I WANT TO search for my local weather forecast for the week SO THAT I can plan my workouts accordingly

---

### GitHub Setup

#### Repo Setup

The repo was set up by our facilitator, Richey Malhotra, and we were all invited as collaborators.  Only the Lead Dev of the day was able to review and approve of pull requests to be merged into the main branch.

**Click [here](https://github.com/richey-ci/code-monkeys) to view the GitHub Repo.**

---

#### Trello

Instead of using GitHub projects, we used a Trello board to keep track of features and implementations. We added features which we thought of to the Backlog, and pulled forward the features which were ready to be addressed into the Ready column. Once a feature was being worked on, it was pulled into "In Progress".  From there, it went to "In Review" for the Lead Dev to approve of before being marked as "Done".  

GitHub Issues followed this convention, each feature being addressed as an "Issue".  Once someone was working on a Trello feature, the corresponding Issue would be assigned to whoever was working on it at the time.

---

### Wireframing

On day one, we worked with the UXD to create a wireframe using Balsamiq.  We used this tool to create our first design which we followed in order to structure our HTML.

---

### Styles and Layout

Following the wireframe, we used HTML elements and CSS styling to lay the page out how we wanted.  We adopted a colour scheme which we implemented throughout, ensuring that everything lined up both structurally and thematically.


---

## Features

### Search bar

The search bar feature is where it all begins for our weather app.  A nicely styled search bar will act as the main feature when a user first accesses our site, providing information to indicate what to search for (a city).  Once the user clicks the search button, he or she will be returned with the weather data for the current day as well as the next four days ahead (five days total).

### Daily Weather

Once the data is retrieved, the first thing the user will be greeted with is a beautifully presented layout containing the information for the current weather (Temperature, weather condition and wind speed).  The user will be delighted with a standout image which will quickly inform him/her if it's going to be sunny, rainy, etc. so that they can quickly decide on what is best to do for the rest of that day.

### Hourly weather

Building on daily weather, a more detailed array of weather data will be presented in the form of a well-structured grid layout, providing the weather condition in three-hourly intervals.  Each timestamp will have the time which that weather occurs, the weather condition at that time, an image, the temperature, and the windspeed.

*NOTE: Every day apart from the current day will only display three-hourly forecasts.  The user will have the option to display these days by clicking on an accordion button which will then drop down and present that day's three-hourly weather forecast.*

### Suggest activities

Users will also be able to see suggested activities based on the current weather.  For example, if it's sunny and warm, then our app might recommend a nice jog.  If it's cloudy and cold, then it might be best to go cycling.  If it's raining, then it might be best to plan indoor activities like weight-lifting, swimming, etc.

### Simple yet aesthetic UX

Our goal is to make the user's experience as pleasant as possible.  With the help of a well-structured layout, responsiveness, and a pleasing array of colours, users can expect to view accurate weather data and have a very good incentive to return and use our services again.

### Premium service

While this may be out of scope for this sprint, one feature which we discussed implementing is a premium service.  Once subscribed, a user can expect to receive push notifications which will keep him/her up to date with the weather, as well as informing him/her if the weather is expected to change, any weather warnings, etc.  
Subscribing will also provide a user with hourly forecasts rather than three-hour intervals, and will also use the push notifications to suggest activities for each day based on the weather.

### Event listener to add functionality to search bar 
An event listener has been implemented in the JavaScript code to make the seachbar more user friendly through adding a keydown function when "Enter" and "Return" button is pressed on the keyboard. This functionality ensures that the search bar can execute a search for a city when "Enter" and "Return" has been pressed. 

### Alert banner with added functionality 
An alert banner has been added to the header of index.html. This banner shows the suggested activities section which is displayed below todays forecast this section is hidden and is displayed when the user clicks on "Subscribe" the banner then displays the suggested activities and changes the banner text and colour to green.

# Day 2 
Day 2 of this Hackathon will be focussed on adding responsiveness to the index.html. The JavaScript also needs to adjusted to display the 3 hour forecast. 

## Roles 
Keiran has undertaken the responsibility of enhancing the Index.html and focusing on optimizing the user experience design of the webpage.

Kerry has assumed the role of a developer, specifically concentrating on improving the website's functionality through JavaScript development.

Matthew is responsible for the documentation and is the lead developer who is responsible for making sure the team is on task. 


## Updated design 
While working on the previous wireframe and design it is clear that the design needs to refined. The initial design has been changed to adapt to the changing website. As can be seen below. 

![local Image](assets/readme-images/Updated%20design%20hackathon%202.JPG)


Some of the changes include: Adding an Accordion, a section about activities (which recommends activities to the user). These changes were implemented to better suit the target audience of a fitness fanatic.

## Activity of Day 2 
Matthew managed the teams activities for the day 2 to ensure that the team were focussed on their tasks. He documented the activities of the team and reviewed pull requests to ensure that merged code would not cause any issues or conflicts with the existing code. 

Kieran restructured the HTML and implemented styles which corresponded with the agreed colour scheme. He laid out the hourly divs in a grid style format and added media queries to ensure that the app would respond well to all screen sizes.

Kerry has worked on the JavaScript and backend functionality of the website to ensure that the Open weather`s API data is displayed in the correct div elements. She has analysed the JavaScript code to guarantee the functionality of the website and has formatted and commented the code to ensure readability. 

###  Day 3 
Day 3 of the hackathon is focussed on getting our project functional and to ensure that Weather Sense is responsive and validated to ensure that our code is up to standard. 

## Roles 
Kieran has taken the role of general dev today, cleaning up some css issues and jumping into so error handling in the JavaScript. 

Kerry is lead dev managing the teams pull requests and keeping up with project and issue tracking, also helping out with some documentation. 

Matthew is scrum master and general dev today doing stand ups, downs and making sure everyone knows what they are doing. Also helping tidy up some code and add some last minute funcitonality. Planned out our presentation.

## Validation of HTML 
The index.html has been validated through W3C HTML Validator which is available at https://validator.w3.org/. The validation has been approved by W3C HTML validator as illustrated below. 

![local Image](assets/readme-images/Index.html%20validated.JPG)

## Validation of CSS 
The CSS has been validated through W3C CSS Validator which is available at https://jigsaw.w3.org/css-validator/ . The validation of the style.css has been approved by W3C CSS Validator which is illustrated below. 

![local Image](assets/readme-images/style.css%20validated.JPG)


ms.css has also been validated through W3C CSS Validator as shown below. 

![local Image](assets/readme-images/ms.css%20file%20validated.JPG)
 

## Out of scope features 
Weather Sense had initially planned to implement a speech functionality through adding an API which would output the weather in speech to the user. Due to time constraints we we`re unable to add the functionality to Weather Sense as we prioritised our tasks so that the weather would display accurate information to our users. 

Another out of scope feature is that the time range which would have been displayed alongside the search bar. This feature would have been implemented so the user could add customised date range so they could plan ahead. This function however, was out of scope as it required another API to be implemented into the JavaScript and to have two APIs to exchange data dependent on the location. Due to time constraints of the hackathon this feature was not fully realised. 








