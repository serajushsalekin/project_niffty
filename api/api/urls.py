"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
"""
from django.contrib import admin
from django.urls import path
from core.views import Service, ListHistory


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Service.as_view()),
    path('actions/', ListHistory.as_view())
]
