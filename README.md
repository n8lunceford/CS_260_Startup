# CS 260 Startup
## The Concept
The startup project is an opportunity to create something that can be of great benefit for the people I interact with. With this in mind, I want to give others an opportunity to experience a concept I myself have longed for, and that is a virtual calendar.

Calendars, when designed properly, can be of great use. They can assist users in keeping events organized. With this tool, it's relatively harder to be late for things. However, not all calendars have the features I look for, such as distinct colors for specific types of events, and the ability to see the schedule for more than one day of the week.

The purpose of this calendar is to provide a diverse amount of event types, such that custom checklists can be created and associated with events. For example, for a class, events like homework and papers may be put onto a checklist. Even more general, maybe a grocery list for the week can be put together. For dating, checklists can be made as a roadmap to a potential relationship.
## Example UI
![Example UI](260_startup_image.png)
\* This dropdown menu includes (but is not limited to) "Lists", "Edit Agenda", and "Logout".

\** This dropdown menu includes (but is not limited to) "Agenda", "Edit Lists", and "Logout".
## The Inspiration
I think it's safe to say that the inspiration is obvious: the Preach My Gospel application.

Previously called Area Book Planner, this app is solely used by missionaries. Everyone who has served a mission in my generation is well familiar with its diversity of planning features. It is not just a calendar or an agenda; it is a database of information regarding those who learn the Gospel, so that the missionaries may assist them on the Covenant Path.

Lists are fixed in the Preach My Gospel app, because missionaries are required to complete a set of requisites which are outlined by the Church. However, in this project, I plan to make lists customizable; not only does each person have their own set of requisites for dating status, but the lists can be used for much more. Ideally, the only limit will be the imagination of the client.
## The Methods
* **HTML** - Up to 5 HTML pages; one for the login, one for the agenda interface, one that displays lists, one for creating/editing events, and one for creating/editing lists. The creating/editing interfaces may be used within the agenda and list pages respectively. Hyperlinks will be used to switch between each page.
* **CSS** - Styling will be implemented that allows the agenda interface to look appealing for the sake of keeping the user organized.
* **JavaScript** - Being able to click, hold, drag, and drop events in the agenda has proven useful in many calendar applications. This feature may also be used in the requisites of a list, to change order for the sake of priority.
* **React** - Internal state will be managed, so that the data is stored properly.
* **Service** - Endpoints such as creating, changing or deleting events and lists.
* **Database** - A database will store users and actions. User data will be secure, and actions will not be saved without proper authentication.
* **WebSocket** - The actions of a user will update in real time in all of their open sessions.
## HTML Startup
I created 5 different HTML files, each representing a page.
* **index.html** - This page contains the login/create account section, which information will be stored in the database.
* **calendar.html** - This page contains the first great interface that represents an interface for September, using buttons for each day. Above the calendar is a representation of WebSocket usage, notifying what users are doing in real-time.
* **agenda.html** - This page is very similar to calendar.html, but in place of a calendar is a view of a particular week, with a placeholder for interactivity for each hour within each day.
* **lists.html** - This is a placeholder for the UI to be implemented for lists that the user will create.
* **about.html** - This page contains an image, and a placeholder for scriptures pulled from the Church API.