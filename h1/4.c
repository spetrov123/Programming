// Технологично уличище "Електронни системи" към Технически университет - София (www.elsys-bg.org)
// 11 А клас
// 27 Номер
// Стефан Юлиянов Петров
// Да се разработи програма, която изисква от потребителя да въведе две целочислени числа, x и y, където x<y. Да се намерят и изведат всички прости числа на Фибоначи в интервала [x,y].



#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int x, y, first, second, next;


int main() {

    printf("Vuvedi x : \n");
    scanf("%d",&x);
    printf("Vuvedi y, po-malko ot x : \n");
    scanf("%d",&y);

   first = 0;
   second = 1;
   next = first + second;
   if (x == 0) printf("0, 1, ");
   while ((next > x) && (next < y)) {
        if (next > y) break;
        printf("%d, ", next);
        next = first + second;
        first = second;
        second = next;
   }





    return 0;

}
