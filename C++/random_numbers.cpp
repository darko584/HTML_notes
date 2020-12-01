#include<iostream>
#include<stdio.h>
#include<time.h>
using namespace std;
int main(){
  srand((signed)time(0));
  for(int i = 0;i<10;i++){
  int  j=rand();
    cout<<j<<endl;
  }
}
