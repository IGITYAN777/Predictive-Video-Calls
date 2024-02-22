#include "mainwindow.h"
#include "ui_mainwindow.h"
#include <QDebug>

MainWindow::MainWindow(QWidget *parent)
    : QMainWindow(parent)
    , ui(new Ui::MainWindow)
{
    ui->setupUi(this);
}

MainWindow::~MainWindow()
{
    delete ui;
}


void MainWindow::on_pushButton_clicked()
{
    QString stringnumber = ui->lineEdit->text();

    this->close();

    bool ok;
    int number = stringnumber.toInt(&ok);
    if (ok) {
          if(number > 0){
              qDebug() << "You number is positive";
          }else if(number < 0){
              qDebug() << "You number is negative";
          }else{
              qDebug() << "You number is 0";
          }

     } else {
          qDebug() << "Invalid input. Please enter a valid number.";
     }
}

