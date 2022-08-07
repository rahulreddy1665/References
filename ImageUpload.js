const [image, setimage] = useState(null);
const toast = useToast();


useEffect(() => {
    // for fetching the data of User data,
    const fetchData = () => {
        try {
            AsyncStorage.getItem('sp_admin').then(value => {
                if (value != null) {
                    // URl for fetching the user details
                    axios
                        .get(URL_CONSTANTS.USERDETAILS_URL, {
                            headers: {
                                "x-access-token": value,
                            }
                        })
                        .then((response) => {
                            if (response.data.image !== null && response.data.image !== "") {
                                var image = response.data.image.split(",")
                                setFirstimage(image[0])
                                var array = []
                                var data = images
                                for (let i = 0; i < image.length; i++) {
                                    if (image[i] !== null && image[i] !== "") {
                                        data[i].image = image[i]
                                        array[i] = image[i]
                                    }
                                }
                                setCount(array.length)
                                setImages([...data])
                            }

                        })
                        .catch((error) => {
                            console.log("error", error);
                        });
                }
            })
        } catch (error) {
            setVisible(!visible);
        }
    };
    fetchData();
}, []);


const [count22, setCount] = useState(0)

const [firstimage, setFirstimage] = useState("")
const [multipleimages, setMultipleImages] = useState([]);

const [modalVisible, setModalVisible] = useState(false);
const [modalimage, setModalimage] = useState(true)
// Function for picking the image
const pickImage = () => {
    ImagePicker.openPicker({
        width: 1000,
        height: 1000,
        cropping: true,

    }).then(image => {
        var data = multipleimages
        const newImageUri = 'file:///' + image.path.split('file:/').join('');
        let filename = newImageUri.split('/').pop();
        if (multipleimages.length === 0) {
            var data2 = { image: image.path, img: newImageUri, type: filename, }
            data = [...data, data2]
        } else {
            var data2 = { image: image.path, img: newImageUri, type: filename, }
            data = [...data, data2]
        }

        setMultipleImages(data)
        var data2 = images


        var count = 0
        for (let i = 0; i < data2.length; i++) {
            if (count == 0) {
                if (data2[i].image == "plus.png") {
                    data2[i].image = newImageUri
                    data2[i].fillow = 1
                    count++
                    setCount(count22 + 1)
                }
            }
        }

        setImages([...data2])
        // Set loading effect animation
    });
};



const handleImageModal = (data) => {
    // setimage(data)
    setModalimage(data)
    // setVariable(data.count)
    setModalVisible(!modalVisible)
}





// Function for deleting the image
const handleDelete = (modalimage) => {
    if (multipleimages.length !== 0 || multipleimages.length !== null) {
        try {
            AsyncStorage.getItem('sp_admin').then(value => {
                if (value != null) {
                    const req = {
                        image: modalimage
                    }
                    // URL for deleting the image
                    axios
                        .post(URL_CONSTANTS.DELETEIMAGE_URL, req, {
                            headers: {
                                "x-access-token": value,
                            }
                        })
                        .then((response) => {

                            if (response.data.image !== null && response.data.image !== "") {
                                setModalVisible(!modalVisible)
                                var image = response.data.image.split(",")
                                var data = image2

                                for (let i = 0; i < data.length; i++) {
                                    if (image[i] !== null && image[i] !== "" && typeof image[i] !== "undefined") {
                                        data[i].image = image[i]

                                    } else {
                                        data[i].image = "plus.png"
                                    }
                                }

                                setImages([...data])
                                setCount(count22 - 1)
                                toast.show("Image deleted successfully", {
                                    type: "danger",
                                    placement: "top",
                                    duration: 5000,
                                    offset: 20,
                                    animationType: "zoom-in",
                                });

                            } else {
                                setModalVisible(!modalVisible)
                                toast.show("Image deleted successfully", {
                                    type: "danger",
                                    placement: "top",
                                    duration: 5000,
                                    offset: 20,
                                    animationType: "zoom-in",
                                });
                                setImages([...image2])

                            }
                        })
                        .catch((error) => {
                            console.log("error", error);
                        });
                }
            })
        } catch (error) {
            console.log(error)
        }
    } else {
        toast.show("There should be atleast one image", {
            type: "danger",
            placement: "top",
            duration: 5000,
            offset: 20,
            animationType: "zoom-in",
        });
    }
}

// Function for adding the image
const handlePictures = (modalimage) => {

    try {
        AsyncStorage.getItem('sp_admin').then(value => {
            if (value != null) {
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        "x-access-token": value,
                    },
                };
                let formD = new FormData();
                for (var i = 0; i < multipleimages.length; i++) {
                    formD.append('image', {
                        uri: multipleimages[i].image,
                        name: multipleimages[i].img,
                        type: mime.getType(multipleimages[i].type),
                    });
                }
                //    URL for adding the image
                axios
                    .post(
                        URL_CONSTANTS.ADDIMAGE_URL,
                        formD,
                        config
                    )
                    .then((response) => {
                        setMultipleImages([])
                        // var image = response.data.image.split(",")
                        // setMultiple(image)

                        toast.show("Image added successfully", {
                            type: "success",
                            placement: "top",
                            duration: 5000,
                            offset: 20,
                            animationType: "zoom-in",
                        });
                    })
                    .catch((error) => {
                        console.log(error)
                        toast.show("Netwrok Error while adding image please retry after sometime", {
                            type: "danger",
                            placement: "top",
                            duration: 5000,
                            offset: 20,
                            animationType: "zoom-in",
                        });
                        setMultipleImages([])
                    })
            }
        })
    } catch (error) {
        console.log(error)
    }


}


// Variables for images
const IMAGES = {
    image: 'plus.png',
    image: 'plus.png',
    image: 'plus.png',
    image: 'plus.png',
    image: 'plus.png',
    image: 'plus.png',
};

const [images, setImages] = useState([
    { id: 1, image: IMAGES.image, fillow: 0 },
    { id: 2, image: IMAGES.image, fillow: 0 },
    { id: 3, image: IMAGES.image, fillow: 0 },
    { id: 4, image: IMAGES.image, fillow: 0 },
    { id: 5, image: IMAGES.image, fillow: 0 },
    { id: 6, image: IMAGES.image, fillow: 0 },
]);

const [image2, setImage2] = useState([
    { id: 1, image: IMAGES.image, fillow: 0 },
    { id: 2, image: IMAGES.image, fillow: 0 },
    { id: 3, image: IMAGES.image, fillow: 0 },
    { id: 4, image: IMAGES.image, fillow: 0 },
    { id: 5, image: IMAGES.image, fillow: 0 },
    { id: 6, image: IMAGES.image, fillow: 0 },
]);

