#include<iostream>
using namespace std;
int main(){
  int i =1 ;
  for(;;){
    ++i;
    cout<<i<<endl;


    if(i==100)
      break;
  }

  return 0;
}
