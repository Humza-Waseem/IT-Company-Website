from django.shortcuts import render
from .models import NavBar, firstSection , CompanyService

# Create your views here.
def home(request):
    firstSectionContent = firstSection.objects.first()
    context= {
        'firstSectionContent':firstSectionContent,
    }

    return render(request, 'base/index.html', context)
  

def serviceSection(request):
    # Dummy data for testing
    # dummy_services = [
    #     {'name': 'Service 1'},
    #     {'name': 'Service 2'},
    #     {'name': 'Service 3'},
    # ]
    
    # # Normally fetched data
    # servicesList = CompanyService.objects.all()
    
    # # Combine dummy data with real data (if any)
    # combined_services = list(servicesList) + dummy_services
    
    # context = {'servicesList': combined_services}
    
    




    return render(request, 'base/services.html')
 

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


# def NavBarContent(request):
#     navContent = NavBar.objects.first()
#     context= {
#         'navContent':navContent,
#     }

#     return render(request, 'base/index.html', context)

# from django.shortcuts import render

def get_navbar_data(request):
    navbar = NavBar.objects.first()  # Assuming you only have one navbar

    context = {
        'navbar': navbar,
    }
    return render(request, 'navbar.html', context)