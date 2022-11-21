import http from 'k6/http'
import {sleep, check} from 'k6'

export default function(){
    var url = "http://crudtienda2-env.eba-upcmx6xb.us-east-1.elasticbeanstalk.com/producto/create"

    
    var payload = JSON.stringify(
        {
            "nombre": 'Crash Bandicoot I',
            "precio": 100000,
            "image": "https://image.api.playstation.com/cdn/UP0002/CUSA07402_00/03ZtrPdjasIxzi8QrzOb2zCIHLMydFbh.png"
        }
    );
    var headers ={
        headers:{
            'Content-Type':'application/json'
        }
    }

    var result = http.post(url, payload, headers);

    console.log(result.body)
    console.log(result.status)
    
    check(result, {
        'status was 200': r => r.status == 200
    })

    sleep(1);
    
}