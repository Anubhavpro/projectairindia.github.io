# Generated by Django 4.1.5 on 2023-06-15 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Admin', '0003_alter_course_duration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='Duration',
            field=models.CharField(choices=[('3 mon', '3 MONTH'), ('1 mon', '1 MONTH'), ('6 mon', '6 MONTH')], max_length=100, null=True),
        ),
    ]
