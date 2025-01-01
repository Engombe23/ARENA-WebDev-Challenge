from django.contrib import admin

from .models import Session, UserProfile

admin.site.register(Session)
admin.site.register(UserProfile)