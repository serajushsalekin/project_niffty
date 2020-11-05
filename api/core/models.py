from django.db import models


class History(models.Model):
    operation_name = models.CharField(max_length=20)
    time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.operation_name
