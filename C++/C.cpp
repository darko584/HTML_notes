#include <iostream>

// Function declaration
void func(void);

static int count = 10; /* Global variable */

main() {
   while(count--) {
      func();
   }

   return 0;
}
// Function definition
void func( void ) {
   static int i = 5; // local static variable
   i++;
   std::cout << "i is " << i ;
   std::cout << " and count is " << count << std::endl;
}/*Step 1 − Open a new terminal window or cmd if you are on windows.

Step 2 − Change the directory to the directory in which you have your source.cpp file. For example, if it is in C:/Users/Dell/Documents, enter your command line −

$ cd 'C:/Users/Dell/Documents'
Step 3 − Now enter the following command to compile the source file using g++.

$ g++ -o <name-you-want-to-give> source.cpp
In place of <name-you-want-to-give> replace it by any name like myprogram, etc.

Step 4 − Run it! Now you can run the program using −

$ ./myprogram*/
