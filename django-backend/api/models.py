from django.db import models
from django.contrib.auth.models import AbstractUser

class Session(models.Model):
  sport = models.CharField(max_length=50)
  date_time = models.DateTimeField()
  location = models.CharField(max_length=200)
  game_size = models.CharField(max_length=50)
  price_per_participant = models.DecimalField(max_digits=6, decimal_places=2)
  slots_remaining = models.PositiveIntegerField()

  def __str__(self):
    return f"{self.sport} at {self.location} on {self.date_time}"

class UserProfile(models.Model):
  username = models.CharField(max_length=100)
  email = models.EmailField(unique=True)
  password = models.CharField(max_length=255)