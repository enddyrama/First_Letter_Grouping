const firstLetter = (name)=> {
    if (name[0]=='a' || name[0]=='b' || name[0]=='c' || name[0]=='d'){
        console.log(`${name} masuk group pertama`)
    } else if (name[0]=='e' || name[0]=='f' || name[0]=='g' || name[0]=='h'){
        console.log(`${name} masuk group kedua`)
    } else {
        console.log(`${name} masuk group terakhir`)
    }
}


firstLetter('daniel')
firstLetter('himmelda')
firstLetter('taufik')
firstLetter('sergei')
