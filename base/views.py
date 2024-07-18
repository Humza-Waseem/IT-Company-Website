from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from .models import NavBar, firstSection , CompanyService, Contact,pagesContent, Careers

# Create your views here.
def home(request):
    firstSectionContent = firstSection.objects.first()
    sections= firstSection.objects.all()
    one = sections[1:3]
    two = sections[3:]
    context= {
        'firstSectionContent':firstSectionContent,
        'one':one,
        'two':two,
    }

    return render(request, 'base/index.html', context)
  
  


class getCareers(ListView):
    
    model = Careers
    template_name = 'base/careers.html'
    context_object_name = 'jobs'   # This is used to specify the name of the object that we want to use in the template. In this case, we are using tasks as the object name
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['jobs'] = context['jobs'].all # this allows us to filter the tasks based on the user that is logged in. This will only show the tasks that are created by the user that is logged in
        # context['count'] = context['jobs'].count() # this will count the number of tasks that are not completed
        return context




def getPageContent(request):
    pageContent = pagesContent.objects.all()  # Correct model name
    print(pageContent)  # Add this line to print the QuerySet
    for page in pageContent:
        print(page.name, page.title, page.content)  # Print each item in the QuerySet
    context = {
        'pageContent': pageContent,
    }
    return render(request, 'base/main.html', context)


    # pagevalue = pagesContent.objects.all()
    # context = {
    #     'pagevalue': pagevalue,
    # }
    # return render(request, 'base/banner.html', context)



def serviceSection(request):

    servicesList = CompanyService.objects.all()    
    firstThreeServices = servicesList[:3]
    nextThreeServices = servicesList[3:6]  
    pageName = "Services"
    
    # Store the next three objects in a variable
    context = {
        'firstThreeServices': firstThreeServices,
        'nextThreeServices': nextThreeServices,
        'pageName': pageName,

    }
    
    return render(request, 'base/services.html', context)


def about(request):

    firstSectionContent = firstSection.objects.first()
    context= {
        'firstSectionContent':firstSectionContent,
    }

    return render(request, 'base/about.html', context)


def careers(request):
    

    return render(request, 'base/careers.html')




def get_navbar_data(request):
    navigationBar = NavBar.objects.all()  
    pagename= "navbar"
    context = {
        'navigationBar': navigationBar,
        'pagename': pagename,
    }
    return render(request, 'navBar.html', context)




def contact_info(request):
    pageName = "Contact"
    context= {
     'pageName': pageName,
    }
    return render (request, 'base/contact.html',context)