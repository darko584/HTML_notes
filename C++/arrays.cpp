#include<iostream>
using namespace std;

#include <iomanip>
using std::setw;

int func(int[]);

int main(){
  int a[15];
  cout<<"give me some values"<<endl;
  for(int i =0;i<15;i++){
    cin>>a[i];
  }
  cout<<"elements"<<setw(19)<<"array's_value"<<endl;
  for(int i= 0;i<15;i++){
    cout<<i<<setw(19)<<a[i]<<endl;
  }
  return 0;
}
