from django.shortcuts import render
from .models import NavBar, firstSection , CompanyService, Contact

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
  

def serviceSection(request):

    servicesList = CompanyService.objects.all()
    # servicesIcon = servicesList.icon
    
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
    

    return render(request, 'base/careers.html', context)




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