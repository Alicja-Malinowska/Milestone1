# Psychological testing centre for drivers - PSYCHOTEST
======

This is a website for a testing centre, based in Poland, that provides psychological assessments for drivers (mainly), as well as other professions. The purpose of the webiste is to inform potential clients about the services that are provided and to convince them to choose PSYCHOTEST over the competition. 

The website is available in two languages: Polish and English, so foreigners living and working in Poland are also able to learn about the services and the possibility to have the tests done in English. The website is dedicated mostly for individual clients, but it also contains information for GP surgeries and companies who would like to use the services for occupational medicine purposes. 

The [deployed website](https://alicja-malinowska.github.io/Milestone1/). 

#### External user’s goal:

The site users are people who need (or want) psychological assessment, and wish to learn more about it and possibly book an appointment. 

#### Site owner's goal:

The business owner wants to inform potential clients about the services/types of psychological tests they provide, as well as encourage them to choose PSYCHOTEST over the competition.  

### Context

The psychological testing is mandatory for some drivers in Poland (unlike in Ireland, UK and most of other European countries). Generally, the obligation for psychological assessment comes from two sources: Occupational Medicine Act and Road Transport Act. Simplifying, everyone who drives for professional purposes needs to have regular psychological assessments. Additionally, everyone who wants to obtain a driving license for categories other than A and B, is required to submit a psychological opinion (which is a result of psychological testing). Similarly, those with revoked driving license have to be psychologically assessed before they can get their license back. 

Additionally, psychological assessment is mandadory for people working with other mechanical vehicles, like forklifts and road rollers. Another group that is required to undergo psychological testing is those who apply for or want to renew their firearm license. 

The rationale for psychological assessments for drivers is derived from Traffic Pyschology, a discipline of psychology that focusses on the links between cogntitive/psychological abilities/qualities and road behaviours. More on the subject can be found on [this Wikipedia page](https://en.wikipedia.org/wiki/Traffic_psychology#Psychological_assessment,_counseling,_and_rehabilitation). 

 
## UX
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

The page navigation is designed to be intuitive and enable a user to find the information they look for quickly. The design offers a user multiple places from where they can get in touch and ask questions/book appointments as this is the most important purpose of the website (next to its informative function). The chosen iconography, typography, images and colours are meant to create an impression of a professional but also a friendly place. The logo of the company is in a shade of blue and other colours were chosen to match it, using an online tool https://mycolor.space/

The wirefreames can be found in my [GitHub repository](https://github.com/Alicja-Malinowska/Milestone1) in the assets folder. 

### Differences between wireframes and the website

* Wireframes were designed as a multi-page website, however after the discussion with my mentor this was changed to a single scrollable website 
* The language buttons were moved from the content of the page to the navigation bar for better user experience on the scrollable website
* Review link added to the homepage, not only the footer, since with the scroll design this would be only visible to the user once they have reached to the bottom of the page
* Pricing section - expandable boxes also applied on the desktop, not only mobile/tablet, since the description text is quite long and it would make page overloaded with text, which could negatively influence UX
* Contact section - map situated below the address rather than next to it in mobile view - makes it more readible 
* Footer - removed the reviews link from the mobile view as it makes it overloaded with content and this is already available on the home page to click

## Features

All the features were added to enhance the UX and make using the website easy to use.
 
### Existing Features
*	Fixed navigation bar – allows a user to navigate through the website quickly without the necessity to go back to the top of the page
*	Flag buttons – allow a user to switch between Polish and English language
*	Link to the reviews on the first page – allows a user to immediately be able to go to Google page and see the reviews (this opens in a new tab)
*	Booking button on the first page – allows a user to immediately get in touch by filling out a contact form that comes up in the form of a modal, which keeps the user in the same location on the page rather than taking them right to the bottom of the page where the contact section is 
*	An arrow button at the bottom of the landing view – informs a user that there is more content in the section and takes them to it when clicked
*	Book now/More buttons on each service card – give every user an easy way to get in touch/quickly get to the section that describes the test, while being focussed only on the content that is of interest
*	A phone number as a link/button – this allows users (mobile users in particular) to easily dial the number by just clicking/touching
*	Download icons – allow a user to download documents templates (depending on the language version the titles of the files are in English or Polish)
*	Pricing categories with expandable details – allows a user to easily find information about prices without being overloaded with the description text and find out more details about the section that is of interest by clicking and expanding it
*	An email address as a link/button – allows a user to immediately send an email by just clicking/touching it (this will open a new email window) – no need to copy and paste the address
*	An embedded Google map – shows the location of the centre and allows a user to look for directions directly from the website
*	A contact form – gives a user a third option (aside from calling or emailing) to get in touch
*	A Facebook icon button – send a user to the company’s FB page where they can see news/announcements


### Features Left to Implement

* Add a blog page where updates or new articles can be published (this will enhance SEO)

## Technologies Used

* HTML
* CSS
* [Bootstrap 4](https://getbootstrap.com/) - used for the responsive design, collapsable navbar, modals and collapsed text
* [CSS Gradient](https://cssgradient.io/) - background gradient created using this website
* [ColorSpace](https://mycolor.space/) - this tool was used to match the colors used on the webiste to the logo
* [Autoprefixer](https://autoprefixer.github.io/) - used to add prefixes for the code to work on different browsers
* [Visual Studio Code](https://code.visualstudio.com/) - an IDE used to write the code
* [Git](https://git-scm.com/) - used for version control


## Testing

### Automated testing

* [W3 HTML validator](https://validator.w3.org/) was used on both html files. There was an error pointing to the same id's in the form in the contact section and the form in the modal. The id's' names in the modal have been changed. Another error was an illegal character ("|") in the link to Google Fonts (the link was generated from there). To fix this I removed the link from the head and added @import in the CSS file. Since there are two html files and one CSS file this is a better solution. 

* [W3 CSS validator](https://jigsaw.w3.org/css-validator/) was used to check the CSS file. No errors were found. 

### Manual testing 

#### Features testing

* All the navigation links take a user to the assigned section.
* When Polish flag is clicked, a Polish version is displayed. When British flag is clicked, an English version is displayed.
* Book now button opens a modal with a contact form. When the sumit button is pressed on an empty form an error message appears. Similarly if any of the fields is empty (all are rquired) or when email address doesn't have a proper format (no @). The form in the Contact section behaves simiarly. When it is sumitted correctly, the modal closes. 
* The reviews link opens in a new tab and takes a user to a Google page containing the reviews.
* When the arrow-down icon is clicked on the homepage it takes a user to the further part of the section (similarly in What to Expect section).
* More about button on the cards takes a user to What to Expect section where they can read more about the test
* The phone link/icon when touched on mobile or tablet dials the number. On desktop it is possible to open it using several applications (e.g. Skype -  dependant on the individual user settings).
* When download icons are clicked/touched a file is being downloaded.
* When arrows in the pricing sections are clicked they expand and reveal more details about the price category.
* When the email address/icon is clicked/touched a new email message opens (or suggested apps to open it with - dependant on the individual user settings)
* When Facebook icon clicked/touched a new tab opens with the company's Facebook page.

#### Browser support

* The website was tested and works properly on: Chrome v77, Chrome v77 on Android, Opera v63
* On Firefox there was an issue with the flipcards on desktop - the cover of the card would still be visible when flipped. This was solved using a solution from [Stack Overflow](https://stackoverflow.com/questions/9604982/backface-visibility-not-working-properly-in-firefox-works-in-safari).

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
https://pixabay.com/ - flag images, truck hero image, cards images
[Font Awesome](https://fontawesome.com/) - all the icons were taken 

### Acknowledgements

- I received inspiration for this project from X
