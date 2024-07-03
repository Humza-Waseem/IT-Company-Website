from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
   
    REQUIRED_FIELDS = [email,password]
    def __str__(self):
        return self.username
    
    

class NavBar(models.Model):
    logo = models.ImageField(upload_to='images/_bg', blank=True, null=True)
    name = models.CharField(max_length=100, null=True, blank=False)
    links = models.JSONField(default=list, null= True, blank=True)  

    def __str__(self):
        return self.name


class firstSection(models.Model):
    title = models.CharField(max_length=100 , null=False, blank=False)
    description = models.TextField(max_length=250, null=False, blank=False)
    image = models.ImageField(upload_to='images/_bg', blank=True, null=True)
    # return self.title
    def __str__(self):
         return self.title
    

