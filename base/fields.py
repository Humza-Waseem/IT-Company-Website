from django.db.models.fields.files import ImageField, ImageFieldFile
from django.core.exceptions import ValidationError

class SVGAndImageFieldFile(ImageFieldFile):
    def save(self, name, content, save=True):
        if content.content_type not in ['image/jpeg', 'image/png', 'image/svg+xml']:
            raise ValidationError("File type is not supported")
        super().save(name, content, save)

class SVGAndImageField(ImageField):
    attr_class = SVGAndImageFieldFile

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.validators = [self._validate_svg_or_image]

    def _validate_svg_or_image(self, file):
        if file.content_type not in ['image/jpeg', 'image/png', 'image/svg+xml']:
            raise ValidationError("File type is not supported")
