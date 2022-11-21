import http from 'k6/http'
import {sleep} from 'k6'

export default function(){
    var url = "http://elasticbeanstalk-us-east-1-751647422968.s3-website-us-east-1.amazonaws.com/"

    var result = http.get(url);
    console.log(result.status)
    sleep(1);
    
}