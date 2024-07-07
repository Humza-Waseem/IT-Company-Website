from django.shortcuts import render
from .models import NavBar, firstSection , CompanyService, Contact

# Create your views here.
def home(request):
    firstSectionContent = firstSection.objects.first()
    context= {
        'firstSectionContent':firstSectionContent,
    }

    return render(request, 'base/index.html', context)
  

def serviceSection(request):

    servicesList = CompanyService.objects.all()
    firstThreeServices = servicesList[:3]
    nextThreeServices = servicesList[3:6]  
    
    # Store the next three objects in a variable
    context = {
        'firstThreeServices': firstThreeServices,
        'nextThreeServices': nextThreeServices,
    }
    
    return render(request, 'base/services.html', context)

def about(request):

    firstSectionContent = firstSection.objects.first()
    context= {
        'firstSectionContent':firstSectionContent,
    }

    return render(request, 'base/about.html', context)


def careers(request):
    context= {
     
    }

    return render(request, 'base/careers.html', context)




def get_navbar_data(request):
    navbar = NavBar.objects.first()  

    context = {
        'navbar': navbar,
    }
    return render(request, 'navbar.html', context)


# def contact_info(request):
#     info = Contact.objects.first()
#     return {'contact_info': info}