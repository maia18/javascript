function Hour(date_) {
    if (date_ && !(date_ instanceof Date)){
        throw new TypeError('Waiting Date instace...');
    }
    if (!date_) {
        date_ = new Date();
    }
    return date_.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
    const date__ = new Date('01-01-1970 12:58:32');
    const hour = Hour(date__);
    console.log(hour);
} catch (error) {
    // Errors
} finally {
    console.log("Have a nice day!")
}
