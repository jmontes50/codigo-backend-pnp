# Generated by Django 3.1.4 on 2020-12-12 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LocalModel',
            fields=[
                ('localId', models.AutoField(db_column='local_id', primary_key=True, serialize=False, unique=True)),
                ('localDir', models.CharField(db_column='local_dir', max_length=50)),
                ('createAt', models.DateTimeField(auto_now_add=True, db_column='created_at')),
                ('updatedAt', models.DateTimeField(auto_now=True, db_column='updated_at')),
                ('estado', models.BooleanField(default=True)),
            ],
            options={
                'db_table': 't_local',
            },
        ),
    ]
