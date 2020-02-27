 //// esse arquivo vamos mexer no terminal.. 
 ///com comando mom i node-schedule = tem a funcao de um pacote que da um agendamento de tarefa (temporizador)
 const schedule = require('node-schedule')
 ///criando a primeira tarefa temporizada
 const tarefa1 = schedule.scheduleJob('*/5 * 10 * * 2', function(){/// passando essa string,, que vai executar de 5 em 5 segundos,, * = em quarquer minuto ou seja 12 horas,, * ==qualquer mes,, 2 = vai executar na terça feira (0 domingo 1 segunda)
        console.log('executando tarefa 1!', new Date().getSeconds()) /// vai mostrar os segundos executado
       }) 
setTimeout(function() { //// setTimeout == temporizador padrao do java
       tarefa1.cancel() /// forma de cancelar o temporizador criado com schedule
       console.log('cancelando tarefa1!')
}, 20000); /// dizendo que vai canecelar depois de 20 segundos

///ex: criando outra tarefa de forma difrente
const regra = new schedule.RecurrenceRule() ///recuence= forma de recorrencia,, ai colocar dentro dessa regra os valore que quero usar
 regra.dayOfWeek = [new schedule.Range(1, 5)] /// dayOfWEEK == significa os dias da semana,,, range = os dias que vai executar (seg a sex)
 regra.hour = 10 //horas
 regra.second = 30 /// a cada 30 segundos vai executar a regra

 const tarefa2 = schedule.scheduleJob(regra, function(){
        console.log('executando tarefa2!', new Date().getSeconds)
 })
