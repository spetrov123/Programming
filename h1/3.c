// Технологично уличище "Електронни системи" към Технически университет - София (www.elsys-bg.org)
// 11 А клас
// 27 Номер
// Стефан Юлиянов Петров
// Да се разработи програма, която изисква от потребителя да въведе две целочислени числа, x и y, където x<y. Да се намерят и изведат всички прости числа завършващи на 3 в интервала [x,y].


#include <stdio.h>
#include <stdlib.h>

int x,y,a,b,c;

int main() {

    printf("Vuvedi x : \n");
    scanf("%d",&x);
    printf("Vuvedi y, po-malko ot x : \n");
    scanf("%d",&y);

    a=x; b=0;

   for (a >= x; a <= y; a++) {
       if ((a%10)!=0) {
        b=(a%10);
        if (b==3) {
            c=a;
            printf("%d;", c);
            continue;
        }
        else {
            continue;
        }

       }
       else continue;
    }

   return 0;
}
