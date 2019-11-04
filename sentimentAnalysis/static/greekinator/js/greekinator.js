// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var NUM_STEPS = 32; // DO NOT CHANGE.
//////////////////////////////
//TONE.js setup for audio play back
var samplesPath = 'https://storage.googleapis.com/melody-mixer/piano/';
var samples = {};
var NUM_NOTES = 88;
var MIDI_START_NOTE = 21;
var mvae;
var currColor = [];
var numMelodies=0;
var Melodies_object;
var Chords_object;
var melody;
var chord;
var rhythm;
var ChordsLydian = ChordsLydian_Whole; 
var ChordsIonian = ChordsIonian_Whole;
var ChordsDorian = ChordsDorian_Whole;
var ChordsAeolian = ChordsAeolian_Whole;
var sequenceMel = [];
var sequenceChords = [];
var chordFlag = false;
 // setting up the FX
var filtro = new Tone.Filter();
var volume = new Tone.Gain();

for (var i = MIDI_START_NOTE; i < NUM_NOTES + MIDI_START_NOTE; i++) {
  samples[i] = samplesPath + i + '.mp3';
}

var players = new Tone.Players(samples, function onPlayersLoaded(){
    console.log("Tone.js players loaded");
});


// // patchbay 
players.connect(filtro);
filtro.connect(volume);
volume.toMaster();

// // values of FX
filtro.frequency.value = 15000;
volume.gain.value = 0.1;


init();

function init() {
    btnSample.addEventListener('click', modeSequence2);
    saveBtn.addEventListener('click', SaveSamples);
   // document.getElementById("rtm").addEventListener("click", changeRhythm);

    function SaveSamples(){
        /*for (var i = 0; i < sequenceMel.length; i++) {
            saveAs(new File([mm.sequenceProtoToMidi(sequenceMel[i])], 'greekinator.mid'));//needs to have the script Filesaver 
        }*/
        consolidate();
        saveAs(new File([mm.sequenceProtoToMidi(melody)], 'greekinatorMelody.mid'));//needs to have the script Filesaver 
        saveAs(new File([mm.sequenceProtoToMidi(chord)], 'greekinatorChord.mid'));//needs to have the script Filesaver 


    }
   

}
function changeRhythm(obj) {
        rhythm = $(obj).attr('class');
        if (rhythm == "Whole")
        {
            ChordsLydian = ChordsLydian_Whole; 
            ChordsIonian = ChordsIonian_Whole;
            ChordsDorian = ChordsDorian_Whole;
            ChordsAeolian = ChordsAeolian_Whole;
        }
        else if (rhythm == "Perc"){
            ChordsLydian = ChordsLydian_Perc; 
            ChordsIonian = ChordsIonian_Perc;
            ChordsDorian = ChordsDorian_Perc;
            ChordsAeolian = ChordsAeolian_Perc;
        }
        else if (rhythm == "Ra"){
            ChordsLydian = ChordsLydian_Ra; 
            ChordsIonian = ChordsIonian_Ra;
            ChordsDorian = ChordsDorian_Ra;
            ChordsAeolian = ChordsAeolian_Ra;
        }
        chordFlag = true;
        modeSequence2();

    }
    


function playNote(midiNote, numNoteHolds){
    var duration = Tone.Transport.toSeconds('8n') * (numNoteHolds || 1);
    var player = players.get(midiNote);
    player.fadeOut = 0.05;
    player.fadeIn = 0.01;
    //start sound
    player.start(Tone.now(), 0, duration);

}




function loadModel() {
 

  const url = 'https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_chords';
  mvae = new mm.MusicVAE(url);
  mvae.initialize().then(() => {
    console.log("loaded model");
    modeSequence();

  });

}


async function modeSequence(){
    const randZs = await mm.tf.tidy(() => mm.tf.randomNormal([1, mvae.decoder.zDims]));//gets random z values of the VAE in a tensor 2D
    sequenceMel = [];
    sequenceChords = [];
    
  for (var i = 0; i < simpleMelodies.length; i++){
    
      if (simpleMelodies[i]=="Lydian"){
    sequenceMel[i]= (await mvae.decode(randZs, 0.5, ["Cmaj7", "D7"]))[0] ;
    sequenceChords[i]= ChordsLydian;
    currColor[i] = '#ca110b';

    }
      else if (simpleMelodies[i]=="Ionian"){
    sequenceMel[i]= (await mvae.decode(randZs, 0.5, ["Cmaj7", "G7", "Am7", "Fmaj7"]))[0] ;
    sequenceChords[i]= ChordsIonian;
    currColor[i] = '#d73a31';
    }
      else if (simpleMelodies[i]=="Dorian"){
    sequenceMel[i]= (await mvae.decode(randZs, 0.5, ["Cm7", "Fmaj7"]))[0];
    sequenceChords[i]= ChordsDorian;    
    currColor[i] = '#56b1bf';

    }
      else if (simpleMelodies[i]=="Aeolian"){
    sequenceMel[i]= (await mvae.decode(randZs, 0.5, ["Cm7", "Abmaj7", "Ebmaj7", "Bbmaj7"]))[0];
    sequenceChords[i]= ChordsAeolian;
    currColor[i] = '#08708a';

    }

  }

  numMelodies = sequenceMel.length;
  WIDTH = TILE_SIZE * numMelodies;
  if(!Melodies_object) {
    loadP5();
  } 


}

