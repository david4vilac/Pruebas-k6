import http from 'k6/http'
import {sleep, check} from 'k6'

export let options = {
    stages:[
        {duration:'30s', target:'30'},
        {duration:'30s', target:'30'},
        {duration:'30s', target:'60'},
        {duration:'30s', target:'60'},
    ]
}


export default function(){
    var url = "http://elasticbeanstalk-us-east-1-751647422968.s3-website-us-east-1.amazonaws.com/"
    

    var result = http.get(url);

    check(result, {
        'status was 200': r => r.status == 200
    })

    sleep(1);
    
}