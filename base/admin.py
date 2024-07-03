from django.contrib import admin

# Register your models here.
from .models import User,NavBar,firstSection,service

admin.site.register(User)
admin.site.register(NavBar)
admin.site.register(firstSection)
admin.site.register(service)