async function modeSequence2(){
    const randZs = await mm.tf.tidy(() => mm.tf.randomNormal([1, mvae.decoder.zDims]));//gets random z values of the VAE in a tensor 2D
    if(chordFlag){
        sequenceChords = [];
    }
    else{
        sequenceMel = [];
    }
    
    
  for (var i = 0; i < simpleMelodies.length; i++){
    
      if (simpleMelodies[i]=="Lydian"){
        if(!chordFlag){
            sequenceMel[i]= (await mvae.decode(randZs, 0.5, ["Cmaj7", "D7"]))[0] ;
        }
        else{
           sequenceChords[i]= ChordsLydian; 
        }
        
        currColor[i] = '#ca110b';

      }
      else if (simpleMelodies[i]=="Ionian"){
        if(!chordFlag){
            sequenceMel[i]= (await mvae.decode(randZs, 0.5, ["Cmaj7", "G7", "Am7", "Fmaj7"]))[0] ;

        }
        else{
            sequenceChords[i]= ChordsIonian;
        }
    
        currColor[i] = '#d73a31';
      }
      else if (simpleMelodies[i]=="Dorian"){
        if(!chordFlag){
            sequenceMel[i]= (await mvae.decode(randZs, 0.5, ["Cm7", "Fmaj7"]))[0];

        }
        else{
            sequenceChords[i]= ChordsDorian;    

        }
        
        currColor[i] = '#56b1bf';

      }
      else if (simpleMelodies[i]=="Aeolian"){
        if(!chordFlag){
            sequenceMel[i]= (await mvae.decode(randZs, 0.5, ["Cm7", "Abmaj7", "Ebmaj7", "Bbmaj7"]))[0];

        }

        else{
            sequenceChords[i]= ChordsAeolian;
 
        }
        
        currColor[i] = '#08708a';

      }

  }

  numMelodies = sequenceMel.length;
  WIDTH = TILE_SIZE * numMelodies;
  
if(chordFlag == true){
    Chords_object.obj.sequence = sequenceChords;
    chordFlag = false;
}
else{
    Melodies_object.obj.sequence = sequenceMel;
}

  


}
//make an object of the whole melody
function consolidate(){    
    var copyMel = JSON.parse(JSON.stringify(sequenceMel));
    var copyChord = JSON.parse(JSON.stringify(sequenceMel));
    melody = copyMel[0];
    chord = copyChord[0];
    copyChord = JSON.parse(JSON.stringify(sequenceChords));
    chord['notes'] = JSON.parse(JSON.stringify(sequenceChords[0]['notes']));


    for(var i = 0; i < melody['notes'].length; i ++){
    melody['notes'][i]['quantizedStartStep'] = parseInt(melody['notes'][i]['quantizedStartStep']);
    melody['notes'][i]['quantizedEndStep'] = parseInt(melody['notes'][i]['quantizedEndStep']);
    }

    for(var i = 0; i < chord['notes'].length; i ++){
    chord['notes'][i]['quantizedStartStep'] = parseInt(chord['notes'][i]['quantizedStartStep']);
    chord['notes'][i]['quantizedEndStep'] = parseInt(chord['notes'][i]['quantizedEndStep']);
    }



    var increments = 32;
    for(var i = 1; i < copyMel.length; i++){
    var currMel = copyMel[i];
    for(var j=0;j<currMel['notes'].length;j++){
        var quantizedStartStep = parseInt(currMel['notes'][j]['quantizedStartStep']);
        var quantizedEndStep = parseInt(currMel['notes'][j]['quantizedEndStep']);
        currMel['notes'][j]['quantizedStartStep'] = quantizedStartStep + increments;
        currMel['notes'][j]['quantizedEndStep'] = quantizedEndStep + increments;
        melody['notes'].push(currMel['notes'][j]);
    }

    var currChord = copyChord[i];
    for(var j=0;j<currChord['notes'].length;j++){
        var quantizedStartStep = parseInt(currChord['notes'][j]['quantizedStartStep']);
        var quantizedEndStep = parseInt(currChord['notes'][j]['quantizedEndStep']);
        currChord['notes'][j]['quantizedStartStep'] = quantizedStartStep + increments;
        currChord['notes'][j]['quantizedEndStep'] = quantizedEndStep + increments;
        chord['notes'].push(currChord['notes'][j]);
    }

    increments += 32;
    }
}  

