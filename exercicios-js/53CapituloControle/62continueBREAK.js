const nums = [1,2,3,4,5,6,7,8,9,10]
    for(x in nums){
        if(x ==5) break /// x= indice de numero,,, quando chegar no numero 5 ele encontra um break e para o processo.
   console.log('x =' + nums[x])
    }
    
    for(y in nums){
        if(y ==5) continue /// funcao sua é interronper a repeticao atual, e pula pra proxima repeticao.
        console.log('y=', nums[y])

    }

    ///ex de rótulo..
    externo:  for(a in nums){ /// ==rotulo
            for (b in nums){// b esta sendo indice de nums ... e o a tambem...
                    if (a == 2 && b ==3) break externo
                    console.log("par=",a,b)
            } 
    } 
    console.log('fim')
