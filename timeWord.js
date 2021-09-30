function timeWord(string){
    if (string == "00:00"){
        return "midnight"
    } else if (string == "12:00"){
        return "noon"
    } else {
        const hour = string[0] + string [1]
        const minutes = string[3] + string[4]
        let returnTime = hourKey[hour][0] + " " + timeWordMinutes(minutes) + " " + hourKey[hour][1]
        return returnTime
    }
}

const hourKey = {"00":["twelve", "am"], "01":["one", "am"], "02":["two", "am"], "03":["three", "am"], "04":["four", "am"], "05":["five", "am"],
"06":["six", "am"], "07":["seven", "am"], "08":["eight", "am"], "09":["nine", "am"], "10":["ten", "am"], "11":["eleven", "am"],
"12":["twelve", "pm"], "13":["one", "pm", "thirteen"], "14":["two", "pm", "fourteen"], "15":["three", "pm", "fifteen"],
"16":["four", "pm", "sixteen"], "17":["five", "pm", "seventeen"], "18":["six", "pm", "eighteen"], "19":["seven", "pm", "nineteen"],
"20":["eight", "pm", "twenty"], "21":["nine", "pm", "twenty one"], "22":["ten", "pm", "twenty two"], "23":["eleven", "pm", "twenty three"]}

const minuteTensKey = {"2":"twenty","3":"thirty", "4":"forty", "5":"fifty"}

function timeWordMinutes(minutes){
    if (minutes == "00"){
        return "o'clock"
    }

    if (Number(minutes) < 10 && Number(minutes) > 0){
        return "oh " + hourKey[minutes][0]
    }

    if (hourKey[minutes]){
         if (hourKey[minutes][2]){
        return hourKey[minutes][2]
        } else if (hourKey[minutes][0]){
        return hourKey[minutes][0]
        }
    }
    else {
        if (minutes[1] == '0'){
            const response = minuteTensKey[minutes[0]]
            return response
        } else {
        const response = minuteTensKey[minutes[0]] + " " + hourKey["0" + minutes[1]][0]
        return response
        }
    }
}


module.exports = {timeWord, timeWordMinutes};
