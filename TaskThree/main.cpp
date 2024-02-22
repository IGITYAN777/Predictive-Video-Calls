#include "mainwindow.h"

#include <QApplication>
#include <QDebug>

int main(int argc, char *argv[])
{
    QApplication a(argc, argv);
    MainWindow w;
    w.show();

    char grade = 0;

    int number = 78;

        switch (number) {
            case 90 ... 100:
                grade = 'A';
                break;
            case 80 ... 89:
                grade = 'B';
                break;
            case 70 ... 79:
                grade = 'C';
                break;
            case 60 ... 69:
                grade = 'D';
                break;
            case 50 ... 59:
                grade = 'E';
                break;
            default:
                grade = 0;
                qDebug() << "We do not have such grade";
        }

        if(grade){
            qDebug() << "Your grade is: " << grade;
        }


        for(int i = 1; i <= 10; ++i){
            qDebug() << i;
        }

    return a.exec();
}
