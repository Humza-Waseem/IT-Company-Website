from django.shortcuts import render
from .models import NavBar, firstSection,service

# Create your views here.
def home(request):
    content = firstSection.objects.first()
    context= {
        'content':content,
    }

    return render(request, 'base/index.html', context)
  

def services(request):
    servicesList = service.objects.all()    
    return render(request, 'information.html', {'servicesList': servicesList})

 

def about(request):
    context= {
        'title': 'CDOCXS | Services',
        'content': 'CDOCXS is a digital marketing company that offers SEO services, PPC services, social media marketing services, web design services, web development services and a host of other online marketing services.',
    }

    return render(request, 'base/about.html', context)


def careers(request):
    context= {
        'title': 'CDOCXS | Services',
        'content': 'CDOCXS is a digital marketing company that offers SEO services, PPC services, social media marketing services, web design services, web development services and a host of other online marketing services.',
    }

    return render(request, 'base/careers.html', context)