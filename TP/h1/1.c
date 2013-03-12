// Технологично уличище "Електронни системи" към Технически университет - София (www.elsys-bg.org)
// 11 А клас
// 27 Номер
// Стефан Юлиянов Петров
// Да се разработи програма, която изисква от потребителя да въведе две целочислени числа, x и y, където x < y. Да се намери сумата на всички нечетни числа в интервала [x,y].






#include <stdio.h>
#include <stdlib.h>

int x,y,a,s;

int main() {

    printf("Vuvedi x : \n");
    scanf("%d",&x);
    printf("Vuvedi y, po-malko ot x : \n");
    scanf("%d",&y);

    s=0;
    a=x;

   for (a >= x; a <= y; a++) {
        if( (a%2)==0 ) {
            continue;
        }

        else {
            s=s+a;
        }
    }
    printf("Sborut e : %d", s);
   return 0;
}
