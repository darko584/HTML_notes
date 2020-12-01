#include<iostream>
using namespace std;

int joe (int a[5][5]);

int main(){
  int a[5][5];
  joe(a);
  for(int i=0;i<5;i++){
    for(int j=0;j<5;j++)
      cout<<a[i][j]<<'\t';
  cout<<endl;
  }
  return 0;
}

int joe(int a[5][5]){
  cout<<"wat up hit some umbers";
  for(int i=0;i<5;i++){
    for(int j=0;j<5;j++)
      cin>>a[i][j];
  }
  return a[10][5];/*return whatever is in the function parameter not return a */
}
