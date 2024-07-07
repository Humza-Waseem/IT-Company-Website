# base/context_processors.py

from .models import Contact

def contact_info(request):
    info = Contact.objects.first()
    return {'contact_info': info}
