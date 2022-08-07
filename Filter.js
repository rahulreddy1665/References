// FIlter function for name wise search of the users
const filter = data => {
    var filt = data.nativeEvent.text
    if (filt !== "") {
        let constiname = data.nativeEvent.text.toUpperCase();
        let array = [];
        var matched_terms = [];
        for (let i = 0; i < DATA.length; i++) {
            let name = DATA[i].label.toUpperCase();
            if (name.toUpperCase().lastIndexOf(constiname, 0) === 0) {
                array.push(DATA[i]);
            } else {
                setData([])
                setError(constiname)
            }
        }
        setData(array);
    } else {
        setData(DATA1)
    }

};