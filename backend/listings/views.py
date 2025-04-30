from django.shortcuts import render
from rest_framework import generics
from .models import Listing
from .serializers import ListingSerializer


# Create your views here.
class ListingAPI(generics.ListCreateAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer