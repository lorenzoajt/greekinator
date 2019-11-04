var everyNote = 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B,'.repeat(20).split(',').map( function(x,i) {
    return x + '' + Math.floor(i/12);
});

//returns the midi pitch value for the given note.
//returns -1 if not found
function toMidi(note) {
    return everyNote.indexOf(note);
}

//Whole Chords----------------------
var ChordsLydian_Whole = { notes: [
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('E4'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('G4'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('C4'), quantizedStartStep: 16, quantizedEndStep: 32},
    {pitch: toMidi('D4'), quantizedStartStep: 16, quantizedEndStep: 32},
    {pitch: toMidi('F#4'), quantizedStartStep: 16, quantizedEndStep: 32},
    {pitch: toMidi('A4'), quantizedStartStep: 16, quantizedEndStep: 32},
    
]};

var ChordsIonian_Whole = { notes: [
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('E4'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('G4'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('G4'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('B4'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('D4'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('A4'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('C4'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('E4'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('F4'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('A4'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('C4'), quantizedStartStep: 24, quantizedEndStep: 32},
    
]};

var ChordsDorian_Whole = { notes: [
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('D#4'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('G4'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('F4'), quantizedStartStep: 16, quantizedEndStep: 32},
    {pitch: toMidi('A4'), quantizedStartStep: 16, quantizedEndStep: 32},
    {pitch: toMidi('C4'), quantizedStartStep: 16, quantizedEndStep: 32},
    
]};
var ChordsAeolian_Whole = { notes: [
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('D#4'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('G4'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('G#4'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('C4'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('D#4'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('D#4'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('G4'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('A#4'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('A#4'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('D4'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('F4'), quantizedStartStep: 24, quantizedEndStep: 32},
    
]};


//----------------High percusive
var ChordsLydian_Perc = { notes: [
    {pitch: toMidi('C3'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('D4'), quantizedStartStep: 0, quantizedEndStep: 4},
    {pitch: toMidi('F#4'), quantizedStartStep: 0, quantizedEndStep: 4},
    {pitch: toMidi('A4'), quantizedStartStep: 0, quantizedEndStep: 4},
    {pitch: toMidi('D4'), quantizedStartStep: 4, quantizedEndStep: 8},
    {pitch: toMidi('F#4'), quantizedStartStep: 4, quantizedEndStep: 8},
    {pitch: toMidi('A4'), quantizedStartStep: 4, quantizedEndStep: 8},
    {pitch: toMidi('D4'), quantizedStartStep: 8, quantizedEndStep: 12},
    {pitch: toMidi('F#4'), quantizedStartStep: 8, quantizedEndStep: 12},
    {pitch: toMidi('A4'), quantizedStartStep: 8, quantizedEndStep: 12},
    {pitch: toMidi('D4'), quantizedStartStep: 12, quantizedEndStep: 16},
    {pitch: toMidi('F#4'), quantizedStartStep: 12, quantizedEndStep: 16},
    {pitch: toMidi('A4'), quantizedStartStep: 12, quantizedEndStep: 16},
    {pitch: toMidi('C3'), quantizedStartStep: 16, quantizedEndStep: 32},
    {pitch: toMidi('C4'), quantizedStartStep: 16, quantizedEndStep: 32},    
    {pitch: toMidi('E4'), quantizedStartStep: 16, quantizedEndStep: 20},
    {pitch: toMidi('G4'), quantizedStartStep: 16, quantizedEndStep: 20},
    {pitch: toMidi('G5'), quantizedStartStep: 16, quantizedEndStep: 20},    
    {pitch: toMidi('E4'), quantizedStartStep: 20, quantizedEndStep: 24},
    {pitch: toMidi('G4'), quantizedStartStep: 20, quantizedEndStep: 24},
    {pitch: toMidi('G5'), quantizedStartStep: 20, quantizedEndStep: 24},
    {pitch: toMidi('E4'), quantizedStartStep: 24, quantizedEndStep: 28},
    {pitch: toMidi('G4'), quantizedStartStep: 24, quantizedEndStep: 28},
    {pitch: toMidi('G5'), quantizedStartStep: 24, quantizedEndStep: 28},
    {pitch: toMidi('E4'), quantizedStartStep: 28, quantizedEndStep: 32},
    {pitch: toMidi('G4'), quantizedStartStep: 28, quantizedEndStep: 32},
    {pitch: toMidi('G5'), quantizedStartStep: 28, quantizedEndStep: 32},    
     
]};


var ChordsIonian_Perc = { notes: [
    {pitch: toMidi('C3'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('E4'), quantizedStartStep: 0, quantizedEndStep: 4},
    {pitch: toMidi('G4'), quantizedStartStep: 0, quantizedEndStep: 4},
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 4},
    {pitch: toMidi('E4'), quantizedStartStep: 4, quantizedEndStep: 8},
    {pitch: toMidi('G4'), quantizedStartStep: 4, quantizedEndStep: 8},
    {pitch: toMidi('C4'), quantizedStartStep: 4, quantizedEndStep: 8},

    {pitch: toMidi('G3'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('G4'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('B4'), quantizedStartStep: 8, quantizedEndStep: 12},
    {pitch: toMidi('D4'), quantizedStartStep: 8, quantizedEndStep: 12},
    {pitch: toMidi('G5'), quantizedStartStep: 8, quantizedEndStep: 12},
    {pitch: toMidi('B4'), quantizedStartStep: 12, quantizedEndStep: 16},
    {pitch: toMidi('D4'), quantizedStartStep: 12, quantizedEndStep: 16},
    {pitch: toMidi('G5'), quantizedStartStep: 12, quantizedEndStep: 16},
    {pitch: toMidi('C3'), quantizedStartStep: 16, quantizedEndStep: 32},

    {pitch: toMidi('A3'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('A4'), quantizedStartStep: 16, quantizedEndStep: 24},    
    {pitch: toMidi('C4'), quantizedStartStep: 16, quantizedEndStep: 20},
    {pitch: toMidi('E4'), quantizedStartStep: 16, quantizedEndStep: 20},
    {pitch: toMidi('A5'), quantizedStartStep: 16, quantizedEndStep: 20},    
    {pitch: toMidi('C4'), quantizedStartStep: 20, quantizedEndStep: 24},
    {pitch: toMidi('E4'), quantizedStartStep: 20, quantizedEndStep: 24},
    {pitch: toMidi('A5'), quantizedStartStep: 20, quantizedEndStep: 24},
    
    {pitch: toMidi('F3'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('F4'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('A4'), quantizedStartStep: 24, quantizedEndStep: 28},
    {pitch: toMidi('C4'), quantizedStartStep: 24, quantizedEndStep: 28},
    {pitch: toMidi('F5'), quantizedStartStep: 24, quantizedEndStep: 28},
    {pitch: toMidi('A4'), quantizedStartStep: 28, quantizedEndStep: 32},
    {pitch: toMidi('C4'), quantizedStartStep: 28, quantizedEndStep: 32},
    {pitch: toMidi('F5'), quantizedStartStep: 28, quantizedEndStep: 32},    
     
]};


var ChordsDorian_Perc = { notes: [
    {pitch: toMidi('C3'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('D#4'), quantizedStartStep: 0, quantizedEndStep: 4},
    {pitch: toMidi('G4'), quantizedStartStep: 0, quantizedEndStep: 4},
    {pitch: toMidi('C5'), quantizedStartStep: 0, quantizedEndStep: 4},
    {pitch: toMidi('D#4'), quantizedStartStep: 4, quantizedEndStep: 8},
    {pitch: toMidi('G4'), quantizedStartStep: 4, quantizedEndStep: 8},
    {pitch: toMidi('C5'), quantizedStartStep: 4, quantizedEndStep: 8},
    {pitch: toMidi('D#4'), quantizedStartStep: 8, quantizedEndStep: 12},
    {pitch: toMidi('G4'), quantizedStartStep: 8, quantizedEndStep: 12},
    {pitch: toMidi('C5'), quantizedStartStep: 8, quantizedEndStep: 12},
    {pitch: toMidi('D4'), quantizedStartStep: 12, quantizedEndStep: 16},
    {pitch: toMidi('G4'), quantizedStartStep: 12, quantizedEndStep: 16},
    {pitch: toMidi('C5'), quantizedStartStep: 12, quantizedEndStep: 16},
    {pitch: toMidi('F3'), quantizedStartStep: 16, quantizedEndStep: 32},
    {pitch: toMidi('F4'), quantizedStartStep: 16, quantizedEndStep: 32},    
    {pitch: toMidi('A4'), quantizedStartStep: 16, quantizedEndStep: 20},
    {pitch: toMidi('C4'), quantizedStartStep: 16, quantizedEndStep: 20},
    {pitch: toMidi('F5'), quantizedStartStep: 16, quantizedEndStep: 20},    
    {pitch: toMidi('A4'), quantizedStartStep: 20, quantizedEndStep: 24},
    {pitch: toMidi('C4'), quantizedStartStep: 20, quantizedEndStep: 24},
    {pitch: toMidi('F5'), quantizedStartStep: 20, quantizedEndStep: 24},
    {pitch: toMidi('A4'), quantizedStartStep: 24, quantizedEndStep: 28},
    {pitch: toMidi('C4'), quantizedStartStep: 24, quantizedEndStep: 28},
    {pitch: toMidi('F5'), quantizedStartStep: 24, quantizedEndStep: 28},
    {pitch: toMidi('A4'), quantizedStartStep: 28, quantizedEndStep: 32},
    {pitch: toMidi('C4'), quantizedStartStep: 28, quantizedEndStep: 32},
    {pitch: toMidi('F5'), quantizedStartStep: 28, quantizedEndStep: 32},    
     
]};

var ChordsAeolian_Perc = { notes: [
    {pitch: toMidi('C3'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('D#4'), quantizedStartStep: 0, quantizedEndStep: 4},
    {pitch: toMidi('G4'), quantizedStartStep: 0, quantizedEndStep: 4},
    {pitch: toMidi('D#4'), quantizedStartStep: 4, quantizedEndStep: 8},
    {pitch: toMidi('G4'), quantizedStartStep: 4, quantizedEndStep: 8},

    {pitch: toMidi('G#3'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('G#4'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('C4'), quantizedStartStep: 8, quantizedEndStep: 12},
    {pitch: toMidi('D#4'), quantizedStartStep: 8, quantizedEndStep: 12},
    {pitch: toMidi('C4'), quantizedStartStep: 12, quantizedEndStep: 16},
    {pitch: toMidi('D#4'), quantizedStartStep: 12, quantizedEndStep: 16},

    {pitch: toMidi('D#3'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('D#4'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('G4'), quantizedStartStep: 16, quantizedEndStep: 20},
    {pitch: toMidi('A#4'), quantizedStartStep: 16, quantizedEndStep: 20},    
    {pitch: toMidi('G4'), quantizedStartStep: 20, quantizedEndStep: 24},
    {pitch: toMidi('A#4'), quantizedStartStep: 20, quantizedEndStep: 24},
    
    
    {pitch: toMidi('A#3'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('A#4'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('D4'), quantizedStartStep: 24, quantizedEndStep: 28},
    {pitch: toMidi('F4'), quantizedStartStep: 24, quantizedEndStep: 28},
    {pitch: toMidi('D4'), quantizedStartStep: 28, quantizedEndStep: 32},
    {pitch: toMidi('F4'), quantizedStartStep: 28, quantizedEndStep: 32},     
]};

//MAINSTREAM RADIO
var ChordsLydian_Ra = { notes: [
    {pitch: toMidi('C3'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('A4'), quantizedStartStep: 0, quantizedEndStep: 2},    
    {pitch: toMidi('D4'), quantizedStartStep: 2, quantizedEndStep: 4},
    {pitch: toMidi('F#4'), quantizedStartStep: 4, quantizedEndStep: 6},
    {pitch: toMidi('D4'), quantizedStartStep: 6, quantizedEndStep: 8},

    {pitch: toMidi('A4'), quantizedStartStep: 8, quantizedEndStep: 10},    
    {pitch: toMidi('D4'), quantizedStartStep: 10, quantizedEndStep: 12},
    {pitch: toMidi('F#4'), quantizedStartStep: 12, quantizedEndStep: 14},
    {pitch: toMidi('D4'), quantizedStartStep: 14, quantizedEndStep: 16},    
    
    {pitch: toMidi('C3'), quantizedStartStep: 16, quantizedEndStep: 32},
    {pitch: toMidi('C4'), quantizedStartStep: 16, quantizedEndStep: 32},  
    {pitch: toMidi('C5'), quantizedStartStep: 16, quantizedEndStep: 18},
    {pitch: toMidi('E4'), quantizedStartStep: 18, quantizedEndStep: 20},
    {pitch: toMidi('G4'), quantizedStartStep: 20, quantizedEndStep: 22},    
    {pitch: toMidi('E4'), quantizedStartStep: 22, quantizedEndStep: 24},
    
    {pitch: toMidi('C5'), quantizedStartStep: 24, quantizedEndStep: 26},
    {pitch: toMidi('E4'), quantizedStartStep: 26, quantizedEndStep: 28},
    {pitch: toMidi('G4'), quantizedStartStep: 28, quantizedEndStep: 30},
    {pitch: toMidi('E4'), quantizedStartStep: 30, quantizedEndStep: 32},

     
]};


var ChordsIonian_Ra = { notes: [
    {pitch: toMidi('C3'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('C5'), quantizedStartStep: 0, quantizedEndStep: 2},    
    {pitch: toMidi('E4'), quantizedStartStep: 2, quantizedEndStep: 4},
    {pitch: toMidi('G4'), quantizedStartStep: 4, quantizedEndStep: 6},
    {pitch: toMidi('E4'), quantizedStartStep: 6, quantizedEndStep: 8},

    {pitch: toMidi('G3'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('G4'), quantizedStartStep: 8, quantizedEndStep: 16},

    {pitch: toMidi('G5'), quantizedStartStep: 8, quantizedEndStep: 10},    
    {pitch: toMidi('B4'), quantizedStartStep: 10, quantizedEndStep: 12},
    {pitch: toMidi('D5'), quantizedStartStep: 12, quantizedEndStep: 14},
    {pitch: toMidi('B4'), quantizedStartStep: 14, quantizedEndStep: 16},    
    
    {pitch: toMidi('A3'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('A4'), quantizedStartStep: 16, quantizedEndStep: 24},  

    {pitch: toMidi('A5'), quantizedStartStep: 16, quantizedEndStep: 18},
    {pitch: toMidi('C5'), quantizedStartStep: 18, quantizedEndStep: 20},
    {pitch: toMidi('E5'), quantizedStartStep: 20, quantizedEndStep: 22},    
    {pitch: toMidi('A5'), quantizedStartStep: 22, quantizedEndStep: 24},
    
    {pitch: toMidi('F3'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('F4'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('F5'), quantizedStartStep: 24, quantizedEndStep: 26},
    {pitch: toMidi('A4'), quantizedStartStep: 26, quantizedEndStep: 28},
    {pitch: toMidi('C5'), quantizedStartStep: 28, quantizedEndStep: 30},
    {pitch: toMidi('F5'), quantizedStartStep: 30, quantizedEndStep: 32},

     
]};

var ChordsDorian_Ra = { notes: [
    {pitch: toMidi('C3'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 16},
    {pitch: toMidi('C5'), quantizedStartStep: 0, quantizedEndStep: 2},    
    {pitch: toMidi('D#4'), quantizedStartStep: 2, quantizedEndStep: 4},
    {pitch: toMidi('G4'), quantizedStartStep: 4, quantizedEndStep: 6},
    {pitch: toMidi('D#4'), quantizedStartStep: 6, quantizedEndStep: 8},

    {pitch: toMidi('C5'), quantizedStartStep: 8, quantizedEndStep: 10},    
    {pitch: toMidi('D#4'), quantizedStartStep: 10, quantizedEndStep: 12},
    {pitch: toMidi('G4'), quantizedStartStep: 12, quantizedEndStep: 14},
    {pitch: toMidi('D#4'), quantizedStartStep: 14, quantizedEndStep: 16},    
    
    {pitch: toMidi('F3'), quantizedStartStep: 16, quantizedEndStep: 32},
    {pitch: toMidi('F4'), quantizedStartStep: 16, quantizedEndStep: 32},  
    {pitch: toMidi('F5'), quantizedStartStep: 16, quantizedEndStep: 18},
    {pitch: toMidi('A4'), quantizedStartStep: 18, quantizedEndStep: 20},
    {pitch: toMidi('C5'), quantizedStartStep: 20, quantizedEndStep: 22},    
    {pitch: toMidi('A4'), quantizedStartStep: 22, quantizedEndStep: 24},
    
    {pitch: toMidi('F5'), quantizedStartStep: 24, quantizedEndStep: 26},
    {pitch: toMidi('A4'), quantizedStartStep: 26, quantizedEndStep: 28},
    {pitch: toMidi('C5'), quantizedStartStep: 28, quantizedEndStep: 30},
    {pitch: toMidi('A4'), quantizedStartStep: 30, quantizedEndStep: 32},

     
]};
var ChordsAeolian = { notes: [
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('D#4'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('G4'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('G#4'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('C4'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('D#4'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('D#4'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('G4'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('A#4'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('A#4'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('D4'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('F4'), quantizedStartStep: 24, quantizedEndStep: 32},
    
]};

var ChordsAeolian_Ra = { notes: [
    {pitch: toMidi('C3'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('C4'), quantizedStartStep: 0, quantizedEndStep: 8},
    {pitch: toMidi('C5'), quantizedStartStep: 0, quantizedEndStep: 2},    
    {pitch: toMidi('D#4'), quantizedStartStep: 2, quantizedEndStep: 4},
    {pitch: toMidi('G4'), quantizedStartStep: 4, quantizedEndStep: 6},
    {pitch: toMidi('D#4'), quantizedStartStep: 6, quantizedEndStep: 8},

    {pitch: toMidi('G#3'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('G#4'), quantizedStartStep: 8, quantizedEndStep: 16},
    {pitch: toMidi('G#5'), quantizedStartStep: 8, quantizedEndStep: 10},    
    {pitch: toMidi('C5'), quantizedStartStep: 10, quantizedEndStep: 12},
    {pitch: toMidi('D#5'), quantizedStartStep: 12, quantizedEndStep: 14},
    {pitch: toMidi('C5'), quantizedStartStep: 14, quantizedEndStep: 16},    
    
    {pitch: toMidi('D#3'), quantizedStartStep: 16, quantizedEndStep: 24},
    {pitch: toMidi('D#4'), quantizedStartStep: 16, quantizedEndStep: 24},  
    {pitch: toMidi('D#5'), quantizedStartStep: 16, quantizedEndStep: 18},
    {pitch: toMidi('G5'), quantizedStartStep: 18, quantizedEndStep: 20},
    {pitch: toMidi('A#5'), quantizedStartStep: 20, quantizedEndStep: 22},    
    {pitch: toMidi('D#5'), quantizedStartStep: 22, quantizedEndStep: 24},
    
    {pitch: toMidi('A#3'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('A#4'), quantizedStartStep: 24, quantizedEndStep: 32},
    {pitch: toMidi('D5'), quantizedStartStep: 24, quantizedEndStep: 26},
    {pitch: toMidi('F5'), quantizedStartStep: 26, quantizedEndStep: 28},
    {pitch: toMidi('A#5'), quantizedStartStep: 28, quantizedEndStep: 30},
    {pitch: toMidi('D5'), quantizedStartStep: 30, quantizedEndStep: 32},

     
]};