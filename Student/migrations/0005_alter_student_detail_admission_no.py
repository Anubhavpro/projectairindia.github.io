# Generated by Django 4.1.5 on 2023-06-23 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Student', '0004_alter_student_detail_admission_no'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student_detail',
            name='Admission_no',
            field=models.CharField(default='Air/643818', max_length=10),
        ),
    ]