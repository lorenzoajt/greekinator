from django.http import HttpResponseRedirect
from django.shortcuts import render
from .textForm import textForm
from textblob import TextBlob
import json
import nltk

def get_info(request):
    nltk.download('punkt')
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = textForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            text1 = form.cleaned_data["Texto1"]
            blob = TextBlob(text1)
            modes = []
            sentences = []
            for s in blob.sentences:
                if s.polarity >= 0.5:
                    modes.append("Lydian")
                    sentences.append(str(s))
                elif s.polarity > 0 and s.polarity<0.5:
                    modes.append("Ionian")
                    sentences.append(str(s))
                elif s.polarity < 0 and s.polarity>=-0.5:
                    modes.append("Dorian")
                    sentences.append(str(s))  
                elif s.polarity < -0.5:
                    modes.append("Aeolian")
                    sentences.append(str(s))
                

            return render(request, 'sentimentAnalysis/results.html', {'form_data': json.dumps(modes), 'length':len(modes), 'sentences':json.dumps(sentences), 'print_sentence':sentences})            

            
            



    # if a GET (or any other method) we'll create a blank form
    else:
        form = textForm()

    return render(request, 'sentimentAnalysis/index.html', {'form': form})
