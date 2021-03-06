# Generated by Django 3.1.4 on 2020-12-12 16:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('administracion', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TipoCanchaModel',
            fields=[
                ('tipoCanchaId', models.AutoField(db_column='tc_id', primary_key=True, serialize=False, unique=True)),
                ('tipoCanchaNombre', models.CharField(db_column='tc_nombre', max_length=45)),
                ('tipoCanchaDescripcion', models.CharField(db_column='tc_desc', max_length=120)),
                ('createAt', models.DateTimeField(auto_now_add=True, db_column='created_at')),
                ('updatedAt', models.DateTimeField(auto_now=True, db_column='updated_at')),
                ('estado', models.BooleanField(default=True)),
            ],
            options={
                'db_table': 't_tipocancha',
            },
        ),
        migrations.CreateModel(
            name='CanchaModel',
            fields=[
                ('canchaId', models.AutoField(db_column='can_id', primary_key=True, serialize=False, unique=True)),
                ('canPrecio', models.DecimalField(db_column='can_precio', decimal_places=2, max_digits=5)),
                ('canNombre', models.CharField(db_column='can_nom', max_length=50)),
                ('createAt', models.DateTimeField(auto_now_add=True, db_column='created_at')),
                ('updatedAt', models.DateTimeField(auto_now=True, db_column='updated_at')),
                ('estado', models.BooleanField(default=True)),
                ('localId', models.ForeignKey(db_column='local_id', on_delete=django.db.models.deletion.PROTECT, related_name='canchasLocal', to='administracion.localmodel')),
                ('tipoCanchaId', models.ForeignKey(db_column='tc_id', on_delete=django.db.models.deletion.PROTECT, related_name='canchasTipoCancha', to='administracion.tipocanchamodel')),
            ],
            options={
                'db_table': 't_cancha',
            },
        ),
    ]
