from django import forms
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from django.http import HttpResponse

class textForm(forms.Form):
    Texto1 = forms.CharField(max_length=10000, label=' ', widget=forms.Textarea)