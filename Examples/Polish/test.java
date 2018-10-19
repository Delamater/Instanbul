Reader fileReader = new FileReader("c:\\data\\input-text.txt");

int data = fileReader.read();
while(data != -1) {
  //do something with data...
  doSomethingWithData(data);

  data = fileReader.read();
}
fileReader.close();