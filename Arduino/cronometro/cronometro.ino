void setup() {
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(13, OUTPUT);
}

void loop() {
  for (int m = 0; m < 60; m = m + 1){
    digitalWrite(8, LOW);
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
    digitalWrite(11, LOW);
    digitalWrite(12, LOW);
    digitalWrite(13, LOW);
      
    int led2 = m % 2;
    int led4 = m % 4;
    int led8 = m % 8;
    int led16 = m % 16;
    int led32 = m % 32;
    int led64 = m % 64;

    if (led2 == 1){digitalWrite(8, HIGH);}
    if (led4 == 2 or led4 == 3){digitalWrite(9, HIGH);}
    if (led8 == 4 or led8 == 5 or led8 == 6 or led8 == 7){digitalWrite(10, HIGH);}
    if (led16 == 8 or led16 == 9 or led16 == 10 or led16 == 11 or led16 == 12 or led16 == 13 or led16 == 14 or led16 == 15){digitalWrite(11, HIGH);}
    if (led32 == 16 or led32 == 17 or led32 == 18 or led32 == 19 or led32 == 20 or led32 == 21 or led32 == 22 or led32 == 23 or led32 == 24 or led32 == 25 or led32 == 26 or led32 == 27 or led32 == 28 or led32 == 29 or led32 == 30 or led32 == 31){digitalWrite(12, HIGH);}
    if (led64 == 32 or led64 == 33 or led64 == 34 or led64 == 35 or led64 == 36 or led64 == 37 or led64 == 38 or led64 == 39 or led64 == 40 or led64 == 41 or led64 == 42 or led64 == 43 or led64 == 44 or led64 == 45 or led64 == 46 or led64 == 47 or led64 == 48 or led64 == 49 or led64 == 50 or led64 == 51 or led64 == 52 or led64 == 53 or led64 == 54 or led64 == 55 or led64 == 56 or led64 == 57 or led64 == 58 or led64 == 59 or led64 == 60){digitalWrite(13, HIGH);}
    delay(75);
    
    for (int s = 1; s < 61; s = s + 1){
      digitalWrite(2, LOW);
      digitalWrite(3, LOW);
      digitalWrite(4, LOW);
      digitalWrite(5, LOW);
      digitalWrite(6, LOW);
      digitalWrite(7, LOW);

      int led2 = s % 2;
      int led4 = s % 4;
      int led8 = s % 8;
      int led16 = s % 16;
      int led32 = s % 32;
      int led64 = s % 64;

      if (led2 == 1){digitalWrite(2, HIGH);}
      if (led4 == 2 or led4 == 3){digitalWrite(3, HIGH);}
      if (led8 == 4 or led8 == 5 or led8 == 6 or led8 == 7){digitalWrite(4, HIGH);}
      if (led16 == 8 or led16 == 9 or led16 == 10 or led16 == 11 or led16 == 12 or led16 == 13 or led16 == 14 or led16 == 15){digitalWrite(5, HIGH);}
      if (led32 == 16 or led32 == 17 or led32 == 18 or led32 == 19 or led32 == 20 or led32 == 21 or led32 == 22 or led32 == 23 or led32 == 24 or led32 == 25 or led32 == 26 or led32 == 27 or led32 == 28 or led32 == 29 or led32 == 30 or led32 == 31){digitalWrite(6, HIGH);}
      if (led64 == 32 or led64 == 33 or led64 == 34 or led64 == 35 or led64 == 36 or led64 == 37 or led64 == 38 or led64 == 39 or led64 == 40 or led64 == 41 or led64 == 42 or led64 == 43 or led64 == 44 or led64 == 45 or led64 == 46 or led64 == 47 or led64 == 48 or led64 == 49 or led64 == 50 or led64 == 51 or led64 == 52 or led64 == 53 or led64 == 54 or led64 == 55 or led64 == 56 or led64 == 57 or led64 == 58 or led64 == 59 or led64 == 60){digitalWrite(7, HIGH);}
      delay(1000);      

    } //cierra for s
  }//cierra for m

}
