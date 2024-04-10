# React-native-application
React native application to search a list of books in a library.
React Native mobile application which allows the user to search usingh OpenLibrary API.



The Book Library API free public API used for this application is: https://openlibrary.org/search.

Running application: 
Steps:

For Emulator, launch Android studio. 
Create a virtual Android device and start running it. 

from application: 

1. Download the source code.
2. run > "npm install" to install dependencies.
3. run > "npm start react-native" to run the application. 
4. Open another terminal, run > "npx react-native run-android" to install and launch the application on the emulator. 


Current application functionality:
1. Current application lists and give option to search through the list of books by their names (Book Title). 
2. All the books part of "https://openlibrary.org/search?q=abc" API as shown as a list in the home screen(page) of the application. 
3. User can click on Search bar, search for any books. The result will appear the same screen with selected book names. 
4. an option to show the wishlisted shows in an alert modal. 
5. View the details of each show by clicking the show row from the list. 
6. Details screen to show the website havingh all the details of the show. 

What could have been better:
1. Details screen to show the details of book selected in the next screen.
2. The app is not fast , as it should be.
3. Search does not works in all scenarios.
4. Not able to do on Test Cases.
5. Error loader is not working, it was working before didn't had time to fix it.

Difficulties:
1. Since, I was new to React Native, it was challenging to complete this assignment within the timeframe.
2. I tried to develop Show Details (which has selected book details), but I was not to complete on time.
3. Running a Android studio with Emulator, consuming lot of time and computer resources.


Limitations:
1. IOS platform testing is not done due to unavailable of MAC book. 