// }
// ///////////////////////////////
// //p5.js setup
var TILE_SIZE = 150;
var WIDTH = 0;


var HEIGHT = 170;
var sequenceIndex = -1;
var stepIndex = -1;

       
        

// ________________________________-Class

class Visualizer
{
    constructor(WIDTH, HEIGHT, TILE_SIZE, bgcolor,NUM_STEPS,sequence,currColor, MIDI_START_NOTE, div)
    {
        this.obj = new p5(function(p5) 
        {
            p5.sequence = sequence;
            p5.sequenceIndex = -1;
            p5.stepIndex = -1;
            // TILE_SIZE = 150;
            // WIDTH = TILE_SIZE * numMelodies;
            // HEIGHT = 170;
            p5.setup = async function()
            {
                p5.createCanvas(WIDTH, HEIGHT);
                p5.noStroke();
                
            }
            p5.draw = async function()
            {           
                p5.totalPlayTime = (Tone.Transport.bpm.value * NUM_STEPS * numMelodies) / 1000;
                p5.percent = Tone.Transport.seconds / p5.totalPlayTime % 1;
                //index of sequence 
                //and currStepIndex is the note between 0-31 of that playback
                p5.currSequenceIndex = Math.floor(p5.percent * numMelodies);
                p5.currStepIndex = Math.floor((p5.percent * numMelodies - p5.currSequenceIndex) * NUM_STEPS);
                

                var isCurrentStep = function (note)
                {
                    return note.quantizedStartStep === p5.currStepIndex;
                }
                
                if(Tone.Transport.state === 'started') { //playback started
                    if(p5.currStepIndex != p5.stepIndex) {
                    //here we search through all notes and find any that match our current step index
                    
                        p5.notes = p5.sequence [p5.currSequenceIndex].notes.filter(isCurrentStep);
                        p5.notes.forEach(function(note) {
                            p5.noteDuration = note.quantizedEndStep - note.quantizedStartStep;
                            playNote(note.pitch, p5.noteDuration);
                        });
                    }
                    p5.sequenceIndex = p5.currSequenceIndex;
                    p5.stepIndex = p5.currStepIndex;
                }

                p5.background(0);
                for(var i = 0; i < numMelodies; i++)
                {
                    p5.x = i * TILE_SIZE;
                    p5.y = HEIGHT-TILE_SIZE;
                
                    p5.fill(currColor[i]);
                    // p5.fill('#08708a');
                    p5.rect(p5.x, p5.y, TILE_SIZE, TILE_SIZE);


                    if(p5.sequence)
                    {
                        p5.drawNotes(p5.sequence[i].notes, p5.x, p5.y, TILE_SIZE, TILE_SIZE);
                    }
                    p5.fill('#d0d3c5')
                    p5.rect(p5.percent * WIDTH, 0, TILE_SIZE / NUM_STEPS, HEIGHT);
                    p5.text(p5.sequenceIndex + " - " + p5.currStepIndex, 15, 15);
                }


            }
            p5.drawNotes = function(notes, x, y, width, height)
            {
                p5.push();
                p5.translate(p5.x, p5.y);
                p5.cellWidth = width / NUM_STEPS;
                p5.cellHeight = height / NUM_NOTES;
                notes.forEach(function(note) {
                    p5.emptyNoteSpacer = 1;
                    p5.fill('#032b2f');   
                    p5.rect(p5.emptyNoteSpacer + p5.cellWidth * note.quantizedStartStep, height - p5.cellHeight * (note.pitch-MIDI_START_NOTE),
                        p5.cellWidth * (note.quantizedEndStep - note.quantizedStartStep) - p5.emptyNoteSpacer, p5.cellHeight);
                });
                p5.pop();
                updateBPM();    
            }
        },div);
    }
}

async function loadP5(){
    Melodies_object = new Visualizer(WIDTH, HEIGHT,TILE_SIZE,'red' ,NUM_STEPS,sequenceMel,currColor,MIDI_START_NOTE,'melodiesVisualizer');
    Chords_object = new Visualizer(WIDTH, HEIGHT,TILE_SIZE,'red' ,NUM_STEPS,sequenceChords,currColor, MIDI_START_NOTE,'chordsVisualizer');
}

function playPause() {
    if(!sequenceMel || !players) {
        return;
    }
    var loadingSpan = document.querySelector('.loading');
    if(Tone.Transport.state === 'started') {
        Tone.Transport.stop();
        loadingSpan.innerHTML = 'Play';
    } else {
        Tone.Transport.start();
        loadingSpan.innerHTML = 'Pause';
    }
}   


function updateBPM(){
     x= document.querySelector('.tempo').value;
     Tone.Transport.bpm.value = x;

}




$( document ).ready(loadModel);












