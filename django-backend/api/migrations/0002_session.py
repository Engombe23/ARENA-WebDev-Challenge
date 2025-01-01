# Generated by Django 5.1.4 on 2024-12-25 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sport', models.CharField(max_length=50)),
                ('date_time', models.DateTimeField()),
                ('location', models.CharField(max_length=200)),
                ('game_size', models.CharField(max_length=50)),
                ('price_per_participant', models.DecimalField(decimal_places=2, max_digits=6)),
                ('slots_remaining', models.PositiveIntegerField()),
            ],
        ),
    ]