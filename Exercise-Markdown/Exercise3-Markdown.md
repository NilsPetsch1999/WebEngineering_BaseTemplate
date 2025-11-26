# (2) Color: Test the current color contrast (text/background), report the results of the test, and then fix them by changing the assigned colors

For this task I used the following contrast-checker from Web AIM:
https://webaim.org/resources/contrastchecker/
I also used the Chrome-Browsers Contrast check to get fast result of the contrast ratio

For all contrast issues with normal written text I changed the text-color to black
(#000000). Also I changed the background to more lighter green so the contrast ratio
also gets higher. For the Links in the “Related” Tab I changed the color of the links to:
darkblue. With these changes the contrast issues should be solved. 

# (2) Semantic HTML: Report on what happens when you try to navigate the page using a screen reader. Fix those navigation issues


For this Task i downloaded the NVDA Screen-Reader and tabbed through the webpage.
After that I went through the webpage using the screen Reader with TAB-Navigation.

I noted that:
• Not every text/content was accessible/readable with the Tab-Navigation e.g. Article-Text, Comments, “More Bears Tab” → Updated the Tab-index of the elements
• Language mix up. Aria – description in german, but website in english.

# (2) Audio: The <audio> player isn't accessible to hearing impaired people — can you add some kind of accessible alternative for these users?

To transcribe this audio I added an div under the Audio file with a “p” Tag and the text
from the audio. This way also people which cann’t not hear, get the information from the
audio file.

# (2) Forms

For this task I created a class “sr-only” for screen reader only elements. Also deleted the
hidden attribute, since it prevents screen readers.

To Achive the second part. I added the label elements and associated them together with the “for”
and “name” property

# (2) Comment Section: The show/hide comment control button is not currently keyboard-accessible. Can you make it keyboard accessible, both in terms of focusing it using the tab key, and activating it using the return key?

Already done before this exercise… I guess it was something like a div and I changed it to
a button. A button Is focuable and a div not (except it was set → Tabindex)

# (4) The table

Added aria-label with col-row description and the value.
Also added tabindexs to cells to make cells focusable.
Current Solution: Works fine but not the best solution.

# (6) Create a web component for the "Add comment" section

For this task I created a new file comments-component.ts This hold the webcomponent.
The template is on the bottom of the index.html file.

For a more precise description of the task i added a pdf to the "Exercise_PDF" folder, which also has images.