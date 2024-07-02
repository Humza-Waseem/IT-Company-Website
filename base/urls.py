from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from . import views



urlpatterns = [
    
    path('',views.home ,name= "Home"),
    path('Services/',views.services ,name= "Services"),
    path('About/',views.about ,name= "About"),
    path('Careers/',views.careers ,name= "Careers"),
]