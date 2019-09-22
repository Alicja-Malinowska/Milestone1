Alt-Psychological testing centre for drivers - PSYCHOTEST
======
https://alicja-malinowska.github.io/Milestone1/

This is a website for a testing centre, based in Poland, that provides psychological assessments for drivers (mainly), as well as other professions. The purpose of the webiste is to inform potential clients about the services that are provided and to convince them to choose PSYCHOTEST over the competition. 

The website is available in two languages: Polish and English, so foreigners living and working in Poland are also able to learn about the services and the possibility to have the tests done in English. The website is dedicated mostly for individual clients, but it also contains information for GP surgeries and companies who would like to use the services for occupational medicine purposes. 

#### External user’s goal:

The site users are people who need (or want) psychological assessment, and wish to learn more about it and possibly book an appointment. 

#### Site owner's goal:

The business owner wants to inform potential clients about the services/types of psychological tests they provide, as well as encourage them to choose PSYCHOTEST over the competition.  

### Context

The psychological testing is mandatory for some drivers in Poland (unlike in Ireland, UK and most of other European countries). Generally, the obligation for psychological assessment comes from two sources: Occupational Medicine Act and Road Transport Act. Simplifying, everyone who drives for professional purposes needs to have regular psychological assessments. Additionally, everyone who wants to obtain a driving license for categories other than A and B, is required to submit a psychological opinion (which is a result of psychological testing). Similarly, those with revoked driving license have to be psychologically assessed before they can get their license back. 

Additionally, psychological assessment is mandadory for people working with other mechanical vehicles, like forklifts and road rollers. Another group that is required to undergo psychological testing is those who apply for or want to renew their firearm license. 

The rationale for psychological assessments for drivers is derived from Traffic Pyschology, a discipline of psychology that focusses on the links between cogntitive/psychological abilities/qualities and road behaviours. More on the subject can be found on [this Wikipedia page] (https://en.wikipedia.org/wiki/Traffic_psychology#Psychological_assessment,_counseling,_and_rehabilitation). 

### Differences between wireframes and the website

* Wireframes were designed as a multi-page website, however after the discussion with my mentor this was changed to a single scrollable website 
* The language buttons were moved from the content of the page to the navigation bar for better user experience on the scrollable website
* Review link added to the homepage, not only the footer, since with the scroll design this would be only visible to the user once they have reached to the bottom of the page
* Pricing section - expandable boxes also applied on the desktop, not only mobile/tablet, since the description text is quite long and it would make page overloaded with text, which could negatively influence UX
* Contact section - map situated below the address rather than next to it in mobile view - makes it more readible 
* Footer - removed the reviews link from the mobile view as it makes it overloaded with content and this is already available on the home page to click
 
Alt-UX
------

The majority of the users will be individuals who are mandated to undergo a psychological assessment and submit psychological opinion of their fitness to drive a mechanical vehicle (or in some cases - fitness to carry a firearm). Therefore, the question they will be asking will not be 'IF' they should choose to use the services, but rather 'WHICH' place they should choose. 

People usually find psychological assessment stressful, as they are not sure what to expect. For this reason, the webiste is designed in the way to:

  1. Assure the potential client that eery effort will be made to reduce the stress
  2. Reduce the anxiety by giving as much information as possible about what they can expect during the assessment and how they should prepare

Other motivations of the individual clients are:

  1. Have the tests done as quickly as possible
  2. Have flexibility with booking (e.g evenings, weekends)

The smaller group of users will be GP surgeries and companies who want to offer the tests to their patients/employees as a part of occupational medicine practice. Their main goal will be to find out the details about potential cooperation between them and PSYCHOTEST. They will also be interested to get the best prices.

There will also be a very small group of users interested in having the psychological assessment for other reasons, without being obligated to do them. They will want to know what kind of tests they can have.

### User stories

* As an indivdual client I want to have a navigation item that will take me to the page that explains how the test is done
* As an indivdual client I want to just touch the number on my mobile so I am able to immediately call and book an appointment
* As an indivdual client I want to be able to click a link to the Google reviews so I can see what other people say about the service
* As an indivdual client I want to be able to fill out a form so I can ask a question or book an appointment 
* As an indivdual client I want to have a navigation item that will take me to the pages with services so I can see if the company provides the services I need/want to use
* As an indivdual client I want to see a Google map so I can check the location of the business
* As an indivdual client I want to have a button on each page that will take me to the contact page so when I decide to book an appointment after reading a relevant peace of information I can instantly get in touch
* As an indivdual client I want to have a navigation item that will take me to the price list so I can compare it with other places
* As a GP surgery/company I want to have a separate navigation item that takes me to the page with all the relevant information so I can quickly find out how I can use the services for groups
* As a GP surgery/company I want to be able to download a service agreement template so I can find out the proposed rules o cooperation and fill it out electronically 
* As a GP surgery/company I want to be able to download a referral template so I do not need to create my own documents when sending people for tests
* As a user I want to have a navigation item that takes me to all the contact details
* As a user I want to have a navigation item that will take me to the about section so I can learn more about the company
* As an English speaking individual client I want to have a button that switches the language to English so I can understand the information presented on the webiste


----------------------------------------------------------------------------------------------------------------------------




Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...
https://pixabay.com/ - flag images, truck hero image, 
### Acknowledgements

- I received inspiration for this project from X
