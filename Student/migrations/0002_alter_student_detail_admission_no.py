# Generated by Django 4.1.5 on 2023-06-15 06:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Student', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student_detail',
            name='Admission_no',
            field=models.CharField(default='TITAN/334291', max_length=10),
        ),
    ]
