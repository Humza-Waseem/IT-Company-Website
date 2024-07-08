# base/context_processors.py

from .models import Contact
from .models import  CompanyService

def contact_info(request):
    info = Contact.objects.first()
    return {'contact_info': info}

def company_service(request):
    service = CompanyService.objects.all()
    return {'company_service': service}