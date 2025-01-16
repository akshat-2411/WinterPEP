function createMessage(defaultMessage,...names){
    const FinalMessage = []
    let i=0;
    while(i<names.length){
        FinalMessage.push(`${defaultMessage}, ${names[i]}!`)
        i++;
    }
    return FinalMessage;
}

const messages = createMessage("Hello", "Akshat", "Shanu", "Anshu");
console.log(messages);