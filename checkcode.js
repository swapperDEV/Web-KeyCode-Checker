let actKey;
let actCode;
let key;

const checkCode = () => {
    switch (key){
        case 8:
            actKey = 'Backspace';
            actCode = key;
            break
        case 9:
            actKey = 'tab';
            actCode = key;
            break    
        case 12:
            actKey = 'clear';
            actCode = key;
            break    
        case 13:
            actKey = 'enter';
            actCode = key;
            break            
        case 16:
            actKey = 'shift';
            actCode = key;
            break
        case 17:
            actKey = 'ctrl';
            actCode = key;
            break    
        case 18:
            actKey = 'alt';
            actCode = key;
            break    
        case 19:
            actKey = 'pause';
            actCode = key;
            break      
        case 20:
            actKey = 'caps lock';
            actCode = key;
            break
        case 32:
            actKey = 'spacebar';
            actCode = key;
            break    
        case 33:
            actKey = 'pageup';
            actCode = key;
            break    
        case 34:
            actKey = 'pagedown';
            actCode = key;
            break            
        case 35:
            actKey = 'end';
            actCode = key;
            break
        case 36:
            actKey = 'home';
            actCode = key;
            break    
        case 37:
            actKey = 'left arrow';
            actCode = key;
            break    
        case 38:
            actKey = 'up arrow';
            actCode = key;
            break   
        case 39:
            actKey = 'right arrow';
            actCode = key;
            break
        case 40:
            actKey = 'down arrow';
            actCode = key;
            break    
        case 42:
            actKey = 'print';
            actCode = key;
            break    
        case 43:
            actKey = 'execute';
            actCode = key;
            break            
        case 44:
            actKey = 'Prnt Screen';
            actCode = key;
            break
        case 45:
            actKey = 'insert';
            actCode = key;
            break    
        case 46:
            actKey = 'delete';
            actCode = key;
            break    
        case 47:
            actKey = 'help';
            actCode = key;
            break
        case 48:
            actKey = '0';
            actCode = key;
            break    
        case 49:
            actKey = '1';
            actCode = key;
            break    
        case 50:
            actKey = '2';
            actCode = key;
            break            
        case 51:
            actKey = '3';
            actCode = key;
            break
        case 52:
            actKey = '4';
            actCode = key;
            break    
        case 53:
            actKey = '5';
            actCode = key;
            break    
        case 54:
            actKey = '6';
            actCode = key;
            break    
        case 55:
            actKey = '8';
            actCode = key;
            break    
        case 56:
            actKey = '8';
            actCode = key;
            break    
        case 57:
            actKey = '9';
            actCode = key;
            break            
        case 58:
            actKey = ':';
            actCode = key;
            break
        case 60:
            actKey = '<';
            actCode = key;
            break    
        case 64:
            actKey = '@';
            actCode = key;
            break    
        case 65:
            actKey = 'a';
            actCode = key;
            break    
        case 66:
            actKey = 'b';
            actCode = key;
            break            
        case 67:
            actKey = 'c';
            actCode = key;
            break
        case 68:
            actKey = 'd';
            actCode = key;
            break 
        case 69:
            actKey = 'e';
            actCode = key;
            break    
        case 70:
            actKey = 'f';
            actCode = key;
            break    
        case 71:
            actKey = 'g';
            actCode = key;
            break            
        case 72:
            actKey = 'h';
            actCode = key;
            break
        case 73:
            actKey = 'i';
            actCode = key;
            break   
        case 74:
            actKey = 'j';
            actCode = key;
            break    
        case 75:
            actKey = 'k';
            actCode = key;
            break            
        case 76:
            actKey = 'l';
            actCode = key;
            break
        case 77:
            actKey = 'm';
            actCode = key;
            break    
        case 78:
            actKey = 'n';
            actCode = key;
            break    
        case 79:
            actKey = 'o';
            actCode = key;
            break
        case 80:
            actKey = 'p';
            actCode = key;
            break    
        case 81:
            actKey = 'q';
            actCode = key;
            break    
        case 82:
            actKey = 'r';
            actCode = key;
            break            
        case 83:
            actKey = 's';
            actCode = key;
            break
        case 84:
            actKey = 't';
            actCode = key;
            break    
        case 85:
            actKey = 'u';
            actCode = key;
            break    
        case 86:
            actKey = 'v';
            actCode = key;
            break    
        case 87:
            actKey = 'w';
            actCode = key;
            break    
        case 88:
            actKey = 'x';
            actCode = key;
            break    
        case 89:
            actKey = 'y';
            actCode = key;
            break            
        case 90:
            actKey = 'z';
            actCode = key;
            break
        case 91:
            actKey = 'Win Key';
            actCode = key;
            break    
        case 93:
            actKey = 'Win Key';
            actCode = key;
            break    
        case 95:
            actKey = 'PC SLEEP';
            actCode = key;
            break    
        case 96:
            actKey = 'num 0';
            actCode = key;
            break            
        case 97:
            actKey = 'num 1';
            actCode = key;
            break
        case 98:
            actKey = 'num 2';
            actCode = key;
            break 
        case 99:
            actKey = 'num 3';
            actCode = key;
            break    
        case 100:
            actKey = 'num 4';
            actCode = key;
            break    
        case 101:
            actKey = 'num 5';
            actCode = key;
            break            
        case 102:
            actKey = 'num 6';
            actCode = key;
            break
        case 103:
            actKey = 'num 7';
            actCode = key;
            break  
        case 104:
            actKey = 'num 8';
            actCode = key;
            break 
        case 105:
            actKey = 'num 9';
            actCode = key;
            break    
        case 112:
            actKey = 'f1';
            actCode = key;
            break    
        case 113:
            actKey = 'f2';
            actCode = key;
            break            
        case 114:
            actKey = 'f3';
            actCode = key;
            break
        case 115:
            actKey = 'f4';
            actCode = key;
            break  
        case 116:
            actKey = 'f5';
            actCode = key;
            break
        case 117:
            actKey = 'f6';
            actCode = key;
            break  
        case 118:
            actKey = 'f7';
            actCode = key;
            break 
        case 119:
            actKey = 'f7';
            actCode = key;
            break    
        case 120:
            actKey = 'f9';
            actCode = key;
            break    
        case 121:
            actKey = 'f10';
            actCode = key;
            break            
        case 122:
            actKey = 'f11';
            actCode = key;
            break
        case 123:
            actKey = 'f12';
            actCode = key;
            break  
        default:
            actKey = 'Key without name'
            actCode = key;
}}