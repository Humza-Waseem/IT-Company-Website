from django.contrib import admin

# Register your models here.
from .models import User,NavBar,firstSection

admin.site.register(User)
admin.site.register(NavBar)
admin.site.register(firstSection)
