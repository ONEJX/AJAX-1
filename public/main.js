let n = 2
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    console.log(n)
    request.open('GET',`/page${n}`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const arr = JSON.parse(request.response)
                arr.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                })
            }
             n+=1 
        }
    }
    request.send()
}
getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const object = JSON.parse(request.response)
                s1.textContent = object.name
            }   
        }
    }
    request.send()
}
getXML.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }
    request.send()
}
getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.css')
    request.onreadystatechange = ()=>{
        console.log(request.response)
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300){
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else{
                alert('加载css失败')
            }
        }
    }
    request.send() //readyState = 2
}

getJS.onclick = ()=>{
    console.log('2122')
    const request = new XMLHttpRequest()
    request.open('GET','/3.js')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            }else{
                alert('加载js失败')
            }
        }
    }
    request.send()
}

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/1.html')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            }else{
                alert('加载html失败')
            }
        }
    }
    request.send()
}
