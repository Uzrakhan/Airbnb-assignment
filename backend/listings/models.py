from django.db import models

# Create your models here.
class Listing(models.Model) :
    title = models.CharField(max_length=200)
    location = models.CharField(max_length=100)
    price_per_night = models.IntegerField()
    ratings = models.FloatField()