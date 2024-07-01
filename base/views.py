from django.shortcuts import render

# Create your views here.
def home(request):
    context= {
        'title': 'CDOCXS | Enabling a Digital Tomorrow',
        'content': 'CDOCXS is a digital marketing company that offers SEO services, PPC services, social media marketing services, web design services, web development services and a host of other online marketing services.',
    }

    return render(request, 'base/index.html', context)