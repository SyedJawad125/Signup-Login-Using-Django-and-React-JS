# Generated by Django 5.0.3 on 2024-07-18 07:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_ecommerce', '0007_contact_message'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]