
const api_data = document.getElementById("demo");
const myfunction = () => {
    let a = new XMLHttpRequest();
    a.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            // console.log(data);

            let ans1 = data.map((val) => {
                return val
            })  
// console.log(val)
            // console.log(ans1)

            for (let i of ans1) {
                let box = document.createElement('div');
                api_data.appendChild(box);
                box.setAttribute("class", "box");
                for (var j in i) {


                    // box.innerHTML += `<b class = "clr">${j}</b> : <i class = clr1>${i[j]} </i> <br> <br>`
                    // box.className = "div1"

                    if(j == "id" || j == "title" || j == "price" || j == "description" || j == "category")
                    {
                        var span = document.createElement("span");
                        var text = document.createTextNode(j);
                        var text1 = document.createTextNode(" : ");

                        var data1 = document.createElement('p');
                        box.appendChild(data1);
                        span.appendChild(text);
                        span.appendChild(text1);
                        data1.appendChild(span);
                        let info = document.createTextNode(i[j]);
                        data1.appendChild(info);
                    }


                    else if(j == "image"){
                        var div_Img = document.createElement("div");
                        var img = document.createElement("img");



                        div_Img.appendChild(img);
                        data1.appendChild(div_Img)
                        div_Img.className = "image"
                        img.setAttribute("src",i[j]);
                        img.setAttribute("class","img");

                    }
                    else if(j == "rating"){
                        // console.log(b[i]);
                        for(let k in i[j]){
                            console.log(k,i[j][k]);
    
                            var span_id = document.createElement('span')
                            var text_id = document.createTextNode(k)
                            var text_id_colan = document.createTextNode(" : ")
    
    
    
    
                           
    
                            var rating = document.createElement("p");
                            box.appendChild(rating)
                            span_id.appendChild(text_id)
                            span_id.appendChild(text_id_colan)
                            rating.appendChild(span_id)
                            var ratin_data = document.createTextNode(i[j][k])
                            rating.appendChild(ratin_data)
                            
                            
                        }
                   }
                   
                }
            }
        }
    }
    a.open('GET', 'https://fakestoreapi.com/products/', true);
    a.send();
}


myfunction();
