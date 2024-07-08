from django.contrib import admin
# from .models import Image
# from django.utils.html import format_html
# Register your models here.
from .models import User,NavBar,firstSection,CompanyService,Contact
# from django_svg_image_form_field import SvgAndImageFormField


admin.site.register(User)
admin.site.register(NavBar)
admin.site.register(firstSection)


# class CompanyServiceAdminForm(forms.ModelForm):
#     class Meta:
#         model = CompanyService
#         fields = '__all__'

#     icon = SvgAndImageFormField(required=False)  # Optional: Allow leaving the icon empty
# @admin.register(CompanyService)
# class CompanyServiceAdmin(admin.ModelAdmin):
#     form = CompanyServiceAdminForm
#     list_display = ('name', 'content', 'icon')  # Add 'icon' to display the image


# admin.site.register(Image, ImageAdmin)
admin.site.register(CompanyService)
admin.site.register(Contact)
