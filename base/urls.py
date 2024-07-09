from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from . import views
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    
    path('',views.home ,name= "Home"),
    path('', views.get_navbar_data, name='navbar'),
    path('', views.getPageContent, name='banner'),
    # ... other URL patterns
    path("Services/", views.serviceSection, name="Services"),
    # path('Services/',views.serviceSection ,name= "Services"),
    path('About/',views.about ,name= "About"),
    path('Careers/',views.careers ,name= "Careers"),
    path('Contact/',views.contact_info ,name= "contact"),    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
