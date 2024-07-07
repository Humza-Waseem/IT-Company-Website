from django.db import models
# from svg_and_image_field.fields import SVGAndImageField

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
   
    REQUIRED_FIELDS = [email,password]
    def __str__(self):
        return self.username
    
    

# class NavBar(models.Model):
#     logo = models.ImageField(upload_to='images/_bg', blank=True, null=True)
#     name = models.CharField(max_length=100, null=True, blank=False)
#     links = models.JSONField(default=list, null= True, blank=True)  

#     def __str__(self):
#         return self.name





class NavBar(models.Model):
    logo = models.ImageField(upload_to='images/_bg', blank=True, null=True)
    name = models.CharField(max_length=100, null=True, blank=False)

    # Enhanced links field to store structured navigation data
    links = models.JSONField(default=list, null=True, blank=True)

    def __str__(self):
        return self.name

    def get_links(self):
        """
        Parses the JSON-formatted links field and returns a list of dictionaries,
        each containing 'name' and 'url' keys.

        Raises ValueError if the JSON data is invalid.
        """

        if self.links is None:
            return []

        try:
            link_data = json.loads(self.links)
            if not isinstance(link_data, list):
                raise ValueError("Invalid links data: Must be a list of dictionaries.")
            return link_data
        except json.JSONDecodeError:
            raise ValueError("Invalid JSON format in links field.")

    def get_nav_items(self):
        """
        Returns a list of tuples suitable for constructing navigation items
        in your template. Each tuple contains (name, url).

        Raises any exceptions encountered during link parsing.
        """

        links = self.get_links()
        return [(link['name'], link['url']) for link in links]




class firstSection(models.Model):
    title = models.CharField(max_length=100 , null=False, blank=False)
    description = models.TextField(max_length=250, null=False, blank=False)
    image = models.ImageField(upload_to='images/_bg', blank=True, null=True)
    # return self.title
    def __str__(self):
         return self.title
    




class CompanyService(models.Model):
    name = models.CharField(max_length=100, null = True, blank = False)  
    content = models.TextField(max_length=200, null = True, blank = False) 
    icon = models.ImageField(upload_to='static/images/_icons/', null=True, blank=True)  
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
   
    def __str__(self):
        return self.name
    

    # class Meta:
    #     ordering = ['-updated','created']   # here we are ordering the rooms according to the most recent updated and created room in the list..     The ( - ) sign means to update according to most recent....

class Contact(models.Model):
    # name = models.CharField(max_length=100, null = True, blank = False)  
    email = models.EmailField(max_length=100, null = True, blank = False) 
    # subject = models.CharField(max_length=100, null = True, blank = False)  
    address = models.CharField(max_length=100, null = True, blank = False)
    # message = models.TextField(max_length=200, null = True, blank = False)  
    phone = models.CharField(max_length=100, null = True, blank = False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
   
    # def __str__(self):
    #     return self.name
    

    # class Meta:
    #